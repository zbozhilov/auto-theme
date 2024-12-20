const fs = require('fs-extra');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

const args = process.argv.slice(2); 
const themeNameArg = args.find(arg => arg.startsWith('--name='));
const themeName = themeNameArg?.split('=')[1] || 'my-theme';

const themeNamespaceArg = args.find(arg => arg.startsWith('--namespace='));
const themeNamespace = themeNamespaceArg?.split('=')[1] || '';

const themeDomainArg = args.find(arg => arg.startsWith('--domain='));
const themeDomain = themeDomainArg?.split('=')[1] || 'theme-domain';

const runSetup = () => {

    const buildStructure = require(rootDir + '/scripts/config/buildStructure.js');

    buildStructure({
        rootDir,
        themeName: themeName,
        themeDomain: themeDomain,
        themeNamespace: themeNamespace
    });
};

runSetup();