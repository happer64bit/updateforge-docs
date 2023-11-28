---
position: 1
---

# Node.JS

## Installation

### npm

```bash
npm install updateforge-js
```

### yarn

```bash
yarn add updateforge-js
```

## Example

```js
import { SchemaBuilder } from 'updateforge-js';

// Create an instance of SchemaBuilder
const builder = new SchemaBuilder();

// Set metadata
builder.setMetadata({
  icon: 'icon-path',
  name: 'My App',
  description: 'A short description of my app',
  author: 'John Doe',
  source_code: 'https://github.com/example/my-app',
  homepage: 'https://example.com',
});

// Add a release
builder.addRelease({
  version: '1.0.0',
  type: 'major',
  properties: { /* properties */ },
  downloadUrl: 'https://download-url.com',
});

// Get the latest version
const latestVersion = builder.getLatestVersion();
console.log('Latest version:', latestVersion);

// Get all versions
const allVersions = builder.getAllVersions();
console.log('All versions:', allVersions);

// Convert data to output string
const outputString = builder.toOutput();
console.log('Output:', outputString);
```
