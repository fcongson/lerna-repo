# brand-starter

A starter monorepo for a collection of brand specific web products.

## Monorepo Structure

### `packages`

The `packages` directory provide a library of reusable components.

#### Direction

Standardize the components present in the `packages` directory to [Native Web Components](https://www.webcomponents.org/). Components can be written using any framework but must be wrapped in a Native Web Component and define a custom element.

Component communication will be supported through custom window events.

Component style will be encapsuted within the Shadow DOM.

Reusable components will follow the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology. Components included will make up atoms, molecules, and organisms.

### `products`

The `products` directory contains the brand's product line.

#### Direction

A product will use a template to compose Native Web Components onto its page.

### `templates`

The `templates` directory provide a common set of page layout templates that provide consistency across brand products.

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
