const express = require("express")
const app = express()
const mongoose = require('mongoose')

const Favourite = require('./model/Favourite')

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/bbquotes')
    .then(() => {
        console.log("Connected to MongoDB Successfully")
    })
    .catch((er) => {
        console.log("ERROR", er)
    })




app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})




// app.get("/", async (req, res) => {
//     const quote = await Favourite.find({})
//     console.log(quote)
//     console.log("IM FROM THE CONSOLE! HMMM.")
//     res.send("HELLO MAN!!")

// })


app.get("/api/favourites", async (req, res) => {
    const quote = await Favourite.find({})

    res.status(200).json(quote)


})

app.post("/api/favourites", async (req, res) => {
    const newFavourite = await new Favourite(req.body)
    await newFavourite.save()
})

app.get("/api/addnew", async (req, res) => {
    const addNew = await new Favourite({ author: "Jesse Pinkman", quote: "Bitch!!" })
    await addNew.save()
    res.status(200).send(addNew)
    console.log(addNew)
})




const port = 3000
app.listen(port, () => {
    console.log(`App Listening on Port ${port}`)
})