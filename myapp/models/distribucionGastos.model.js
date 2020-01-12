const mongoose = require('mongoose')
const Schema = mongoose.Schema
const distribucionGastosSchema = new Schema({  
  distribucion_id : String,
  monto : Number,  
  date : Date,
  detalles : String
})
module.exports = new mongoose.model('distribucion_gastos',distribucionGastosSchema)