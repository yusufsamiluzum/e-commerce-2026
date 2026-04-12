
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
      "chunk-5ONRJK4P.js",
      "chunk-RZ5YXOKK.js"
    ],
    "route": "/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5ONRJK4P.js",
      "chunk-RZ5YXOKK.js"
    ],
    "route": "/catalog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RKCZ2UQO.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-427FNVYY.js",
      "chunk-RZ5YXOKK.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-427FNVYY.js",
      "chunk-RZ5YXOKK.js"
    ],
    "route": "/checkout/success"
  },
  {
    "renderMode": 0,
    "redirectTo": "/catalog",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7938, hash: '0a2aa8b2659d6090f9e564fd36c5f2072bfd95c1bc2d9e0a570181e1aab2eda2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '79743e86283e2b49a6109c9f1d469327713740f6c6f4c22cc9d454203ee5f75a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ACDG4CVK.css': {size: 37008, hash: 'npXCLxHq17U', text: () => import('./assets-chunks/styles-ACDG4CVK_css.mjs').then(m => m.default)}
  },
};
