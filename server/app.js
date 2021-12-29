const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', async (req,res) => {
    try {
        const all = await pool.query("SELECT * FROM turnos");
        res.json(all.rows)
    } catch (err) {
        console.log(err);
    }
})

app.post('/', async (req,res)=>{
    const nombre = req.body.nombre
    const apellido =  req.body.apellido
    const hora =  req.body.hora
    const fecha = req.body.fecha
    const telefono = req.body.telefono
    const descripcion = req.body.descripcion;

    const insert = await pool.query("INSERT INTO turnos (nombre,apellido,hora,fecha,telefono,descripcion) values ($1,$2,$3,$4,$5,$6)",[nombre, apellido,hora,fecha,telefono,descripcion])

})



app.listen(3001, (req,res)=>{

});