const fn = require('./functions.js')
const path = require('path')

const folderPath = path.join(__dirname, './', 'data', 'subtitles')


fn.readFile(folderPath)
.then(files => fn.filterFileExtension(files, '.srt'))
.then(SRTFiles => fn.readAllFiles(SRTFiles))
.then(content => content.join(''))
.then(allContent => allContent.split('\n'))
.then(allLines => fn.removeEmptyLine(allLines))
.then(contentWithoutBlankLines => fn.removeCronometer(contentWithoutBlankLines, '-->'))
.then(contentWithoutCronometer => fn.removeNumbers(contentWithoutCronometer))
.then(console.log)
