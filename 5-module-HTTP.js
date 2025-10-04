// yine built in modul + server olusturmaya falan yariyor(express.js in vs temeli http moduludur) şimdilik bu kadar

const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === "/"){
         res.end("welcome to homepage")
    } else if(req.url === "/about"){
         res.end("about us: we are ..")
    } else {
        res.end("Oops!")
    }
})

server.listen(5000)