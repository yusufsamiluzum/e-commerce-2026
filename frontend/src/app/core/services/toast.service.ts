import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  imageUrl?: string;
  actionLabel?: string;
  actionRoute?: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts = signal<Toast[]>([]);
  private nextId = 1;
  private timers = new Map<number, ReturnType<typeof setTimeout>>();

  show(toast: Omit<Toast, 'id'>, durationMs = 3000): void {
    const id = this.nextId++;
    this.toasts.update(list => [...list, { ...toast, id }]);
    const timer = setTimeout(() => this.dismiss(id), durationMs);
    this.timers.set(id, timer);
  }

  success(message: string, opts: Partial<Omit<Toast, 'id' | 'type' | 'message'>> = {}): void {
    this.show({ message, type: 'success', ...opts });
  }

  error(message: string): void {
    this.show({ message, type: 'error' });
  }

  dismiss(id: number): void {
    const timer = this.timers.get(id);
    if (timer) {
      clearTimeout(timer);
      this.timers.delete(id);
    }
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}
