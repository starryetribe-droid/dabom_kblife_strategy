const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components/sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Mass scale down vertical padding and margins to prevent 940px overflow
    content = content.replace(/py-24/g, 'py-10');
    content = content.replace(/py-20/g, 'py-8');
    content = content.replace(/py-16/g, 'py-6');
    content = content.replace(/py-12/g, 'py-6');

    content = content.replace(/mb-28/g, 'mb-8');
    content = content.replace(/mb-24/g, 'mb-8');
    content = content.replace(/mb-20/g, 'mb-8');
    content = content.replace(/mb-16/g, 'mb-8');
    content = content.replace(/mb-12/g, 'mb-6');
    content = content.replace(/mb-10/g, 'mb-6');

    content = content.replace(/mt-24/g, 'mt-8');
    content = content.replace(/mt-20/g, 'mt-8');
    content = content.replace(/mt-16/g, 'mt-8');
    content = content.replace(/mt-12/g, 'mt-6');

    content = content.replace(/gap-20/g, 'gap-8');
    content = content.replace(/gap-16/g, 'gap-8');
    content = content.replace(/gap-12/g, 'gap-6');

    // Shrink extreme height components systematically
    content = content.replace(/h-\[800px\]/g, 'h-[600px]');
    content = content.replace(/h-\[850px\]/g, 'h-[600px]');
    content = content.replace(/h-\[700px\]/g, 'h-[550px]');
    content = content.replace(/h-\[780px\]/g, 'h-[600px]');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Shrunk layout in:', file);
    }
}
console.log('Refactor complete!');
