
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
      "chunk-EY57GLKN.js"
    ],
    "route": "/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EY57GLKN.js"
    ],
    "route": "/catalog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D2BWDYU7.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MMTEJQQC.js"
    ],
    "route": "/corporate"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZIOK2BMS.js"
    ],
    "route": "/individual"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CQYHRTTL.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 0,
    "redirectTo": "/catalog",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5447, hash: 'b4aa4dd34e183a7b7c583c0d40c4e321ca6452dec48cbabe3e6433a51f3df8dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '3c0559defe8911f373ca23a540da12cfe1c7fe70970fa2c71839f78c9fa75bf3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QDH4S427.css': {size: 21073, hash: 'PPwYFMykTTo', text: () => import('./assets-chunks/styles-QDH4S427_css.mjs').then(m => m.default)}
  },
};
