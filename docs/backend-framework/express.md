---
sidebar_position: 2
---

# Express.JS

```javascript
const express = require('express');
const { SchemaBuilder } = require('updateforge-js');
const app = express();

// Replace ReleaseModel with your actual model
const ReleaseModel = require('./models/ReleaseModel');

app.get('/channel', async (req, res) => {
  const builder = new SchemaBuilder();
  
    builder.setMetadata({
      icon: 'icon-path',
      name: 'My App',
      description: 'A short description of my app',
      author: 'John Doe',
      source_code: 'https://github.com/example/my-app',
      homepage: 'https://example.com',
    });
    
  try {
    const releases = await ReleaseModel.find();
    
    releases.forEach(release => {
      builder.addRelease(release)
    });
    
    res.json(builder.toOutput());
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

```
