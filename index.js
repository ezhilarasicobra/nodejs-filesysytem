const fs =require('fs')
const path = require('path')
let date=new Date()
let date1 = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let sdate=date.toString()
fs.mkdir("task1",(err)=>{
 let filename=`${sdate}`
fs.writeFile(`./task1/${date1}-${month}-${year}.txt`,sdate,(err,data)=>{
  })
})
