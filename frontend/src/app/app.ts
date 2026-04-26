import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './core/layout/navbar/navbar';
import { Footer } from './core/layout/footer/footer';
import { ChatbotWidget } from './features/ai-assistant/chatbot-widget';
import { ToastComponent } from './core/layout/toast/toast.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ChatbotWidget, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('datapulse-frontend');
  isAuthRoute = signal(false);
  isAiRoute = signal(false);

  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      this.isAuthRoute.set(url.includes('/auth'));
      this.isAiRoute.set(url.includes('/ai-assistant'));
    });
  }
}
