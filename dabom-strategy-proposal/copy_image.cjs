const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const brainRoot = path.join(homeDir, '.gemini', 'antigravity', 'brain');
const targetFileName = 'media__1775022503259.png';
const destination = path.join(process.cwd(), 'public', 'images', 'memory_booth.png');

function findFileSync(startPath, filter) {
    if (!fs.existsSync(startPath)) return null;
    const files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        const filename = path.join(startPath, files[i]);
        const stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            const found = findFileSync(filename, filter);
            if (found) return found;
        } else if (filename.includes(filter)) {
            return filename;
        }
    }
    return null;
}

try {
    console.log('Searching in:', brainRoot);
    const source = findFileSync(brainRoot, targetFileName);
    if (source) {
        console.log('Found source:', source);
        fs.copyFileSync(source, destination);
        console.log('Successfully copied to:', destination);
    } else {
        console.log('Could not find file with pattern:', targetFileName);
    }
} catch (err) {
    console.error('Error during search/copy:', err.message);
}
