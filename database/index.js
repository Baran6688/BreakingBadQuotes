const express = require("express")
const app = express()
const mongoose = require('mongoose')
const QuotesModel = require('./model/QuotesModel')



mongoose.connect('mongodb://127.0.0.1:27017/bbquotes')
.then( ()=> {
    console.log("Connected to MongoDB Successfully")
})
.catch((er)=> {
    console.log("ERROR", er)
})




app.get("/",async (req,res) => {
    const quote = await QuotesModel.find({})
    console.log(quote)
    console.log("IM FROM THE CONSOLE! HMMM.")
    res.send("HELLO MAN!!")

})


app.get("/new",async (req,res) => {
    const newQuote = await new QuotesModel({author:"Walter White",quote:"Say My name" })
    await newQuote.save()
      console.log("NEW QUOTE!!")
      res.send("HELLO MAN!! WELCOME!!")
  })


  app.get("/quotes",async (req,res) => {
    const quote = await QuotesModel.find({})
    console.log(quote)
    console.log("IM FROM THE CONSOLE! HMMM.")
    res.send(quote)

})




const port = 3001
app.listen(port, ()=> {
    console.log(`App Listening on Port ${port}`)
} )