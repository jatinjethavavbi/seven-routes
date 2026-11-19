const fs = require('fs');
const path = require('path');

const targetFile = path.join(
  __dirname,
  '..',
  'node_modules',
  'next',
  'dist',
  'build',
  'webpack',
  'loaders',
  'next-metadata-route-loader.js'
);

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');
  let changed = false;

  const bad1 = "throw new Error('Default export is missing in ${JSON.stringify(resourcePath)}')";
  const good1 = "throw new Error('Default export is missing in ' + ${JSON.stringify(resourcePath)})";

  const bad2 = "throw new Error('File size for ${imgName} image ${JSON.stringify(resourcePath)} exceeds ${fileSizeLimit}MB. ' +";
  const good2 = "throw new Error('File size for ${imgName} image ' + ${JSON.stringify(resourcePath)} + ' exceeds ${fileSizeLimit}MB. ' +";

  if (content.includes(bad1)) {
    content = content.replace(bad1, good1);
    changed = true;
  }
  if (content.includes(bad2)) {
    content = content.replace(bad2, good2);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('[fix-next-path-bug] Successfully patched next-metadata-route-loader.js for paths containing apostrophes');
  }
}
