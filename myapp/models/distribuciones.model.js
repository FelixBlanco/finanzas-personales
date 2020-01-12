const mongoose = require('mongoose')
const Schema = mongoose.Schema

var distribucionSchema = new Schema({  
  nombre : String,  
  porcentaje : Number,
  date : Date
})

module.exports = new mongoose.model('Distribuciones', distribucionSchema)