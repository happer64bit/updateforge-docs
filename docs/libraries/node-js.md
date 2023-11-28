---
position: 1
---

# Node.JS

## Installation

### npm

```bash
npm install updateforge-builder
```

### yarn

```bash
yarn add updateforge-builder
```

## Example

```js
import SchemaBuilder from 'updateforge-builder'

const builder = new SchemaBuilder({
    name: "Example",
    // Supported values from metadata
})

builder.add("release", {
    ...
})

console.log(builder.toOutput())
```
