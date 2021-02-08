const { Router } = require('express')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use((req,res, next)=>{
   res.header('Access-Control-Allow-Origin', '*')
   next()
})

app.use(bodyParser.urlencoded({ extended: false }))
//alternatively... 
//app.use(bodyParser.json())

mongoose
   .connect(process.env.DB,
      {
         useNewUrlParser: true,  
         useUnifiedTopology: true,
         useFindAndModify:false
     })
   .then(()=>{
        console.log('connected to MongoDB')
      })
   .catch(err=>console.log(err))


app.use('/', require('./routes/test'))
app.use('/customcake', require('./routes/customcake'))
app.use('/cakes', require('./routes/cakes'))
   
app.listen(process.env.PORT, ()=>{
   console.log('listening on ', process.env.PORT)
})