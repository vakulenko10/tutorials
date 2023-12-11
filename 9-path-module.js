const { log } = require('console')
const path = require('path')

log(path.sep)


const filepath = path.join('/content/', 'subfolder', 'text.txt')
console.log(filepath)

const base = path.basename(filepath);
log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
log(absolute)