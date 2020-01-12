var express = require('express')
var router = express.Router()
const Ingresos = require('../models/ingresos.model')
const Distribuciones = require('../models/distribuciones.model')
const DistribucionIngresos = require('../models/distribucionIngresos.model')

router.get('/', (req,res,next) => {
  Ingresos.find().sort([['date', -1]]).then((i) => res.json({i}))
})

router.post('/', (req, res) => {
  Ingresos.create({
    monto : req.body.monto, 
    quien : req.body.quien,
    de_que : req.body.de_que,
    donde_esta : req.body.donde_esta,
    date : req.body.date
  }).then((dis) => res.json(dis))

  Distribuciones.find().then( (resp) => { // Buscamos todas las distribuciones 
    resp.forEach(function(d){            
      // calculamos todo en porcentajes
      // en la distribucion de ingresos       
      DistribucionIngresos.create({
        distribucion_id : d._id,
        monto : ( parseFloat( (req.body.monto * d.porcentaje) / 100) ),  
        date : req.body.date        
      })
    })
  })

  
})

module.exports = router