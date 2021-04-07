const mongoose = require('mongoose');

const Representante = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    whatsapp_link: {
        type: String,
        require: true
    },
    cursos: {
        "cursos_presenciais": {},
        "cursos_online": {}
    }
})

mongoose.model("representante", Representante)