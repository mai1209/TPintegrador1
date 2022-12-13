const express = require ('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views',path.resolve(__dirname,'views'));
app.use(express.static(path.resolve(__dirname,'../public')));


const products = require('./routes/products');
app.use('/products',products);


app.use((req,res,next)=>{
    res.render('404-page');
});

app.listen(3000, () => console.log('servidor corriendo en el puerto 3000'));