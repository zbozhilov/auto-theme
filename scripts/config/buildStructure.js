const fs = require('fs-extra');
const path = require('path');

const structure = require('./structure');

const buildStructure = ({
    rootDir,
    themeName,
    themeDomain,
    themeNamespace,
    themeUri,
    themeDesc,
    themeAuthor,
    themeAuthorUri,
    themeLicense,
    themeLicenseUri
}) => {

    const themeDir = path.resolve(rootDir, 'build');
    const sourceFilesDir = path.resolve(rootDir, 'scripts/config/files');

    const wildcards = [
        { search: '{{themeName}}', replace: themeName },
        { search: '{{themeDomain}}', replace: themeDomain },
        { search: '{{incThemeNamespace}}', replace: themeNamespace ? `namespace ${themeNamespace};` : '' },
        { search: '{{absThemeNamespace}}', replace: themeNamespace ? `\\${themeNamespace}` : '' },
        { search: '{{themeUri}}', replace: themeUri },
        { search: '{{themeDesc}}', replace: themeDesc },
        { search: '{{themeAuthor}}', replace: themeAuthor },
        { search: '{{themeAuthorUri}}', replace: themeAuthorUri },
        { search: '{{themeLicense}}', replace: themeLicense },
        { search: '{{themeLicenseUri}}', replace: themeLicenseUri },
        
    ];

    console.log(`\x1b[33mCreating theme: ${themeName}\x1b[0m`);

    const replaceWildcards = (content, wildcards) =>
        wildcards.reduce((acc, { search, replace }) => acc.replace(new RegExp(search, 'g'), replace), content);

    const processFile = ({ dir, fileName, contentFrom, hasWildcards = false }) => {
        const targetDir = path.resolve(themeDir, dir);
        const targetFile = path.resolve(targetDir, fileName);
        const sourceFile = path.resolve(sourceFilesDir, contentFrom);

        const fileContent = fs.readFileSync(sourceFile, 'utf8');
        const updatedContent = hasWildcards ? replaceWildcards(fileContent, wildcards) : fileContent;

        fs.ensureDirSync(targetDir);
        fs.writeFileSync(targetFile, updatedContent);

        console.log(`Created: \x1b[34m${targetFile.replace(rootDir, '')}\x1b[0m`);
    };

    structure.forEach(processFile);

};

module.exports = buildStructure;
