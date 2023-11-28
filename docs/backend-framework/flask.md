---
sidebar_position: 1
---

# Flask

```python
from updateforgebuilder import SchemaBuilder
from flask import Flask
from db import App, ReleaseModel  # Replace ReleaseModel with your actual model

app = Flask(__name__)

@app.get("/channel")
def channelRoute():
    builder = SchemaBuilder(
        name="Example",
        # Provide supported values for metadata here
    )

    # Assuming ReleaseModel attributes match the expected structure for SchemaBuilder
    releases = ReleaseModel.query.all()

    for release in releases:
        builder.add("release", release)

    return builder.toOutput()

if __name__ == "__main__":
    app.run()
```
