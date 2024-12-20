const fs = require('fs-extra');
const path = require('path');

const structure = require('./structure');

const buildStructure = ({
    rootDir,
    themeName,
    themeDomain,
    themeNamespace
}) => {

    const themeDir = path.resolve(rootDir + '/build/');
    const sourceFilesDir = path.resolve(rootDir, 'scripts/config/files/');

    const wildcards = [
        {
            search: '{{themeName}}',
            replace: themeName
        },
        {
            search: '{{themeDomain}}',
            replace: themeDomain
        },
        {
            search: '{{incThemeNamespace}}',
            replace: themeNamespace ? `namespace ${themeNamespace};` : ''
        },
        {
            search: '{{absThemeNamespace}}',
            replace: themeNamespace ? `\\${themeNamespace}` : ''
        }
    ];


    structure.forEach(({
        dir,
        fileName,
        contentFrom,
        hasWildcards = false
    }) => {
        const targetDir = path.resolve(themeDir, dir);
        const targetFile = path.resolve(targetDir, fileName);
        const sourceFile = path.resolve(sourceFilesDir, contentFrom);

        console.log('Processing file:', targetFile);

        // read the source file content
        const fileContent = fs.readFileSync(sourceFile, 'utf8');

        // replace wildcards
        const content = hasWildcards ? wildcards.reduce((acc, {
            search,
            replace
        }) => {
            return acc.replace(new RegExp(search, 'g'), replace);
        }, fileContent) : fileContent;

        // create the target directory
        fs.ensureDirSync(targetDir);

        // write the content to the target file
        fs.writeFileSync(targetFile, content);

        console.log(`File created: ${targetFile}`);



    });

}

module.exports = buildStructure;