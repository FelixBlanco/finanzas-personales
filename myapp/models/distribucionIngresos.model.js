const mongoose = require('mongoose')
const Schema = mongoose.Schema
const distribucionIngresosSchema = new Schema({
  distribucion_id : String,
  monto : Number,  
  date : Date
})
module.exports = new mongoose.model('distribucion_ingresos',distribucionIngresosSchema)