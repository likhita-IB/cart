
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cart/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cart"
  },
  {
    "renderMode": 2,
    "route": "/cart/cart"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 825, hash: '673dee5962a5cd334fcf848872900274191b554d91910171f71973ce2d21e377', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1227, hash: 'e2ce6c67478343064b4e7552f9efb85f92da6a30aa92c923faa18d63d8d38f74', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 2334, hash: '5a8bb2454b2cf7ffce11f64a5d1a8f98feb6dea64c531784fb7d583b0eecc30e', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29050, hash: '3ee1f2ae3b95ffa07fe763382f33e159098b433816beec04fd8e879b3b714935', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JG5X64UB.css': {size: 1447, hash: 'RcxzSLntSEU', text: () => import('./assets-chunks/styles-JG5X64UB_css.mjs').then(m => m.default)}
  },
};
