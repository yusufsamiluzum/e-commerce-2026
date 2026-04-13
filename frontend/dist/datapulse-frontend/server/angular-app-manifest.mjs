
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/catalog",
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4RSCXAQQ.js",
      "chunk-43FEEK5E.js",
      "chunk-AUR7FFRA.js"
    ],
    "route": "/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4RSCXAQQ.js",
      "chunk-43FEEK5E.js",
      "chunk-AUR7FFRA.js"
    ],
    "route": "/catalog/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5Y3GK2EQ.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-EOVTA6TP.js",
      "chunk-AUR7FFRA.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-EOVTA6TP.js",
      "chunk-AUR7FFRA.js"
    ],
    "route": "/checkout/success"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js"
    ],
    "route": "/individual"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js",
      "chunk-QMUHCKRQ.js"
    ],
    "redirectTo": "/individual/profile/details",
    "route": "/individual/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js",
      "chunk-QMUHCKRQ.js"
    ],
    "route": "/individual/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js",
      "chunk-QMUHCKRQ.js"
    ],
    "route": "/individual/profile/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js",
      "chunk-QMUHCKRQ.js"
    ],
    "route": "/individual/profile/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js",
      "chunk-QMUHCKRQ.js"
    ],
    "route": "/individual/profile/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js",
      "chunk-QMUHCKRQ.js"
    ],
    "route": "/individual/profile/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js",
      "chunk-QMUHCKRQ.js"
    ],
    "route": "/individual/profile/spending"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js",
      "chunk-QMUHCKRQ.js"
    ],
    "route": "/individual/profile/management"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FVJVQFOJ.js",
      "chunk-QMUHCKRQ.js"
    ],
    "route": "/individual/profile/preferences"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-G2Y6LUR6.js",
      "chunk-AUR7FFRA.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-G2Y6LUR6.js",
      "chunk-AUR7FFRA.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-G2Y6LUR6.js",
      "chunk-AUR7FFRA.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-G2Y6LUR6.js",
      "chunk-AUR7FFRA.js"
    ],
    "route": "/auth/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GJB7A5UP.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-ALGMEULZ.js"
    ],
    "route": "/corporate"
  },
  {
    "renderMode": 0,
    "redirectTo": "/catalog",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10357, hash: '6f66280475edbbc1c9f494de2117f95052c152ebcc271985a95bfe94d63b4311', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1159, hash: '59d22998fdcf8755abf5d2b9f1377fdabbec8115865bbc2a25bb5584feb2c0fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DON5D43F.css': {size: 59115, hash: 'KJqhqIrqCZI', text: () => import('./assets-chunks/styles-DON5D43F_css.mjs').then(m => m.default)}
  },
};
