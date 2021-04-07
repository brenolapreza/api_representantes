const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

require('./Database/db')

app.use(express.json());
app.use(express.json({extends: true}))
app.use(cors());

require('./Models/Representante')
const Representante = mongoose.model("representante")

app.get('/representantes', (req, res) => {
    Representante.find({}).then((representante) => {
        res.json(representante)
    })
})

app.get('/representante/:id', (req, res) => {
    Representante.findOne({_id: req.params.id}).then(data => {
        res.json(data)
    }).catch(error => {
        console.log(error)
    })
})

app.post('/criar', (req, res) => {
    Representante.create(req.body).then(() => {
        res.json({
            error: false,
            msg: "Representante cadastrado"
        })
    }).catch(( error ) => {
        res.json({
            error: true,
            msg: "Erro ao cadastro."
        })
    })
})

app.delete('/deletar/:id', (req, res) => {
    Representante.deleteOne({_id: req.params.id}).then(data => {
        res.json({
            msg: " Usuario deletado!"
        })
    })
})


app.listen(4002, () => {
    console.log('Conectado a porta 4002')
})