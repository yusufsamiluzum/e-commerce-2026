import {
  CorporateService
} from "./chunk-XN2NLGPB.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/corporate/customers/customer-segmentation.ts
var _c0 = () => [1, 2];
var _c1 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.city;
var _forTrack1 = ($index, $item) => $item.membershipType;
var _forTrack2 = ($index, $item) => $item.email;
function CustomerSegmentation_Conditional_7_For_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 9);
  }
}
function CustomerSegmentation_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275domElement(1, "div", 7);
    \u0275\u0275domElementStart(2, "div", 8);
    \u0275\u0275repeaterCreate(3, CustomerSegmentation_Conditional_7_For_2_For_4_Template, 1, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function CustomerSegmentation_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, CustomerSegmentation_Conditional_7_For_2_Template, 5, 1, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CustomerSegmentation_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 17);
    \u0275\u0275text(1, "Veri bulunamad\u0131.");
    \u0275\u0275domElementEnd();
  }
}
function CustomerSegmentation_Conditional_8_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 26);
    \u0275\u0275domElement(7, "div", 27);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const city_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(city_r1.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(city_r1.count);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", city_r1.count / ctx_r1.getMaxCityCount() * 100, "%");
  }
}
function CustomerSegmentation_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, CustomerSegmentation_Conditional_8_Conditional_12_For_2_Template, 8, 4, "div", null, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(d_r3.byCity);
  }
}
function CustomerSegmentation_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 17);
    \u0275\u0275text(1, "Veri bulunamad\u0131.");
    \u0275\u0275domElementEnd();
  }
}
function CustomerSegmentation_Conditional_8_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 26);
    \u0275\u0275domElement(7, "div", 28);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r4.membershipType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.count);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", m_r4.count / ctx_r1.getMaxMembershipCount() * 100, "%");
  }
}
function CustomerSegmentation_Conditional_8_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, CustomerSegmentation_Conditional_8_Conditional_17_For_2_Template, 8, 4, "div", null, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(d_r3.byMembership);
  }
}
function CustomerSegmentation_Conditional_8_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21);
    \u0275\u0275text(1, "Hen\xFCz m\xFC\u015Fteri verisi yok.");
    \u0275\u0275domElementEnd();
  }
}
function CustomerSegmentation_Conditional_8_Conditional_23_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 33)(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 35)(4, "p", 25);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 36);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "td", 37);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 35)(11, "span", 38);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "td", 39);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 40);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const \u0275$index_134_r6 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_134_r6 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.membershipType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.totalOrders);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 7, c_r5.totalSpent, "1.2-2"));
  }
}
function CustomerSegmentation_Conditional_8_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22)(1, "table", 29)(2, "thead")(3, "tr", 30)(4, "th", 31);
    \u0275\u0275text(5, "#");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th", 31);
    \u0275\u0275text(7, "M\xFC\u015Fteri");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th", 31);
    \u0275\u0275text(9, "\u015Eehir");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th", 31);
    \u0275\u0275text(11, "\xDCyelik");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th", 32);
    \u0275\u0275text(13, "Sipari\u015F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th", 32);
    \u0275\u0275text(15, "Harcama");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, CustomerSegmentation_Conditional_8_Conditional_23_For_18_Template, 18, 10, "tr", 33, _forTrack2);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const d_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(d_r3.topCustomers);
  }
}
function CustomerSegmentation_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "p", 11);
    \u0275\u0275text(2, "Toplam M\xFC\u015Fteri");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 13);
    \u0275\u0275text(6, "Ma\u011Fazan\u0131zdan al\u0131\u015Fveri\u015F yapan benzersiz m\xFC\u015Fteri say\u0131s\u0131");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 14)(8, "div", 15)(9, "h2", 16);
    \u0275\u0275text(10, "\u015Eehir Da\u011F\u0131l\u0131m\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, CustomerSegmentation_Conditional_8_Conditional_11_Template, 2, 0, "p", 17)(12, CustomerSegmentation_Conditional_8_Conditional_12_Template, 3, 0, "div", 8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div", 15)(14, "h2", 16);
    \u0275\u0275text(15, "\xDCyelik Tipi Da\u011F\u0131l\u0131m\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(16, CustomerSegmentation_Conditional_8_Conditional_16_Template, 2, 0, "p", 17)(17, CustomerSegmentation_Conditional_8_Conditional_17_Template, 3, 0, "div", 8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 18)(19, "div", 19)(20, "h2", 20);
    \u0275\u0275text(21, "En De\u011Ferli M\xFC\u015Fteriler");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(22, CustomerSegmentation_Conditional_8_Conditional_22_Template, 2, 0, "div", 21)(23, CustomerSegmentation_Conditional_8_Conditional_23_Template, 19, 0, "div", 22);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r3.totalCustomers);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(d_r3.byCity.length === 0 ? 11 : 12);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(d_r3.byMembership.length === 0 ? 16 : 17);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(d_r3.topCustomers.length === 0 ? 22 : 23);
  }
}
var CustomerSegmentation = class _CustomerSegmentation {
  corporateService = inject(CorporateService);
  data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadData();
  }
  loadData() {
    this.isLoading.set(true);
    this.corporateService.getCustomerSegmentation().subscribe({
      next: (res) => {
        this.data.set(res);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  getMaxCityCount() {
    const d = this.data();
    if (!d || !d.byCity.length)
      return 1;
    return Math.max(...d.byCity.map((c) => c.count));
  }
  getMaxMembershipCount() {
    const d = this.data();
    if (!d || !d.byMembership.length)
      return 1;
    return Math.max(...d.byMembership.map((m) => m.count));
  }
  static \u0275fac = function CustomerSegmentation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerSegmentation)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerSegmentation, selectors: [["app-customer-segmentation"]], decls: 9, vars: 1, consts: [[1, "min-h-screen", "bg-gray-950"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "mb-8"], [1, "text-3xl", "font-bold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6", "animate-pulse"], [1, "h-5", "bg-gray-700", "rounded", "w-40", "mb-4"], [1, "space-y-3"], [1, "h-4", "bg-gray-700", "rounded", "w-full"], [1, "bg-gradient-to-br", "from-cyan-900/40", "to-cyan-800/20", "border", "border-cyan-800/30", "rounded-2xl", "p-6", "mb-8"], [1, "text-xs", "font-semibold", "text-cyan-400", "uppercase", "tracking-wider", "mb-2"], [1, "text-4xl", "font-bold", "text-white"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6", "mb-8"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6"], [1, "text-lg", "font-semibold", "text-white", "mb-5"], [1, "text-gray-500", "text-sm", "text-center", "py-6"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-gray-800"], [1, "text-lg", "font-semibold", "text-white"], [1, "p-8", "text-center", "text-gray-500", "text-sm"], [1, "overflow-x-auto"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "text-sm", "text-gray-300"], [1, "text-sm", "font-semibold", "text-white"], [1, "h-2", "bg-gray-800", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-cyan-500", "rounded-full", "transition-all", "duration-500"], [1, "h-full", "bg-purple-500", "rounded-full", "transition-all", "duration-500"], [1, "w-full"], [1, "border-b", "border-gray-800"], [1, "text-left", "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "py-3", "px-5"], [1, "text-right", "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "py-3", "px-5"], [1, "border-b", "border-gray-800/50", "hover:bg-gray-800/30", "transition-colors"], [1, "py-3", "px-5", "text-sm", "text-gray-500", "font-bold"], [1, "py-3", "px-5"], [1, "text-[11px]", "text-gray-500"], [1, "py-3", "px-5", "text-sm", "text-gray-400"], [1, "text-xs", "font-medium", "px-2", "py-1", "rounded-lg", "bg-purple-500/10", "text-purple-400"], [1, "py-3", "px-5", "text-sm", "text-right", "text-gray-300"], [1, "py-3", "px-5", "text-sm", "text-right", "font-semibold", "text-white"]], template: function CustomerSegmentation_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "M\xFC\u015Fteri Segmentasyonu");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 4);
      \u0275\u0275text(6, "M\xFC\u015Fterilerinizi demografik verilere g\xF6re analiz edin");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(7, CustomerSegmentation_Conditional_7_Template, 3, 1, "div", 5)(8, CustomerSegmentation_Conditional_8_Template, 24, 4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isLoading() ? 7 : (tmp_0_0 = ctx.data()) ? 8 : -1, tmp_0_0);
    }
  }, dependencies: [CommonModule, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerSegmentation, [{
    type: Component,
    args: [{ selector: "app-customer-segmentation", standalone: true, imports: [CommonModule], template: `<div class="min-h-screen bg-gray-950">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white">M\xFC\u015Fteri Segmentasyonu</h1>
      <p class="text-gray-400 text-sm mt-1">M\xFC\u015Fterilerinizi demografik verilere g\xF6re analiz edin</p>
    </div>

    @if (isLoading()) {
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (i of [1,2]; track i) {
          <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 animate-pulse">
            <div class="h-5 bg-gray-700 rounded w-40 mb-4"></div>
            <div class="space-y-3">
              @for (j of [1,2,3]; track j) {
                <div class="h-4 bg-gray-700 rounded w-full"></div>
              }
            </div>
          </div>
        }
      </div>
    } @else if (data(); as d) {

      <!-- KPI Card -->
      <div class="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 border border-cyan-800/30 rounded-2xl p-6 mb-8">
        <p class="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Toplam M\xFC\u015Fteri</p>
        <p class="text-4xl font-bold text-white">{{ d.totalCustomers }}</p>
        <p class="text-xs text-gray-500 mt-1">Ma\u011Fazan\u0131zdan al\u0131\u015Fveri\u015F yapan benzersiz m\xFC\u015Fteri say\u0131s\u0131</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        <!-- By City -->
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
          <h2 class="text-lg font-semibold text-white mb-5">\u015Eehir Da\u011F\u0131l\u0131m\u0131</h2>
          @if (d.byCity.length === 0) {
            <p class="text-gray-500 text-sm text-center py-6">Veri bulunamad\u0131.</p>
          } @else {
            <div class="space-y-3">
              @for (city of d.byCity; track city.city) {
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-sm text-gray-300">{{ city.city }}</span>
                    <span class="text-sm font-semibold text-white">{{ city.count }}</span>
                  </div>
                  <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div class="h-full bg-cyan-500 rounded-full transition-all duration-500"
                      [style.width.%]="(city.count / getMaxCityCount()) * 100">
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>

        <!-- By Membership -->
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
          <h2 class="text-lg font-semibold text-white mb-5">\xDCyelik Tipi Da\u011F\u0131l\u0131m\u0131</h2>
          @if (d.byMembership.length === 0) {
            <p class="text-gray-500 text-sm text-center py-6">Veri bulunamad\u0131.</p>
          } @else {
            <div class="space-y-3">
              @for (m of d.byMembership; track m.membershipType) {
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-sm text-gray-300">{{ m.membershipType }}</span>
                    <span class="text-sm font-semibold text-white">{{ m.count }}</span>
                  </div>
                  <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div class="h-full bg-purple-500 rounded-full transition-all duration-500"
                      [style.width.%]="(m.count / getMaxMembershipCount()) * 100">
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>

      <!-- Top Customers Table -->
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-800">
          <h2 class="text-lg font-semibold text-white">En De\u011Ferli M\xFC\u015Fteriler</h2>
        </div>
        @if (d.topCustomers.length === 0) {
          <div class="p-8 text-center text-gray-500 text-sm">Hen\xFCz m\xFC\u015Fteri verisi yok.</div>
        } @else {
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-800">
                  <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-5">#</th>
                  <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-5">M\xFC\u015Fteri</th>
                  <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-5">\u015Eehir</th>
                  <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-5">\xDCyelik</th>
                  <th class="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-5">Sipari\u015F</th>
                  <th class="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-5">Harcama</th>
                </tr>
              </thead>
              <tbody>
                @for (c of d.topCustomers; track c.email; let i = $index) {
                  <tr class="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                    <td class="py-3 px-5 text-sm text-gray-500 font-bold">{{ i + 1 }}</td>
                    <td class="py-3 px-5">
                      <p class="text-sm font-semibold text-white">{{ c.customerName }}</p>
                      <p class="text-[11px] text-gray-500">{{ c.email }}</p>
                    </td>
                    <td class="py-3 px-5 text-sm text-gray-400">{{ c.city }}</td>
                    <td class="py-3 px-5">
                      <span class="text-xs font-medium px-2 py-1 rounded-lg bg-purple-500/10 text-purple-400">{{ c.membershipType }}</span>
                    </td>
                    <td class="py-3 px-5 text-sm text-right text-gray-300">{{ c.totalOrders }}</td>
                    <td class="py-3 px-5 text-sm text-right font-semibold text-white">\${{ c.totalSpent | number:'1.2-2' }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerSegmentation, { className: "CustomerSegmentation", filePath: "app/features/corporate/customers/customer-segmentation.ts", lineNumber: 11 });
})();
export {
  CustomerSegmentation
};
//# sourceMappingURL=chunk-QI4X4WH6.js.map
