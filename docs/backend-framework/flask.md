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
    builder = SchemaBuilder()

    # Assuming ReleaseModel attributes match the expected structure for SchemaBuilder
    releases = ReleaseModel.query.all()

    builder.set_metadata(
        icon="https://example.com/icon.png",
        name="Example App",
        description="An example application",
        author={
            "name": "John Doe",
            "email": "john.doe@example.com",
            "website": "https://johndoe.com"
        },
        source_code="https://github.com/example/example-app",
        homepage="https://example.com"
    )
    for release in releases:
        builder.add_release(
            version="1.0.0",
            release_type="release",
            properties={"key1": "value1", "key2": "value2"},
            download_url="https://example.com/downloads/example-app-1.0.0.zip"
        )
        

    return builder.to_output()

if __name__ == "__main__":
    app.run()
```
