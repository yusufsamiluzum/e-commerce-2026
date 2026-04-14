
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
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
      "chunk-GTR4Y342.js",
      "chunk-F2OG5JAR.js",
      "chunk-E3IWJWXM.js",
      "chunk-QWXYW3ER.js"
    ],
    "route": "/catalog"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GTR4Y342.js",
      "chunk-F2OG5JAR.js",
      "chunk-E3IWJWXM.js",
      "chunk-QWXYW3ER.js"
    ],
    "route": "/catalog/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Q323QED3.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-T6RFDLZI.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-T6RFDLZI.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/checkout/success"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js"
    ],
    "route": "/individual"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js",
      "chunk-HPMULM74.js"
    ],
    "redirectTo": "/individual/profile/details",
    "route": "/individual/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js",
      "chunk-HPMULM74.js"
    ],
    "route": "/individual/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js",
      "chunk-HPMULM74.js"
    ],
    "route": "/individual/profile/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js",
      "chunk-HPMULM74.js"
    ],
    "route": "/individual/profile/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js",
      "chunk-HPMULM74.js"
    ],
    "route": "/individual/profile/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js",
      "chunk-HPMULM74.js"
    ],
    "route": "/individual/profile/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js",
      "chunk-HPMULM74.js"
    ],
    "route": "/individual/profile/spending"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js",
      "chunk-HPMULM74.js"
    ],
    "route": "/individual/profile/management"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S4IDDNOO.js",
      "chunk-HPMULM74.js"
    ],
    "route": "/individual/profile/preferences"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JORFZFJP.js",
      "chunk-E3IWJWXM.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JORFZFJP.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JORFZFJP.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JORFZFJP.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/auth/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FBJGXVMO.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js"
    ],
    "redirectTo": "/corporate/dashboard",
    "route": "/corporate"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-OX4WGV7Z.js",
      "chunk-NLQHBU2X.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/corporate/store-setup"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-W36TECEH.js"
    ],
    "redirectTo": "/corporate/profile/details",
    "route": "/corporate/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-W36TECEH.js"
    ],
    "route": "/corporate/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-7CIDS5QU.js",
      "chunk-NLQHBU2X.js",
      "chunk-QWXYW3ER.js"
    ],
    "route": "/corporate/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-YHQS6HL3.js",
      "chunk-NLQHBU2X.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/corporate/catalog"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-7ZVZ4GMO.js",
      "chunk-NLQHBU2X.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/corporate/inventory"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-XZ3DJDL3.js",
      "chunk-NLQHBU2X.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/corporate/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-IVKIGMR4.js",
      "chunk-NLQHBU2X.js",
      "chunk-E3IWJWXM.js"
    ],
    "route": "/corporate/analytics"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-SIFPN2TC.js",
      "chunk-NLQHBU2X.js"
    ],
    "route": "/corporate/customers"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OFL4KLV5.js",
      "chunk-TXZXO6XT.js",
      "chunk-NLQHBU2X.js",
      "chunk-E3IWJWXM.js"
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
    'index.csr.html': {size: 1294, hash: 'cf32c876a03e94e2d0486e1e137ad3a361bb04dd31176dff9b10158c62740af9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1834, hash: '17325344e7cb8d799fa132dfc1e9f29a8db33e123151c5fc12023025db6fab0c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
