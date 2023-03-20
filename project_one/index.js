const fn = require('./functions.js')
const path = require('path')

const folderPath = path.join(__dirname, './', 'data', 'subtitles')


fn.readFile(folderPath)
.then(files => fn.filterFileExtension(files, '.srt'))
.then(console.log)
