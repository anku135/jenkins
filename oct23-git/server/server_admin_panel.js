const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const utils = require('./utils')
const jwt = require('jsonwebtoken')
const config = require('./config')
const morgan = require('morgan')

const routeAdmins = require('./routes/admin/admins')
const routeProduct = require('./routes/admin/product')
const routeCategory = require('./routes/admin/category')
const routeBrand = require('./routes/admin/brand')
const routeOrder = require('./routes/admin/order')
const routeUser = require('./routes/admin/user')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded())

app.use(cors('*'))
app.use(morgan('combined'))


function authorizeUser(request, response, next) {
  if (
      (request.url == '/admins/signin') || 
      (request.url.startsWith('/product/image')) 
    ) {
    next()
  } else {

    const token = request.headers['token']
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

app.use('/admins', routeAdmins)
app.use('/product', routeProduct)
app.use('/category', routeCategory)
app.use('/order', routeOrder)
app.use('/user', routeUser)
app.use('/brand', routeBrand)

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})