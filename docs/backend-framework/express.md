---
sidebar_position: 2
---

# Express.JS

```javascript
const express = require('express');
const { SchemaBuilder } = require('updateforge-builder');
const app = express();

// Replace ReleaseModel with your actual model
const ReleaseModel = require('./models/ReleaseModel');

app.get('/channel', async (req, res) => {
  const builder = new SchemaBuilder({
    name: 'Example',
    // Provide supported values for metadata here
  });

  try {
    // Assuming ReleaseModel has a method to fetch all releases
    const releases = await ReleaseModel.find();

    releases.forEach(release => {
      builder.add('release', release);
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
