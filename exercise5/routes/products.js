const express = require('express')
const fs = require('fs');
const {v4: uuidv4 } = require('uuid');
const router = express.Router()

//Local DB for products
const products = require('./products.json');
//const products = JSON.parse(fs.readFileSync('./public/products.json'));

//Get all products
router.get('/', (req, res) => {
    res.json(products)
}); 

//Get single product by prodId
router.get('/:prodId', (req, res) => {
    let prod = products.data.find(t => t.id == req.params.prodId);

    if(prod) 
        res.json(prod);
    else 
        res.sendStatus(404);
});

//Get products based on name, manufacturer, category
router.get('/:name/:manufacturer/:category', (req, res) => {
    let prod = products.data.find(t => t.name == req.params.name && t.manufacturer == req.params.manufacturer && t.category == req.params.category);

    if(prod) 
        res.json(prod);
    else 
        res.sendStatus(404);
});

//Create new product
router.post('/', (req, res) => {
    products.data.push({
        id: uuidv4(),
        visible: true,
        description: req.body.description,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        price: req.body.price,
        starsImg: req.body.starsImg,
        ratingsCount: req.body.ratingsCount,
        prodImg: req.body.prodImg, 
    });
    res.json(products);
});

//Modify product by prodId
router.put('/:prodId', (req, res) => {
    let prod = products.data.find(t => t.id == req.params.prodId);

    if (prod) {
        prod.name = req.body.name;
        prod.manufacturer = req.body.manufacturer;
        prod.category = req.body.category;
        prod.description = req.body.description;
        prod.price = req.body.price;
        prod.starsImg = req.body.starsImg;
        prod.ratingsCount = req.body.ratingsCount;
        prod.prodImg = req.body.prodImg;
        res.sendStatus(202);
    }
    else {
        res.sendStatus(404);
    }
});

//Delete product by prodId
router.delete('/:prodId', (req, res) => {
    var prodIdx = products.data.findIndex(t => t.id == req.params.prodId);
    if (prodIdx >= 0)
    {
        products.data.splice(prodIdx, 1);
        res.json(products);
    }
    else {   
        res.sendStatus(404);
    }
});

module.exports = router