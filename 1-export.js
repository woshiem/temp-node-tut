const emir = "emir"
const ece = "ece"

function sayHi(name){
    setInterval(() => {
        console.log(`hello ${name}`)
    }, 1500);
}

module.exports = {emir,ece, sayHi}