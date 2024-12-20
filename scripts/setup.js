const path = require('path');
const readline = require('readline');
const rootDir = path.resolve(__dirname, '..');

// Function to prompt for user input
const promptUser = (query) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => rl.question(query, (answer) => {
        rl.close();
        resolve(answer);
    }));
};

const getThemeDetails = async () => {
    const args = process.argv.slice(2);

    const themeNameArg = args.find(arg => arg.startsWith('--name='));
    const themeNamespaceArg = args.find(arg => arg.startsWith('--namespace='));
    const themeDomainArg = args.find(arg => arg.startsWith('--domain='));
    const themeUriArg = args.find(arg => arg.startsWith('--uri='));
    const themeDescArg = args.find(arg => arg.startsWith('--desc='));
    const themeAuthorArg = args.find(arg => arg.startsWith('--author='));
    const themeAuthorUriArg = args.find(arg => arg.startsWith('--author-uri='));
    const themeLicenseArg = args.find(arg => arg.startsWith('--license='));
    const themeLicenseUriArg = args.find(arg => arg.startsWith('--license-uri='));

    const themeName = themeNameArg?.split('=')[1] || await promptUser('Enter theme name (default: my-theme): ') || 'my-theme';
    const themeNamespace = themeNamespaceArg?.split('=')[1] || await promptUser('Enter theme namespace (default: empty): ') || '';
    const themeDomain = themeDomainArg?.split('=')[1] || await promptUser('Enter theme domain (default: my-theme-domain): ') || 'my-theme-domain';

    const themeUri = themeUriArg?.split('=')[1] || await promptUser('Enter theme URI (default: www.stachethemes.com): ') || 'www.stachethemes.com';
    const themeDesc = themeDescArg?.split('=')[1] || await promptUser('Enter theme description (default: Starter theme): ') || 'Starter theme';
    const themeAuthor = themeAuthorArg?.split('=')[1] || await promptUser('Enter theme author (default: Zhivko Bozhilov): ') || 'Zhivko Bozhilov';
    const themeAuthorUri = themeAuthorUriArg?.split('=')[1] || await promptUser('Enter theme author URI (default: www.stachethemes.com): ') || 'www.stachethemes.com';
    const themeLicense = themeLicenseArg?.split('=')[1] || await promptUser('Enter theme license (default: GNU General Public License v2 or later): ') || 'GNU General Public License v2 or later';
    const themeLicenseUri = themeLicenseUriArg?.split('=')[1] || await promptUser('Enter theme license URI (default: http://www.gnu.org/licenses/gpl-2.0.html): ') || 'http://www.gnu.org/licenses/gpl-2.0.html';

    return {
        themeName,
        themeNamespace,
        themeDomain,
        themeUri,
        themeDesc,
        themeAuthor,
        themeAuthorUri,
        themeLicense,
        themeLicenseUri
    };
};

const runSetup = async () => {

    const {
        themeName,
        themeNamespace,
        themeDomain,
        themeUri,
        themeDesc,
        themeAuthor,
        themeAuthorUri,
        themeLicense,
        themeLicenseUri
    } = await getThemeDetails();

    const buildStructure = require(path.resolve(rootDir, 'scripts/config/buildStructure.js'));

    buildStructure({
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
    });

    console.log('\x1b[32mDone!\x1b[0m');
};

runSetup();