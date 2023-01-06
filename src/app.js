const express = require ('express');
const app = express();
const path = require('path');
const dbConnect = require('./config/mongo');




app.set('view engine', 'ejs');
app.set('views',path.resolve(__dirname,'views'));
app.use(express.static(path.resolve(__dirname,'../public')));


const products = require('./routes/products');
app.use('/products',products);
app.use('/',products);

app.use(express.urlencoded({extended: true}));

app.use((req,res,next)=>{
    res.render('404-page');
});

dbConnect(); 

app.listen(3000, () => console.log('servidor corriendo en el puerto 3000'));