const fn = require('./functions.js')
const path = require('path')

const folderPath = path.join(__dirname, './', 'data', 'subtitles')

const symbols = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']



fn.readFile(folderPath)
.then(files => fn.filterFileExtension(files, '.srt'))
.then(SRTFiles => fn.readAllFiles(SRTFiles))
.then(content => fn.mergeContent(content))
.then(allContent => allContent.split('\n'))
.then(allLines => fn.removeEmptyLine(allLines))
.then(contentWithoutBlankLines => fn.removeCronometer(contentWithoutBlankLines, '-->'))
.then(contentWithoutCronometer => fn.removeNumbers(contentWithoutCronometer))
.then(contentWithoutNumbers => fn.removeSymbols(symbols)(contentWithoutNumbers))
.then(cleanedContent => fn.mergeContent(cleanedContent))
.then(mergedContent => mergedContent.split(' '))
.then(console.log)
