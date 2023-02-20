const fs= require('fs');
fs.mkdir("shiblu",(err)=>{
    console.log(err);
})
fs.writeFileSync("home.txt","i love you shiblu </br>");
fs.appendFileSync("home.txt","i also love you bori");
const data=fs.readFileSync("home.txt","utf8");
console.log(data)
fs.renameSync("home.txt","shiblu.txt");