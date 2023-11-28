---
position: 2
---

# Python

## Installation

```bash
pip install updateforgepy
```

## Example

```python
from updateforgepy import SchemaBuilder

builder = SchemaBuilder()

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

builder.add_release(
    version="1.0.0",
    release_type="release",
    properties={"key1": "value1", "key2": "value2"},
    download_url="https://example.com/downloads/example-app-1.0.0.zip"
)

json_output = builder.to_output()

print(json_output)
```
