const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const brainRoot = path.join(homeDir, '.gemini', 'antigravity', 'brain');
const destination = path.join('c:', 'Users', '황다혜', 'Desktop', 'etribe_local', 'dabom_proposal_kblife', 'dabom-strategy-proposal', 'public', 'images', 'memory_booth_new.png');

function findRecentPngs(startPath) {
    let pngFiles = [];
    if (!fs.existsSync(startPath)) return pngFiles;
    const files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        const filename = path.join(startPath, files[i]);
        const stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            pngFiles = pngFiles.concat(findRecentPngs(filename));
        } else if (filename.endsWith('.png') || filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
            pngFiles.push({ name: filename, time: stat.mtime.getTime() });
        }
    }
    return pngFiles;
}

try {
    const allPngs = findRecentPngs(brainRoot);
    allPngs.sort((a, b) => b.time - a.time);
    
    if (allPngs.length > 0) {
        const newestFile = allPngs[0].name;
        console.log('Found newest image:', newestFile);
        fs.copyFileSync(newestFile, destination);
        console.log('Successfully copied to:', destination);
    } else {
        console.log('No image files found.');
    }
} catch (err) {
    console.error('Error during search/copy:', err.message);
}
