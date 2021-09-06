const fs =require('fs');
var files = fs.readdirSync('./task2').filter(fn => fn.endsWith('.txt'));
console.log(files)