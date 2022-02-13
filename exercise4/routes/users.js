const express = require('express')
const {v4: uuidv4 } = require('uuid');
const router = express.Router()

//Local DB for products
const users = []

//Get all users
router.get('/', (req, res) => {
    res.json(users)
}); 

//Create new user
router.post('/', (req, res) => {
    users.push({
        id: uuidv4(),
        fname: req.body.fname,
        lname: req.body.lname,
        streetAddress: req.body.streetAddress,
        zipCode: req.body.zipCode,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber,
        securityNumber: req.body.securityNumber,
    });
    res.sendStatus(201);
});

module.exports = router