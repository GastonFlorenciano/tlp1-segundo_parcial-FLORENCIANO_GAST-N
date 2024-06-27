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


app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const findProduct = db.find(p => p.id == id)

    if(findProduct){
        res.send(findProduct)
    }else{
        res.json({msg: "PRODUCTO NO ENCONTRADO"})
    }
})

app.post('/products', (req, res) => {
    const idRandom = new Date().getTime()
    const { name, quantity, price } = req.body

    db.push({ id: idRandom, name: name, quantity: quantity, price: price })

    res.json({msg: "PRODUCTO CREADO!"})

})



//======================================
app.listen(3000, ()=>{
    console.log("CORRIENDO EN EL PUERTO 3000");
})


