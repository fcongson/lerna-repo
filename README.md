# brand-starter

A starter monorepo for a collection of brand specific web products.

## Monorepo Structure

### `packages`

The `packages` directory provide a library of reusable components.

#### Direction

Standardize the components present in the `packages` directory to [Native Web Components](https://www.webcomponents.org/). Components can be written using React, Vue, or other, and then wrapped in a Native Web Component.

### `products`

The `products` directory contains the brand's product line built from Native Web Components.

## Build

This monorepo is managed by [Lerna](https://lerna.js.org/).

### Install package dependencies and link cross-dependencies

```sh
lerna bootstrap
```

### Compile typescript packages

```sh
lerna run tsc
```
