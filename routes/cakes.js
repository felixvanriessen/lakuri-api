const express = require('express')
const router = express.Router()

const readycakeData = require('../models/readycakes')
const readycupcakeData = require('../models/readycupcakes')


router.get('/cakes', (req,res)=>{
   readycakeData.find()
   .then(result => {
      res.json(result)
   })
   .catch(err=>console.log(err))
})

router.get('/cupcakes', (req,res)=>{
   readycupcakeData.find()
   .then(result => {
      res.json(result)
   })
   .catch(err=>console.log(err))
})


module.exports = router;