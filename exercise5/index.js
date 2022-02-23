const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 8081

const products = require('./routes/products')
const users = require('./routes/users')
const invoices = require('./routes/invoices')

app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res. header("Access-Control-Allow-Origin", "*");
  res. header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

//static route for react app ('/' -> reactAppExercise)
app.use(express.static('reactAppExercise'));

//static route for images ('/images' -> images)
app.use('/images', express.static('images'));

//REST server routes
app.use('/products', products)
app.use('/users', users)
app.use('/invoices', invoices)

//Start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})