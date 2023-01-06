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

  edit: (req, res) => {
    res.render('edit');
  },

  store: async (req, res) =>{
      if (!req.file){
        return res.send ("la imagen tiene que ser .jpg, .png, .gif")
  }

    await Product.create({...req.body, image: req.file.filename})
    return res.redirect("/products");
  },
 


  
};




  module.exports = controller;