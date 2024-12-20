const fs = require('fs-extra');
const path = require('path');

// The theme bone structure
const structure = [
    {
        dir: './', // the target directory relative to the theme folder
        fileName: 'style.css', // the name of the file to be created
        contentFrom: './style.css', // the name of the file to copy the content from
        hasWildcards: true // whether to process wildcards
    },
    {
        dir: './',
        fileName: 'package.json',
        contentFrom: './package.json',
        hasWildcards: false
    },
    {
        dir: './',
        fileName: 'webpack.config.js',
        contentFrom: './webpack.config.js',
        hasWildcards: false
    },
    {
        dir: './',
        fileName: '.eslintrc.json',
        contentFrom: './.eslintrc.json',
        hasWildcards: false
    },
    {
        dir: './',
        fileName: '.gitignore',
        contentFrom: './.gitignore',
        hasWildcards: false
    },
    {
        dir: './',
        fileName: 'tsconfig.json',
        contentFrom: './tsconfig.json',
        hasWildcards: false
    },
    {
        dir: './',
        fileName: 'index.php',
        contentFrom: './index.php',
        hasWildcards: true
    },
    {
        dir: './languages',
        fileName: 'readme.txt',
        contentFrom: './languages/readme.txt',
        hasWildcards: false
    },
    {
        dir: './',
        fileName: 'functions.php',
        contentFrom: './functions.php',
        hasWildcards: true
    },
    {
        dir: './',
        fileName: 'header.php',
        contentFrom: './header.php',
        hasWildcards: true
    },
    {
        dir: './',
        fileName: 'footer.php',
        contentFrom: './footer.php',
        hasWildcards: true
    },
    {
        dir: './template-parts',
        fileName: 'index.php',
        contentFrom: './template-parts/index.php',
        hasWildcards: true
    },
    {
        dir: './template-parts',
        fileName: 'header.php',
        contentFrom: './template-parts/header.php',
        hasWildcards: true
    },
    {
        dir: './template-parts',
        fileName: 'footer.php',
        contentFrom: './template-parts/footer.php',
        hasWildcards: true
    },
    {
        dir: './template-parts',
        fileName: 'content-single.php',
        contentFrom: './template-parts/content-single.php',
        hasWildcards: true
    },
    {
        dir: './template-parts',
        fileName: 'content-404.php',
        contentFrom: './template-parts/content-404.php',
        hasWildcards: true
    },
    {
        dir: './includes',
        fileName: 'index.php',
        contentFrom: './includes/index.php',
        hasWildcards: true
    },
    {
        dir: './includes',
        fileName: 'load.php',
        contentFrom: './includes/load.php',
        hasWildcards: true
    },
    {
        dir: './includes/seo',
        fileName: 'index.php',
        contentFrom: './includes/seo/index.php',
        hasWildcards: true
    },
    {
        dir: './includes/seo',
        fileName: 'og-meta-tags.php',
        contentFrom: './includes/seo/og-meta-tags.php',
        hasWildcards: true
    },
    {
        dir: './includes/seo',
        fileName: 'schema-org-markup.php',
        contentFrom: './includes/seo/schema-org-markup.php',
        hasWildcards: true
    },
    {
        dir: './includes/seo',
        fileName: 'twitter-card.php',
        contentFrom: './includes/seo/twitter-card.php',
        hasWildcards: true
    },
    {
        dir: './includes/seo',
        fileName: 'load.php',
        contentFrom: './includes/seo/load.php',
        hasWildcards: true
    },
    {
        dir: './src/stylesheet',
        fileName: 'theme.scss',
        contentFrom: './src/stylesheet/theme.scss',
        hasWildcards: false
    },
    {
        dir: './src/stylesheet',
        fileName: 'header.scss',
        contentFrom: './src/stylesheet/header.scss',
        hasWildcards: false
    },
    {
        dir: './src/stylesheet',
        fileName: 'content.scss',
        contentFrom: './src/stylesheet/content.scss',
        hasWildcards: false
    },
    {
        dir: './src/stylesheet',
        fileName: 'footer.scss',
        contentFrom: './src/stylesheet/footer.scss',
        hasWildcards: false
    },
    {
        dir: './src/stylesheet',
        fileName: 'resets.scss',
        contentFrom: './src/stylesheet/resets.scss',
        hasWildcards: false
    },
    {
        dir: './src/stylesheet',
        fileName: 'readme.txt',
        contentFrom: './src/stylesheet/readme.txt',
        hasWildcards: false
    },
    {
        dir: './src/app',
        fileName: 'App.tsx',
        contentFrom: './src/app/App.tsx',
        hasWildcards: false
    },
    {
        dir: './src/app',
        fileName: 'App.scss',
        contentFrom: './src/app/App.scss',
        hasWildcards: false
    },
    {
        dir: './src/app',
        fileName: 'index.tsx',
        contentFrom: './src/app/index.tsx',
        hasWildcards: false
    },
];

module.exports = structure;