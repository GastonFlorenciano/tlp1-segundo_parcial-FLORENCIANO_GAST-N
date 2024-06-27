const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());


app.get('/products', (req, res) => {
    
    if(db.length <= 0){
        res.json({msg: "TODAVÍA NO EXISTEN PRODUCTOS"})
    }else{
        res.json(db)
    }
})


//======================================
app.listen(3000, ()=>{
    console.log("CORRIENDO EN EL PUERTO 3000");
})


