const { findOneAndDelete } = require('../data/models/Product');
const Product = require('../data/models/Product');

let controller = {
  home: async (req, res) => {
      const products =  await Product.find();
      res.render('home', { productos: products });
  }, 

  detail: async (req, res) => {
    const product = await Product.findById (req.params.id);
    res.render("detail" , {producto: product});

  },

  form: (req, res) => {
    res.render('form') 
    

  },

  edit: async (req, res) => {
   const product =  await Product.findById(req.params.id);
    res.render("edit", {producto: product});
  },

  store: async (req, res) =>{

    await Product.create({...req.body, image: req.file.filename});
    return res.redirect("/products");
  },
 
  update: async(req, res) =>{
   let product = await Product.findById({ _id: req.params.id });
   let productUpdated = await Product.findByIdAndUpdate (
    {_id: req.params.id },
    {...req.body}
   );
   return res.redirect("/products");
  },

  delete:async (req, res) => {
    const product =  await Product.findById(req.params.id);
     res.render("delete", {producto: product});
   },

 destroy: async (req,res) =>{
  await Product.findByIdAndRemove ({...req.body, _id:req.params.id});
  return res.redirect("/products");
 }

  
};




  module.exports = controller;

  