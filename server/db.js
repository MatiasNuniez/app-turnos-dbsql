const Pool = require("pg").Pool;


const pool = new Pool({
    user:'postgres',
    port:5432,
    password:'matiasnuniez',
    server:'localhost',
    database:'app-turnos'
})

module.exports = pool;