# Micro Frontend with Module Federation POC - Angular

This project is the POC of implementing Micro Frontend with Single-SPA upon Angular applications, which includes the following applications:

* container:           the root config app WITH    layout engine. Port number: 7000
* container-no-layout: the root config app WITHOUT layout engine. Port number: 7004
* mfe1: the navigation bar. Used when launch container app. Port number: 7001
* carts-app: the remote micro-frontend for shopping cart items. Port number: 7002
* products-app: the remote micro-frontend for products. Port number: 7003

# Shared library
## Use the shared library locally
> cd mfe-shared  
> ng build mfe-shared-lib  
> cd dist/mfe-shared-lib  
> npm link

> cd mfe1  
> npm link mfe-shared-lib

Do the same for products-app and carts-app as well

## Use the shared library in non-local environment
publish the shared library to an npm registry

# Development server

* cd container & npm start
* cd container-no-layout & npm start
* cd mfe1 & npm run serve:single-spa:mfe1
* cd carts-app & npm run serve:single-spa:carts-app
* cd products-app & npm run serve:single-spa:products-app
