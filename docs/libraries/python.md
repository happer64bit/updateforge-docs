---
position: 2
---

# Python

## Installation

```bash
pip install ...
```

## Example

```python
from updateforgebuilder import SchemaBuilder

builder = SchemaBuilder(
    name="Example",
    # Provide supported values for metadata here
)

builder.add("release", {
    # Add release-specific details here
})

print(builder.toOutput())
```
