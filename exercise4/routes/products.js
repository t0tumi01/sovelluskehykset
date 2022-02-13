const express = require('express')
const {v4: uuidv4 } = require('uuid');
const router = express.Router()

//Local DB for products
const products = []

//Get all products
router.get('/', (req, res) => {
    res.json(products)
}); 

//Get single product by prodId
router.get('/:prodId', (req, res) => {
    let prod = products.find(t => t.id === req.params.prodId);

    if(prod) 
        res.json(prod);
    else 
        res.sendStatus(404);
});

//Get products based on name, manufacturer, category
router.get('/:name/:manufacturer/:category', (req, res) => {
    let prod = products.find(t => t.name == req.params.name && t.manufacturer == req.params.manufacturer && t.category == req.params.category);

    if(prod) 
        res.json(prod);
    else 
        res.sendStatus(404);
});

//Create new product
router.post('/', (req, res) => {
    products.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
    });
    res.sendStatus(201);
});

//Modify product by prodId
router.put('/:prodId', (req, res) => {
    let prod = products.find(t => t.id === req.params.prodId);

    if (prod) {
        prod.name = req.body.name;
        prod.manufacturer = req.body.manufacturer;
        prod.category = req.body.category;
        prod.description = req.body.description;
        prod.price = req.body.price;
        prod.image = req.body.image;
        res.sendStatus(202);
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router