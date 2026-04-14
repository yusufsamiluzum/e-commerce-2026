import { Component, inject, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CorporateService, SalesAnalyticsResponse, DailyRevenue, CorporateOrder } from '../services/corporate.service';

interface BarRect {
  x: number;
  y: number;
  w: number;
  h: number;
  data: DailyRevenue;
}

@Component({
  selector: 'app-sales-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales-analytics.html'
})
export class SalesAnalytics implements AfterViewInit {
  @ViewChild('revenueChart') canvasRef!: ElementRef<HTMLCanvasElement>;
  private corporateService = inject(CorporateService);

  analytics = signal<SalesAnalyticsResponse | null>(null);
  isLoading = signal(true);

  // Tarih filtresi
  startDate = signal('');
  endDate = signal('');
  activePreset = signal<string>('all');

  // Drill-down
  selectedDate = signal<string | null>(null);
  drillDownOrders = signal<CorporateOrder[]>([]);
  isDrillLoading = signal(false);
  hoveredPoint = signal<{ x: number; y: number; data: DailyRevenue } | null>(null);

  // Ürün drill-down
  selectedProduct = signal<string | null>(null);

  private barRects: BarRect[] = [];
  private chartPadding = { top: 20, right: 20, bottom: 55, left: 70 };

  statusLabels: Record<string, string> = {
    'PENDING': 'Bekleyen',
    'PROCESSING': 'İşleniyor',
    'SHIPPED': 'Kargoda',
    'DELIVERED': 'Teslim Edildi',
    'CANCELLED': 'İptal'
  };

  statusColors: Record<string, string> = {
    'PENDING': 'bg-yellow-500',
    'PROCESSING': 'bg-blue-500',
    'SHIPPED': 'bg-indigo-500',
    'DELIVERED': 'bg-emerald-500',
    'CANCELLED': 'bg-red-500'
  };

  statusTextColors: Record<string, string> = {
    'PENDING': 'text-yellow-400',
    'PROCESSING': 'text-blue-400',
    'SHIPPED': 'text-indigo-400',
    'DELIVERED': 'text-emerald-400',
    'CANCELLED': 'text-red-400'
  };

  constructor() {
    this.loadAnalytics();
  }

  ngAfterViewInit() { }

  loadAnalytics() {
    this.isLoading.set(true);
    this.selectedDate.set(null);
    this.drillDownOrders.set([]);
    const start = this.startDate();
    const end = this.endDate();
    this.corporateService.getSalesAnalytics(start || undefined, end || undefined).subscribe({
      next: (data) => {
        this.analytics.set(data);
        this.isLoading.set(false);
        setTimeout(() => this.drawChart(data.dailyRevenue), 50);
      },
      error: () => this.isLoading.set(false)
    });
  }

  applyDateFilter() {
    if (this.startDate() && this.endDate()) {
      this.activePreset.set('custom');
      this.loadAnalytics();
    }
  }

  clearFilter() {
    this.startDate.set('');
    this.endDate.set('');
    this.activePreset.set('all');
    this.loadAnalytics();
  }

  setPreset(preset: string) {
    const today = new Date();
    let start = new Date();

    switch (preset) {
      case '7d':
        start.setDate(today.getDate() - 7);
        break;
      case '30d':
        start.setDate(today.getDate() - 30);
        break;
      case '90d':
        start.setDate(today.getDate() - 90);
        break;
      case 'year':
        start = new Date(today.getFullYear(), 0, 1);
        break;
      case 'all':
        this.clearFilter();
        return;
    }

    this.startDate.set(this.formatDate(start));
    this.endDate.set(this.formatDate(today));
    this.activePreset.set(preset);
    this.loadAnalytics();
  }

  private formatDate(d: Date): string {
    return d.toISOString().split('T')[0];
  }

  getMaxQuantity(): number {
    const data = this.analytics();
    if (!data || !data.topProducts.length) return 1;
    return Math.max(...data.topProducts.map(p => p.totalQuantitySold));
  }

  getTotalStatusCount(): number {
    const data = this.analytics();
    if (!data) return 1;
    return data.statusDistribution.reduce((sum, s) => sum + s.count, 0) || 1;
  }

  // ─── Chart Mouse Events ────────────────────────────────

  onChartMouseMove(event: MouseEvent) {
    if (!this.barRects.length) return;
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const mx = event.clientX - rect.left;
    const my = event.clientY - rect.top;

    // Sadece çubuğun üzerindeyse algila
    let hovered: BarRect | null = null;
    for (const bar of this.barRects) {
      if (mx >= bar.x && mx <= bar.x + bar.w && my >= bar.y && my <= bar.y + bar.h) {
        hovered = bar;
        break;
      }
    }

    if (hovered) {
      this.hoveredPoint.set({
        x: hovered.x + hovered.w / 2,
        y: hovered.y,
        data: hovered.data
      });
      canvas.style.cursor = 'pointer';
    } else {
      this.hoveredPoint.set(null);
      canvas.style.cursor = 'default';
    }
  }

  onChartClick(event: MouseEvent) {
    if (!this.barRects.length) return;
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const mx = event.clientX - rect.left;
    const my = event.clientY - rect.top;

    for (const bar of this.barRects) {
      if (mx >= bar.x && mx <= bar.x + bar.w && my >= bar.y && my <= bar.y + bar.h) {
        this.drillIntoDate(bar.data.date);
        return;
      }
    }
  }

  onChartLeave() {
    this.hoveredPoint.set(null);
  }

  drillIntoDate(date: string) {
    if (this.selectedDate() === date) {
      this.selectedDate.set(null);
      this.drillDownOrders.set([]);
      // Redraw chart to remove highlight
      const data = this.analytics();
      if (data) setTimeout(() => this.drawChart(data.dailyRevenue), 50);
      return;
    }

    this.selectedDate.set(date);
    this.isDrillLoading.set(true);

    // Redraw chart with selected highlight
    const data = this.analytics();
    if (data) setTimeout(() => this.drawChart(data.dailyRevenue), 50);

    this.corporateService.getStoreOrdersByDate(date).subscribe({
      next: (orders) => {
        this.drillDownOrders.set(orders);
        this.isDrillLoading.set(false);
      },
      error: () => this.isDrillLoading.set(false)
    });
  }

  closeDrillDown() {
    this.selectedDate.set(null);
    this.drillDownOrders.set([]);
    const data = this.analytics();
    if (data) setTimeout(() => this.drawChart(data.dailyRevenue), 50);
  }

  toggleProductDrill(sku: string) {
    this.selectedProduct.set(this.selectedProduct() === sku ? null : sku);
  }

  getProductOrders(sku: string): CorporateOrder[] {
    return this.drillDownOrders().filter(o =>
      o.items.some(item => item.productSku === sku)
    );
  }

  getDayRevenue(): number {
    return this.drillDownOrders().reduce((sum, o) => sum + o.totalPrice, 0);
  }

  getDayItemCount(): number {
    return this.drillDownOrders().reduce((sum, o) =>
      sum + o.items.reduce((s, item) => s + item.quantity, 0), 0);
  }

  // LocalDateTime format: ISO string "2026-04-15T10:30:00" veya array [2026, 4, 15, 10, 30]
  private extractDateString(dateVal: any): string {
    if (!dateVal) return '';
    if (typeof dateVal === 'string') {
      return dateVal.substring(0, 10);
    }
    if (Array.isArray(dateVal) && dateVal.length >= 3) {
      const y = dateVal[0];
      const m = String(dateVal[1]).padStart(2, '0');
      const d = String(dateVal[2]).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }
    return '';
  }

  // ─── Bar Chart Drawing ─────────────────────────────────
  private drawChart(dailyData: DailyRevenue[]) {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.barRects = [];

    // HiDPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width;
    const H = rect.height;

    ctx.clearRect(0, 0, W, H);

    if (!dailyData || dailyData.length === 0) {
      ctx.fillStyle = '#6b7280';
      ctx.font = '14px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Bu tarih aralığında veri bulunamadı', W / 2, H / 2);
      return;
    }

    const pad = this.chartPadding;
    const chartW = W - pad.left - pad.right;
    const chartH = H - pad.top - pad.bottom;

    const revenues = dailyData.map(d => d.revenue);
    const maxRevenue = Math.max(...revenues, 1) * 1.1; // %10 padding

    // ─── Grid lines + Y-axis labels ───
    ctx.strokeStyle = '#1f2937';
    ctx.lineWidth = 1;
    const gridLines = 5;
    for (let i = 0; i <= gridLines; i++) {
      const y = pad.top + (chartH / gridLines) * i;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(W - pad.right, y);
      ctx.stroke();

      const val = maxRevenue - (maxRevenue / gridLines) * i;
      ctx.fillStyle = '#6b7280';
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('$' + val.toFixed(0), pad.left - 10, y + 4);
    }

    // ─── Bar Drawing ───
    const barCount = dailyData.length;
    const gap = Math.max(2, Math.min(8, chartW / barCount * 0.2));
    const barW = (chartW - gap * (barCount + 1)) / barCount;
    const selectedDate = this.selectedDate();

    dailyData.forEach((d, i) => {
      const x = pad.left + gap + i * (barW + gap);
      const barH = (d.revenue / maxRevenue) * chartH;
      const y = pad.top + chartH - barH;

      const isSelected = selectedDate === d.date;

      // Bar gradient
      const grad = ctx.createLinearGradient(x, y, x, y + barH);
      if (isSelected) {
        grad.addColorStop(0, '#f59e0b');
        grad.addColorStop(1, '#d97706');
      } else {
        grad.addColorStop(0, '#3b82f6');
        grad.addColorStop(1, '#1d4ed8');
      }

      // Bar shadow
      if (barH > 0) {
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.roundRect(x + 2, y + 2, barW, barH, [4, 4, 0, 0]);
        ctx.fill();
      }

      // Bar
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
      ctx.fill();

      // Selected ring/border
      if (isSelected) {
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(x - 2, y - 2, barW + 4, barH + 4, [6, 6, 0, 0]);
        ctx.stroke();
      }

      // Store bar rect for hit testing
      this.barRects.push({ x, y, w: barW, h: barH, data: d });

      // Revenue label on top of bar (only if bar tall enough)
      if (barH > 25 && barW > 20) {
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.font = `bold ${Math.min(11, barW * 0.35)}px Inter, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('$' + d.revenue.toFixed(0), x + barW / 2, y + 15);
      }

      // X-axis date labels (will be drawn after the loop to ensure they are at the edges)
    });

    // ─── Draw Start and End Dates on X Axis ───
    if (barCount > 0) {
      ctx.fillStyle = '#9ca3af'; // gray-400
      ctx.font = '12px Inter, sans-serif';
      ctx.textBaseline = 'top';

      const firstDateStr = dailyData[0].date;
      const lastDateStr = dailyData[barCount - 1].date;

      const formatLabel = (dateStr: string) => {
        try {
          const date = new Date(dateStr);
          return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
        } catch {
          return dateStr.substring(5);
        }
      };

      const startLabel = formatLabel(firstDateStr);
      const endLabel = formatLabel(lastDateStr);

      const y = pad.top + chartH + 15;

      // Start Date (Left aligned)
      ctx.textAlign = 'left';
      ctx.fillText(startLabel, pad.left, y);

      // End Date (Right aligned)
      ctx.textAlign = 'right';
      ctx.fillText(endLabel, W - pad.right, y);
    }
  }
}
