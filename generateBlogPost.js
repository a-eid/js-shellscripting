const moment = new require('moment') 
const fs = require('fs') 


const userName = process.env.USER
let date = moment().format('YYYY-MM-DD-HH-mm')

let header = `
  --date: ${date}
  --username: ${userName}
  --title: 
  ----------------------------------------
`
let fileName = `${date}.md`
if(fs.existsSync(fileName)){
  console.error(`ERROR: File with the same name already exists. ${fileName}`)  
  process.exit(1)
}else{
  fs.writeFileSync(`${date}.md` , header) 
}
process.exit(0) 