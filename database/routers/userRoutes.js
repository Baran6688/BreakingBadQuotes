const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const requireAuth = require("../middlewares/requireAuth")
const User = require("../model/UserModel")



const createToken = (_id) => {
    return jwt.sign({ _id }, "SDFLKSJDJFKLSDJLKFJSLKDJ", { expiresIn: '3d' })
}





router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await User.signup(name, email, password)
        await user.save()
        const token = createToken(user._id)
        res.status(200).json({ email, name, token })

    } catch (error) {
        res.status(400).json({ error: error.message })

    }

})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, name: user.name, token })
    } catch (e) {
        res.status(400).json({ error: e.message })

    }
})


router.post("/save", requireAuth, async (req, res) => {
    const UserId = req.user._id
    const { quote, author } = req.body
    try {
        const user = await User.findByIdAndUpdate(UserId, { $push: { favourites: { quote, author } } })
        await user.save()
        console.log("saved", user)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete("/remove/:id", requireAuth, async (req, res) => {
    const UserId = req.user._id
    const QuoteId = req.params.id
    console.log(QuoteId)

    try {
        const user = await User.findByIdAndUpdate(UserId, { $pull: { favourites: { _id: QuoteId } } })
        await user.save()
        res.status(200).json(user.favourites)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

router.get("/favourites", requireAuth, async (req, res) => {
    const UserId = req.user._id
    try {
        const favourites = await User.findById(UserId).select("favourites")

        res.status(200).json(favourites)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})


module.exports = router



