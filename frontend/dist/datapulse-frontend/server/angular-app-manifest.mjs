
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
      "chunk-T3WNEAUB.js",
      "chunk-TF5MQXTY.js",
      "chunk-S3O7GOSJ.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/catalog"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-T3WNEAUB.js",
      "chunk-TF5MQXTY.js",
      "chunk-S3O7GOSJ.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/catalog/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OVZSB773.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-KAM7T4MM.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-KAM7T4MM.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/checkout/success"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js"
    ],
    "route": "/individual"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js",
      "chunk-226WVGKI.js"
    ],
    "redirectTo": "/individual/profile/details",
    "route": "/individual/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js",
      "chunk-226WVGKI.js"
    ],
    "route": "/individual/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js",
      "chunk-226WVGKI.js"
    ],
    "route": "/individual/profile/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js",
      "chunk-226WVGKI.js"
    ],
    "route": "/individual/profile/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js",
      "chunk-226WVGKI.js"
    ],
    "route": "/individual/profile/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js",
      "chunk-226WVGKI.js"
    ],
    "route": "/individual/profile/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js",
      "chunk-226WVGKI.js"
    ],
    "route": "/individual/profile/spending"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js",
      "chunk-226WVGKI.js"
    ],
    "route": "/individual/profile/management"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6BNJR3T5.js",
      "chunk-226WVGKI.js"
    ],
    "route": "/individual/profile/preferences"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-NBEWVEUP.js",
      "chunk-S3O7GOSJ.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-NBEWVEUP.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-NBEWVEUP.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-NBEWVEUP.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/auth/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js"
    ],
    "redirectTo": "/admin/dashboard",
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-CI3QLC6M.js",
      "chunk-BTVM6SYX.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-IQPEMF6H.js",
      "chunk-BTVM6SYX.js",
      "chunk-S3O7GOSJ.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/admin/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-632PF7UO.js",
      "chunk-BTVM6SYX.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/admin/stores"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-77RC4CBM.js",
      "chunk-BTVM6SYX.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/admin/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-W42BPAKJ.js",
      "chunk-BTVM6SYX.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/admin/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-NX7PXTVK.js",
      "chunk-BTVM6SYX.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/admin/analytics"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-LI65AM34.js",
      "chunk-BTVM6SYX.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/admin/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-F4ILEXM4.js",
      "chunk-BTVM6SYX.js",
      "chunk-S3O7GOSJ.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/admin/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-YZ33JUOJ.js",
      "chunk-BTVM6SYX.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/admin/audit-logs"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UQCGFBYW.js",
      "chunk-I47MHC53.js",
      "chunk-BTVM6SYX.js",
      "chunk-S3O7GOSJ.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/admin/config"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js"
    ],
    "redirectTo": "/corporate/dashboard",
    "route": "/corporate"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-D7LO5MDD.js",
      "chunk-ZLWSHZ3Y.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/corporate/store-setup"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-3NJQW5HM.js"
    ],
    "redirectTo": "/corporate/profile/details",
    "route": "/corporate/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-3NJQW5HM.js"
    ],
    "route": "/corporate/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-Q4MBCVZV.js",
      "chunk-ZLWSHZ3Y.js",
      "chunk-HRH4ZMUR.js"
    ],
    "route": "/corporate/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-IWZKG6AG.js",
      "chunk-ZLWSHZ3Y.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/corporate/catalog"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-3O35ZSDH.js",
      "chunk-ZLWSHZ3Y.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/corporate/inventory"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-WZHEEOTV.js",
      "chunk-ZLWSHZ3Y.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/corporate/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-I2GCZNEN.js",
      "chunk-ZLWSHZ3Y.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/corporate/analytics"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-MQ7YYDTB.js",
      "chunk-ZLWSHZ3Y.js"
    ],
    "route": "/corporate/customers"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-V4VFJRHR.js",
      "chunk-ZLWSHZ3Y.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/corporate/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WCY7GJMD.js",
      "chunk-YYX6PVOC.js",
      "chunk-ZLWSHZ3Y.js"
    ],
    "route": "/corporate/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-QTNFFB4G.js",
      "chunk-S3O7GOSJ.js"
    ],
    "route": "/ai-assistant"
  },
  {
    "renderMode": 0,
    "redirectTo": "/catalog",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14927, hash: 'c736507b97646c4298123c1d5adc58c52f818def0f18f4933f3e1b15f0efe7b6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1954, hash: 'fa3a43aaee60f243ad80e0662729b92f8aebb9448d0a55824beb13f60035a1af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ELM6EBWK.css': {size: 122348, hash: 'NU0n0wL4j00', text: () => import('./assets-chunks/styles-ELM6EBWK_css.mjs').then(m => m.default)}
  },
};
