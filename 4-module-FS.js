//'**yine built in bir modül' Burası sync versiyondu. FS0 adlı dosyada async olarak fs modülüne bakicaz

const { readFileSync, writeFileSync } = require(`fs`)
// ilk yöntemle dosyada ne varsa onu okuyor  ikinci ise o dosyanın üstüne yazmaya yarıyor.
const first = readFileSync(`./4-module-FS1.txt`,'utf-8') 
const second = readFileSync(`./4-module-FS2.txt`,'utf-8')

console.log(first)
console.log(second)

writeFileSync('4-module-FS3.txt',`Bu dosya digerleri birlestirilerek kodla olusturuldu: ${first}, ${second}`)
// üsttekine 3. arguman olarak {flag: 'a'} verirsek üstüne yazıyor. Yani tamamen silip verdiğimiz txt i yazmak yerine
//satırın sonuna ekleme yapıyor