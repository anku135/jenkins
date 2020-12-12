const express = require('express')
const utils = require('../../utils')
const mysql2 = require('mysql2/promise')
const db = require('../../db')

const router = express.Router()

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mystore',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

router.get('/', (request, response) => {
  const statement = `select * from userOrder where userId = ${request.userId}`
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.delete('/cancel/:id', (request, response) => {
  const {id} = request.params
  const statement = `update userOrder set orderState = 6 where id = ${id}`
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.post('/', (request, response) => {

  (async () => {
 
    const {addressId} = request.body

    const [items] = await pool.query(`select * from cart where userId = ${request.userId}`)
    
    let totalAmount = 0
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      totalAmount += (item.price * item.quantity)
    }

    const statement = `insert into userOrder (userId, totalAmount, addressId) values (
      ${request.userId}, ${totalAmount}, ${addressId}
    )`
    const [result] = await pool.query(statement)
    

    const orderId = result.insertId
  
   
    for (let index = 0; index < items.length; index++) {
      const product = items[index];
      const insertOrderDetailsStatement = `
        insert into userOrderDetails (orderId, productId, price, quantity, totalAmount) values (
          ${orderId}, ${product.id}, ${product.price}, ${product.quantity}, ${product.price * product.quantity}
        )
      `
      await pool.query(insertOrderDetailsStatement)
    }
  

    await pool.query(`delete from cart where userId = ${request.userId}`)

    response.send({status:'success'})
  })()

})

module.exports = router