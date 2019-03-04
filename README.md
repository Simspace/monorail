# 🚝 Monorail | Cyber Design System

Monorail for React helps developers execute the [Monorail Design Language](https://design.simspace.com). Developed by the core team of engineers and UX designers at SimSpace, these components enable a reliable development workflow to build beautiful and functional web projects.


## Quick Start

Add Monorail to your React application.

```
yarn add @simspace/monorail
```

You will also need our `peerDependencies`.

```
yarn add react react-dom styled-components
```

Check the accepted version range in `package.json` for compatibility.

Import the components you want and use them

```jsx
import { Button } from '@simspace/monorail/dist/buttons/Button'

...

render() {
  return (
    <Button>Monorail</Button>
  )	
}
```

Check out our documentation site, [design.simspace.com](https://design.simspace.com) to see all the components that are available, and how to use them.


## Cutting a new release

When it's ready, _first_ you must bump the version:

`npm version patch`

This will increment the patch version. Then, create a new build:

`yarn build`

The `dist/` folder now contains the files and its own `package.json`. To actually publish the new release:

`(cd dist && npm publish --access public)`
