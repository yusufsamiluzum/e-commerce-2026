import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Auth gerektiren veya backend'e bağımlı sayfalar → tarayıcıda render
  {
    path: 'individual/**',
    renderMode: RenderMode.Client
  },
  {
    path: 'corporate/**',
    renderMode: RenderMode.Client
  },
  {
    path: 'admin/**',
    renderMode: RenderMode.Client
  },
  {
    path: 'cart/**',
    renderMode: RenderMode.Client
  },
  {
    path: 'checkout/**',
    renderMode: RenderMode.Client
  },
  {
    path: 'auth/**',
    renderMode: RenderMode.Client
  },
  {
    path: 'ai-assistant/**',
    renderMode: RenderMode.Client
  },
  // Katalog: backend'e HTTP çağrısı yapar → SSR Node'dan erişilemez
  {
    path: 'catalog',
    renderMode: RenderMode.Client
  },
  {
    path: 'catalog/**',
    renderMode: RenderMode.Client
  },
  // Geri kalan her şey (anasayfa vb.) → SSR
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
