
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
      "chunk-P4XHYZGF.js",
      "chunk-AA5HKDI2.js",
      "chunk-MKAKFE2K.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/catalog"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-P4XHYZGF.js",
      "chunk-AA5HKDI2.js",
      "chunk-MKAKFE2K.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/catalog/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-XXXNW55M.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HRUVWGTD.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HRUVWGTD.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/checkout/success"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js"
    ],
    "route": "/individual"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js",
      "chunk-V4QW3Y3Q.js"
    ],
    "redirectTo": "/individual/profile/details",
    "route": "/individual/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js",
      "chunk-V4QW3Y3Q.js"
    ],
    "route": "/individual/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js",
      "chunk-V4QW3Y3Q.js"
    ],
    "route": "/individual/profile/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js",
      "chunk-V4QW3Y3Q.js"
    ],
    "route": "/individual/profile/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js",
      "chunk-V4QW3Y3Q.js"
    ],
    "route": "/individual/profile/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js",
      "chunk-V4QW3Y3Q.js"
    ],
    "route": "/individual/profile/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js",
      "chunk-V4QW3Y3Q.js"
    ],
    "route": "/individual/profile/spending"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js",
      "chunk-V4QW3Y3Q.js"
    ],
    "route": "/individual/profile/management"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GIWNSEDA.js",
      "chunk-V4QW3Y3Q.js"
    ],
    "route": "/individual/profile/preferences"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JIDHORXJ.js",
      "chunk-MKAKFE2K.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JIDHORXJ.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JIDHORXJ.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JIDHORXJ.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/auth/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-MDT4RYOA.js",
      "chunk-ZMDBUR24.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-KBZ3FZX4.js",
      "chunk-ZMDBUR24.js",
      "chunk-MKAKFE2K.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/admin/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-SCVRXRCI.js",
      "chunk-ZMDBUR24.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/admin/stores"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-6VJHP3SH.js",
      "chunk-ZMDBUR24.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/admin/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-JLZCGV6J.js",
      "chunk-ZMDBUR24.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/admin/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-4JILLPP6.js",
      "chunk-ZMDBUR24.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/admin/analytics"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-K6ZNWW57.js",
      "chunk-ZMDBUR24.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/admin/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-WYXMK2YB.js",
      "chunk-ZMDBUR24.js",
      "chunk-MKAKFE2K.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/admin/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-CKJKUKZT.js",
      "chunk-ZMDBUR24.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/admin/audit-logs"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BVWG3RJA.js",
      "chunk-L4T4BSLV.js",
      "chunk-ZMDBUR24.js",
      "chunk-MKAKFE2K.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/admin/config"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js"
    ],
    "route": "/corporate"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-CMC2AWCQ.js",
      "chunk-XN2NLGPB.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/corporate/store-setup"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-475ORI5K.js"
    ],
    "redirectTo": "/corporate/profile/details",
    "route": "/corporate/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-475ORI5K.js"
    ],
    "route": "/corporate/profile/details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-LHCEFYZC.js",
      "chunk-XN2NLGPB.js",
      "chunk-XHSYZCYO.js"
    ],
    "route": "/corporate/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-ASSPRBMP.js",
      "chunk-XN2NLGPB.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/corporate/catalog"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-3LMBQFOL.js",
      "chunk-XN2NLGPB.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/corporate/inventory"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-2R4CFSKP.js",
      "chunk-XN2NLGPB.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/corporate/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-4PSFGUAS.js",
      "chunk-XN2NLGPB.js"
    ],
    "route": "/corporate/refunds"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-W7U73CT5.js",
      "chunk-XN2NLGPB.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/corporate/analytics"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-QI4X4WH6.js",
      "chunk-XN2NLGPB.js"
    ],
    "route": "/corporate/customers"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GUSVX3PE.js",
      "chunk-V24CVUKH.js",
      "chunk-XN2NLGPB.js",
      "chunk-MKAKFE2K.js"
    ],
    "route": "/corporate/reviews"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-CGOBYXIU.js",
      "chunk-MKAKFE2K.js"
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
    'index.csr.html': {size: 1396, hash: '059a66dd6d6f5d6cdfcf61ac47ed48cd4842003b1ead074d0a7294db961261b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1936, hash: '4f075e46071d698c2e0ca17dec4f2e9b975955edb9576077db8968f53356a9ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
