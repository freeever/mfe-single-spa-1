import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });


registerApplication({
  name: '@mfe-single-spa-1/products-app',
  app: () => System.import<LifeCycles>('@mfe-single-spa-1/products-app'),
  // Set to always active for the base route '/'
  activeWhen: (location) => location.pathname === '/' || location.pathname.startsWith('/products-app'),
});

registerApplication({
  name: '@mfe-single-spa-1/carts-app',
  app: () => System.import<LifeCycles>('@mfe-single-spa-1/carts-app'),
  activeWhen: ['/carts-app']
});

start({
  urlRerouteOnly: true,
});
