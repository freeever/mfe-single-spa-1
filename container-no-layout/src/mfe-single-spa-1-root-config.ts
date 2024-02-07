import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@mfe-single-spa-1/navbar",
//   app: () => System.import("@mfe-single-spa-1/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
