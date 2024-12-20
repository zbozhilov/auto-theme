const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

module.exports = {
  entry: {
    theme: './src/stylesheet/theme.scss',
    app: './src/app/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name]/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          'css-loader',   // Turns CSS into CommonJS
          {
            loader: "sass-loader",
            options: {
              api: "modern-compiler",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css', // Output CSS file name
    }),
    new DependencyExtractionWebpackPlugin({
      combineAssets: false,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: {
    'react': 'React', 
    'react-dom': 'ReactDOM',
    'react-dom/client': 'ReactDOM',
  },
}