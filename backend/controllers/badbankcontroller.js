const express=require('express')
var router=express.Router()
var objectID=require('mongoose').Types.objectID

var{BadBank}= require('../models/badbankmodels')

router.get('/',(req,res)=>{

    BadBank.find((err,docs)=>{

if(!err) res.send(docs)
else console.log('Error while fetching the data')
    })
})

router.post('/',(req,res)=>{
    
})
