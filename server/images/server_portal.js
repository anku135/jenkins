const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const utils = require('./utils')
const jwt = require('jsonwebtoken')
const config = require('./config')
const morgan = require('morgan')

const routeUser = require('./routes/portal/user')


const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded())

app.use(cors('*'))
app.use(morgan('combined'))

function authorizeUser(request, response, next) {
  if (
      (request.url == '/user/signin') || 
      (request.url == '/user/signup') || 
      (request.url.startsWith('/user/image')) 
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

app.use('/user', routeUser)

app.listen(4100, '0.0.0.0', () => {
  console.log('server started on port 4100')
})