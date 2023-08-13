const mongoose = require('mongoose')

const Schema  = mongoose.Schema 
const Model = mongoose.model

const QuoteSchema = new Schema({
    quote: String,
    author: String
})

const QuotesModel=Model("Quote", QuoteSchema)

module.exports = QuotesModel