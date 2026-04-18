
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
    "renderMode": 1,
    "preload": [
      "chunk-VRV36KXX.js",
      "chunk-TE32LQ3M.js",
      "chunk-GHNSZ6N2.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/catalog"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VRV36KXX.js",
      "chunk-TE32LQ3M.js",
      "chunk-GHNSZ6N2.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/catalog/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TS5UKWOZ.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PXCJKTFV.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PXCJKTFV.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/checkout/success"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js"
    ],
    "route": "/individual"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js",
      "chunk-AU44KZTP.js"
    ],
    "redirectTo": "/individual/profile/details",
    "route": "/individual/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js",
      "chunk-AU44KZTP.js"
    ],
    "route": "/individual/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js",
      "chunk-AU44KZTP.js"
    ],
    "route": "/individual/profile/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js",
      "chunk-AU44KZTP.js"
    ],
    "route": "/individual/profile/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js",
      "chunk-AU44KZTP.js"
    ],
    "route": "/individual/profile/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js",
      "chunk-AU44KZTP.js"
    ],
    "route": "/individual/profile/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js",
      "chunk-AU44KZTP.js"
    ],
    "route": "/individual/profile/spending"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js",
      "chunk-AU44KZTP.js"
    ],
    "route": "/individual/profile/management"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H27KEDV7.js",
      "chunk-AU44KZTP.js"
    ],
    "route": "/individual/profile/preferences"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JM7PDTNY.js",
      "chunk-GHNSZ6N2.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JM7PDTNY.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JM7PDTNY.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JM7PDTNY.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/auth/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2T3ZR5UG.js"
    ],
    "redirectTo": "/admin/dashboard",
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2T3ZR5UG.js",
      "chunk-N77ZXD2B.js",
      "chunk-7GRYE6NF.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2T3ZR5UG.js",
      "chunk-HVGXB2UW.js",
      "chunk-7GRYE6NF.js",
      "chunk-GHNSZ6N2.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2T3ZR5UG.js",
      "chunk-AR3INGGH.js",
      "chunk-7GRYE6NF.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/stores"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2T3ZR5UG.js",
      "chunk-RRSCCN4N.js",
      "chunk-7GRYE6NF.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/analytics"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2T3ZR5UG.js",
      "chunk-K6QO6BGA.js",
      "chunk-7GRYE6NF.js",
      "chunk-GHNSZ6N2.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2T3ZR5UG.js",
      "chunk-OOTHY5WL.js",
      "chunk-7GRYE6NF.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/audit-logs"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2T3ZR5UG.js",
      "chunk-AAB4PH4W.js",
      "chunk-7GRYE6NF.js",
      "chunk-GHNSZ6N2.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/config"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js"
    ],
    "redirectTo": "/corporate/dashboard",
    "route": "/corporate"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-CN46TRYE.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/store-setup"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-IA43GJUP.js"
    ],
    "redirectTo": "/corporate/profile/details",
    "route": "/corporate/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-IA43GJUP.js"
    ],
    "route": "/corporate/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-PM7QRK7P.js",
      "chunk-YP742E2D.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/corporate/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-QKQMJ4HQ.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/catalog"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-COD4H257.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/inventory"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-YP5C5KBG.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-R22HQT7Y.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/analytics"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-5BUS7YET.js",
      "chunk-YP742E2D.js"
    ],
    "route": "/corporate/customers"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y6RQ2VBC.js",
      "chunk-GKR7FLYG.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/reviews"
  },
  {
    "renderMode": 0,
    "redirectTo": "/catalog",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24660, hash: 'dc3fc22b1fcf8304d8e2d5537c6df896ab170a4b6a1f99d77f4665d11ed0291a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'f5a62cb169bc49c47fd002579d8841172ab655c4c483ce72ff36234db1a9838f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-C6OED3VW.css': {size: 117770, hash: 'N+9TAUsy2Tg', text: () => import('./assets-chunks/styles-C6OED3VW_css.mjs').then(m => m.default)}
  },
};
