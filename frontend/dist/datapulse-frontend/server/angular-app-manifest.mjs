
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
      "chunk-TURT4F3G.js",
      "chunk-OX6QZ33X.js"
    ],
    "route": "/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TURT4F3G.js",
      "chunk-OX6QZ33X.js"
    ],
    "route": "/catalog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-554HPZRC.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MNOKIEBL.js",
      "chunk-OX6QZ33X.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MNOKIEBL.js",
      "chunk-OX6QZ33X.js"
    ],
    "route": "/checkout/success"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XZ4C77UO.js"
    ],
    "route": "/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XZ4C77UO.js",
      "chunk-5MDPWETF.js",
      "chunk-653GE2RQ.js"
    ],
    "route": "/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XZ4C77UO.js",
      "chunk-PADDJB5N.js",
      "chunk-653GE2RQ.js"
    ],
    "route": "/profile/orders/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/catalog",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8147, hash: 'a8cddfcf8f7aa9cd975aa1fe97825fa532db47c61ca75bddc043379cc8b5fc14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1108, hash: 'fefdef436d6abef34a47ecd08cdfa7c0cdd272fa50c10d6c37cb3dcfc6bf96a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MLN37XVX.css': {size: 37920, hash: '3tIReBr8ufE', text: () => import('./assets-chunks/styles-MLN37XVX_css.mjs').then(m => m.default)}
  },
};
