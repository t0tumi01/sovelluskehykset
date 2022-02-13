const express = require('express')
const {v4: uuidv4 } = require('uuid');
const router = express.Router()

//Local DB for products
const invoices = []

//Get all invoices
router.get('/', (req, res) => {
    res.json(invoices)
}); 

//Get invoices of a user
router.get('/:userId', (req, res) => {
    var ivs = invoices.filter(t => t.userId == req.params.userId);
    if (ivs.length > 0)
        res.json(ivs);
    else
        res.sendStatus(404);
}); 

//Get single invoice of a user
router.get('/:userId/:invoiceId', (req, res) => {
    var ivs = invoices.find(t => t.userId == req.params.userId && t.id == req.params.invoiceId);
    if (ivs)
        res.json(ivs);
    else
        res.sendStatus(404);
}); 

//Purchase / Create new invoice
router.post('/', (req, res) => {
    invoices.push({
        id: uuidv4(),
        userId: req.body.userId,
        prodIds: req.body.prodIds,
        totalSum: req.body.totalSum,
        date: req.body.date
    });
    res.sendStatus(201);
});

//Delete invoice of a user
router.delete('/:userId/:invoiceId', (req, res) => {
    var invoiceId = invoices.findIndex(t => t.userId == req.params.userId && t.id == req.params.invoiceId);
    if (invoiceId === -1)
        res.sendStatus(404);
    else {
        invoices.splice(invoiceId, 1);
        res.sendStatus(202);
    }
});

module.exports = router