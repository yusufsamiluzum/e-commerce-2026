import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error-interceptor';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      // Native browser View Transitions API — tüm route geçişleri smooth
      withViewTransitions()
    ),
    // Angular 17+ HTTP Transfer Cache varsayılan olarak aktif
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([errorInterceptor, authInterceptor])),
  ],
};
