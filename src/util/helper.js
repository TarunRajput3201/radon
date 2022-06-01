function printDate(){
    let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0')
let yyyy = today.getFullYear()

today = dd + '/' + mm + '/' + yyyy
console.log(today)}
function printMonth(){
    let objDate = new Date().toLocaleString("en-us", { month: "long" });
     console.log(objDate)}
function printBatch(){
    console.log('Radon, W3D3, the topic for today is Nodejs module system')
}
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.printBatch=printBatch