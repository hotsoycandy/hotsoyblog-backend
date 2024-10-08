{
  "sourceMaps": true,
  "module": {
    "type": "commonjs",
    "strictMode": true,
    "noInterop": false
  },
  "jsc": {
    "externalHelpers": false,
    "target": "es2016",
    "parser": {
      "syntax": "typescript",
      "tsx": true,
      "decorators": true,
      "dynamicImport": true
    },
    "transform": {
      "legacyDecorator": true,
      "decoratorMetadata": true,
      "react": {
        "throwIfNamespace": false,
        "useBuiltins": false,
        "pragma": "React.createElement",
        "pragmaFrag": "React.Fragment",
        "importSource": "react"
      }
    },
    "keepClassNames": true,
    "paths": {
      "@core/*": [
        "./src/core/*"
      ],
      "@infra/*": [
        "./src/infra/*"
      ]
    },
    "baseUrl": "./"
  }
}
