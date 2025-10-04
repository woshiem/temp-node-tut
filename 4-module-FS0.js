// burası async versiyon ve bu işlemlere callback hell deniyor zaten goruldugu uzere

const  {readFile, writeFile} = require('fs')
readFile('./4-module-FS1.txt','utf-8', (err,result)=>{

    if(err){
        console.error(err)
        return
    }
    const first = result
    readFile('./4-module-FS2.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }

        const second = result
        writeFile('./4-module-FS4.txt',`Bu async olusan txt dosyamiz: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        }
    )})

})