const fs =require('fs')

var files = fs.readdirSync('./task1').filter(fn => fn.endsWith('.txt'));
console.log(files);