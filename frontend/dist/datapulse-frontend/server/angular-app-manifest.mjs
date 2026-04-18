
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
      "chunk-SZB4I2UN.js"
    ],
    "redirectTo": "/admin/dashboard",
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-YJ6AXKMJ.js",
      "chunk-2R2IDYJW.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-AITFLECG.js",
      "chunk-2R2IDYJW.js",
      "chunk-GHNSZ6N2.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-4F5VF533.js",
      "chunk-2R2IDYJW.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/stores"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-ZVFGGZOY.js",
      "chunk-2R2IDYJW.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/admin/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-5GTVJX37.js",
      "chunk-2R2IDYJW.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/admin/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-Q3OC55L4.js",
      "chunk-2R2IDYJW.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/analytics"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-FHQ2QOWE.js",
      "chunk-2R2IDYJW.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-EDAURR65.js",
      "chunk-2R2IDYJW.js",
      "chunk-GHNSZ6N2.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-IDUA2KQ4.js",
      "chunk-2R2IDYJW.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/audit-logs"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SZB4I2UN.js",
      "chunk-RADBI4YH.js",
      "chunk-2R2IDYJW.js",
      "chunk-GHNSZ6N2.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/admin/config"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js"
    ],
    "redirectTo": "/corporate/dashboard",
    "route": "/corporate"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
      "chunk-CN46TRYE.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/store-setup"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
      "chunk-IA43GJUP.js"
    ],
    "redirectTo": "/corporate/profile/details",
    "route": "/corporate/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
      "chunk-IA43GJUP.js"
    ],
    "route": "/corporate/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
      "chunk-PM7QRK7P.js",
      "chunk-YP742E2D.js",
      "chunk-7RAULO5W.js"
    ],
    "route": "/corporate/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
      "chunk-QKQMJ4HQ.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/catalog"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
      "chunk-COD4H257.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/inventory"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
      "chunk-YP5C5KBG.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
      "chunk-R22HQT7Y.js",
      "chunk-YP742E2D.js",
      "chunk-GHNSZ6N2.js"
    ],
    "route": "/corporate/analytics"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
      "chunk-5BUS7YET.js",
      "chunk-YP742E2D.js"
    ],
    "route": "/corporate/customers"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WQXKNWMM.js",
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
    'index.csr.html': {size: 24660, hash: 'abedc4ecd07b17ff9f33acc5e5add159c5608fb29299992eba56258104c124a4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1852, hash: 'ef49eb9280ff35d71c630d5a0c90886b59eebaee958fa18e70749ca639da784b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ETPJPBC5.css': {size: 131287, hash: 'eUN+2pluhl4', text: () => import('./assets-chunks/styles-ETPJPBC5_css.mjs').then(m => m.default)}
  },
};
