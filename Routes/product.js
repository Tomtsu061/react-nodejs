const express = require('express')
const router = express.Router()





//http://localhost:5001/api/product
router.get('/product', (req, res) => {
    res.send('Hello Product')
})
router.get('/product/:id', (req, res) => {
    res.send('Hello 1 Product')
})

router.post('/product', (req, res) => {
    res.send('Hello Product End')
})
router.put('/product/:id', (req, res) => {
    res.send('Hello Put End')
})
router.delete('/product/:id', (req, res) => {
    res.json({ name: 'tom', age: 21 })
})
module.exports = router