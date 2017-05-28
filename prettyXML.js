const prettifyXML = require('prettify-xml')
const fs = require('fs') 
// const path = require('path')

let fileName = process.argv[2] 
const outputName = process.argv[3] 


// if(fileName[0] == '~') 
//   fileName = path.join(process.env.HOME , fileName.slice(1) )

// if(fileName.startsWith == './')
//   fileName = path.join( __dirname , fileName.slice(2))


if(!fs.existsSync(fileName)) process.exit(1)
const input = fs.readFileSync( fileName , 'utf-8') 
const output = prettifyXML(input, {indent: 2})

if(outputName)
  fs.writeFileSync(outputName , output)
else 
  console.log(output) 

process.exit(0) 