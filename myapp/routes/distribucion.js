var express = require('express')
var router = express.Router()
const Distribuciones = require('../models/distribuciones.model')
const distribucionIngresos = require('../models/distribucionIngresos.model')
const distribucionGastos = require('../models/distribucionGastos.model')

router.get('/', (req,res,next) => {
  Distribuciones.find().then((dis) => res.json({dis}))
})

router.post('/', (req, res) => {
  Distribuciones.create({
    nombre : req.body.nombre, 
    porcentaje : req.body.porcentaje,
    date : req.body.date    
  }).then((dis) => res.json(dis))
})

router.get('/ingresos', (req,res, next) => { // Sacamos los ingresos
  distribucionIngresos.aggregate([
    {                            
      $group : {
        _id : "$distribucion_id",   
        total : { $sum : "$monto" }             
      }    
    }        
  ]).then((resp_i) => res.json(resp_i) )    
})

router.get('/gastos', (req,res, next) => { // Sacamos todos los gastos
  distribucionGastos.aggregate([ 
    {                            
      $group : {
        _id : "$distribucion_id",   
        total : { $sum : "$monto" },
        count : { $sum : 1}
      }
    }
  ]).then((resp_g) => res.json(resp_g) )  
})

module.exports = router