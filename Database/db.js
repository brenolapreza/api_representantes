const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://brenolapreza:tucha33871812@cluster0.mhqgz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('conectado com o db')
}).catch((error) => {
    console.log('error', error)
})