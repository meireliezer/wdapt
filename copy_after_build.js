var copyDir = require("copy-dir")

const distDir = `${__dirname}\\dist\\`;
const targetDir = `${__dirname}\\src\\serverapp\\www\\`;
console.log(`copy from: ${distDir}  to: ${targetDir}`);
copyDir.sync(distDir, targetDir);
console.log('done');
