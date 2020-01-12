var express = require('express')
var router = express.Router()
const Gastos = require('../models/distribucionGastos.model')

router.get('/', (req,res,next) => {
  Gastos.find().then((g) => res.json(g))
})

router.post('/', (req, res) => {
  Gastos.create({
    distribucion_id : req.body.distribucion_id,
    monto : req.body.monto,  
    date : req.body.date,
    detalles : req.body.detalles
  }).then((dis) => res.json(dis))
})

module.exports = router