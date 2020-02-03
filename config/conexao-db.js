const mysql = require('mysql')

const con = mysql.createConnection({
    host: '54.234.198.220',
    port:3306,
    user:'davi',
    password:'bcd254',
    database:'brabank'
})

module.exports = con