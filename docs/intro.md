---
sidebar_position: 1
---

# Getting Started

## JSON

### Using Schema For Better Development

#### Directly By URL

To use the JSON schema directly via URL, include the following:

```json
{
    "$schema": "https://gist.github.com/happer64bit/03ff7bce431c5d025e4171eb404a39a4/raw/60b8fc667e09494dd8f40680948dbb93dd672e9a/updateforge.schema.json",
}
```

#### Manually

If you prefer, you can manually include the JSON schema in your project. Here's an example:

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "metadata": {
        "type": "object",
        "properties": {
          "icon": { "type": "string", "format": "uri" },
          "name": { "type": "string" },
          "description": { "type": ["string", "null"] },
          "author": {
            "type": ["object", "null"],
            "properties": {
              "name": { "type": "string" },
              "email": { "type": "string", "format": "email" },
              "website": { "type": "string", "format": "uri" }
            }
          },
          "source_code": { "type": ["string", "null"], "format": "uri" },
          "homepage": { "type": ["string", "null"], "format": "uri" }
        },
        "required": ["icon", "name"]
      },
      "list": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "version": { "type": "string" },
            "type": { "type": "string" },
            "properties": {
              "type": "object"
            },
            "downloadUrl": { "type": "string", "format": "uri" }
          },
          "required": ["version", "type", "properties", "downloadUrl"]
        }
      }
    },
    "required": ["metadata", "list"]
}
```

### Example

Here's an example of using the JSON schema for an app with different versions:

```json
{
    "$schema": "https://gist.github.com/happer64bit/03ff7bce431c5d025e4171eb404a39a4/raw/60b8fc667e09494dd8f40680948dbb93dd672e9a/updateforge.schema.json",
    "metadata": {
        "icon": "https://example.com/icon.png",
        "name": "Example App",
        "description": "Example Description",
        "author": {
            "name": "Example John"
        },
        "source_code": "https://github.com/Example/Repo"
    },
    "list": [
        {
            "version": "1.11.0",
            "type": "releases",
            "properties": {
                "isInstallable": true
            },
            "downloadUrl": "https://github.com/example/repo/releases/download/v1.11.0/example-1.11.0-x86_64-release.apk"
        },
        {
            "version": "1.10.0",
            "type": "releases",
            "properties": {
                "isInstallable": true
            },
            "downloadUrl": "https://github.com/example/repo/releases/download/v1.10.0/example-1.10.0-x86_64-release.apk"
        },
        {
            "version": "1.9.2",
            "type": "releases",
            "properties": {
                "isInstallable": true
            },
            "downloadUrl": "https://github.com/example/repo/releases/download/v1.9.2/example-1.9.2-x86_64-release.apk"
        },
        {
            "version": "1.9.1",
            "type": "releases",
            "properties": {
                "isInstallable": true
            },
            "downloadUrl": "https://github.com/example/repo/releases/download/v1.9.1/example-1.9.1-x86_64-release.apk"
        },
    ]
}
```

## API Reference

Certainly! Here's a usage reference table for the provided JSON schema:

| Field                  | Type                                      | Description                                                                                                             | Required            |
|------------------------|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------|
| metadata               | Object                                    | Metadata information about the app.                                                                                    | Yes                 |
|   - icon               | String (URI)                              | URL pointing to the icon of the app.                                                                                    | Yes                 |
|   - name               | String                                    | Name of the app.                                                                                                        | Yes                 |
|   - description        | String or null                            | Description of the app. Can be null if not provided.                                                                   | No                  |
|   - author             | Object or null                            | Information about the author of the app.                                                                              | No                  |
|      - name            | String                                    | Name of the author.                                                                                                     | (If author provided)|
|      - email           | String (Email format)                     | Email address of the author.                                                                                            | (If author provided)|
|      - website         | String (URI)                              | Website URL of the author.                                                                                              | (If author provided)|
|   - source_code        | String or null (URI)                      | URL pointing to the source code of the app. Can be null if not provided.                                                | No                  |
|   - homepage           | String or null (URI)                      | URL pointing to the homepage of the app. Can be null if not provided.                                                   | No                  |
| list                   | Array                                     | Array containing information about different versions of the app.                                                      | Yes                 |
|   - version            | String                                    | Version number of the app.                                                                                             | Yes                 |
|   - type               | String                                    | Type of the app.                                                                                                        | Yes                 |
|   - properties         | Object                                    | Additional properties of the app.                                                                                      | Yes                 |
|   - downloadUrl        | String (URI)                              | URL for downloading the app corresponding to the specified version.                                                    | Yes                 |
