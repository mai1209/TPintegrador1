//coneccion a la base de datos//
const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.set('strictQuery', true);
mongoose.connect( 
    'mongodb://127.0.0.1:27017/tpintegrador1', 
    {
        useNewUrlParser: true,
        useUniFiedTopology: true
    },
    function (err, res) {
    if (err) {
        console.log('Error conection');
    }else{
        console.log('success conection');
    }
});  
}


module.exports = dbConnect;
 
