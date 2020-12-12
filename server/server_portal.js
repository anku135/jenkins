const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const utils = require('./utils')
const jwt = require('jsonwebtoken')
const config = require('./config')
const morgan = require('morgan')

const routeUser = require('./routes/portal/user')
const routeProduct = require('./routes/portal/product')
const routeCategory = require('./routes/portal/category')
const routeBrand = require('./routes/portal/brand')
const routeCart = require('./routes/portal/cart')
const routeAddress = require('./routes/portal/address')
const routeOrder = require('./routes/portal/order')
const routeProductReview = require('./routes/portal/product-review')

const app = express()


app.use(bodyParser.json())

app.use(bodyParser.urlencoded())

app.use(cors('*'))
app.use(morgan('dev'))


function authorizeUser(request, response, next) {
  if (
      (request.url == '/user/signin') || 
      (request.url == '/user/signup') || 
      (request.url.startsWith('/user/image')) ||
      (request.url.startsWith('/product/image')) 
    ) {
    next()
  } else {

    const token = request.headers['token']
    console.log(`token: ${token}`)
    if (!token) {
      
      response.status(401)
      response.send(utils.createResult('token is missing'))
    } else {
      
      try {
        const data = jwt.verify(token, config.secret)

        request.userId = data.id

  
        next()

      } catch(ex) {

        
        response.status(401)
        response.send(utils.createResult('invalid token'))
      }
    }
  }
}

app.use(authorizeUser)

// add routes
app.use('/user', routeUser)
app.use('/product', routeProduct)
app.use('/category', routeCategory)
app.use('/brand', routeBrand)
app.use('/cart', routeCart)
app.use('/address', routeAddress)
app.use('/order', routeOrder)
app.use('/product-review', routeProductReview)

app.listen(4100, '0.0.0.0', () => {
  console.log('server started on port 4100')
})