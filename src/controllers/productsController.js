const { render } = require("ejs")
const path= require('path');
const fs = require('fs');

const pathJson = path.resolve(__dirname,'../data/products.json');
const productsJson= fs.readFileSync(pathJson,'utf-8');
const products = JSON.parse(productsJson);

let controller = {
    home:(req, res) => {
        res.render('home', {productos:products})
    },

    detail: (req, res)=>{ 
      products.forEach(product => {
        if (product.id == req.params.id){
            res.render('detail', {producto:product});
        }
      })
      res.redirect('/404-page');
      
    },

    form:(req, res) => {
      res.render('form', {productos:products})
  },

  edit:(req, res) => {
    res.render('edit', {productos:products})
},

   
}


module.exports= controller;