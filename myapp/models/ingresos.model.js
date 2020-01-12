const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ingresosShema = new Schema({
  monto : Number,
  quien : String,
  de_que : String,
  donde_esta : String,
  date : Date
})
module.exports = new mongoose.model('Ingresos',ingresosShema)