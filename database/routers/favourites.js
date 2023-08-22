const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const requireAuth = require("../middlewares/requireAuth")
const Favourite = require('../model/Favourite')

router.get("/", async (req, res) => {
    const quote = await Favourite.find({}).sort({ createdAt: -1 })
    res.status(200).json(quote)

})

router.post("/", requireAuth, async (req, res) => {
    const newFavourite = await new Favourite(req.body)
    await newFavourite.save()
})




module.exports = router