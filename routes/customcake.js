const express = require('express')
const router = express.Router()

const flavourData = require('../models/customflavour')
const fillingData = require('../models/customfilling')
const shapeData = require('../models/customshape')
const sizeData = require('../models/customsize')


router.get('/', (req, res)=>{
   res.send('this is the custom route')
})

router.get('/flavours', (req,res)=>{
   flavourData.find()
   .then(result => {
      res.json(result)
   })
   .catch(err=>console.log(err))
})

router.get('/fillings', (req,res)=>{
   fillingData.find()
   .then(result => {
      res.json(result)
   })
   .catch(err=>console.log(err))
})

router.get('/shapes', (req,res)=>{
   shapeData.find()
   .then(result => {
      res.json(result)
   })
   .catch(err=>console.log(err))
})

router.get('/sizes', (req,res)=>{
   sizeData.find()
   .then(result => {
      res.json(result)
   })
   .catch(err=>console.log(err))
})

module.exports = router;