const fs = require('fs') 
const path = require('path')

let fileName = process.argv[2].trim() 

if(fileName[0] == '~') 
  fileName = path.join(process.env.HOME , fileName.slice(1))

if(fileName.startsWith == './')
  fileName = path.join( __dirname , fileName.slice(2))

fs.readFile(fileName, {encoding:'utf-8'} , function(err , data){
  console.log(data)
})