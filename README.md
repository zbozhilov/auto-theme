# Auto Theme

A tool for generating a started WordPress theme that includes VERY basic structure for a theme with webpack, ts, scss, eslint and react app preconfigured.

## Usage

```javascript
npm run setup -- --name=THEME_NAME --namespace=PHP_NAMESPACE --domain=THEME_TEXT_DOMAIN
```

- The theme is installed in the ./build folder. 
- node_modules is not pre-installed. run "npm i" inside ./build folder.

## Config

- `name`: The name of the theme. Defaults to 'my-theme'
- `namespace`: PHP Namespace for theme to use (optional)
- `domain`: Theme text domain