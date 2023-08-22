const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const User = require("../model/UserModel")



const createToken = (_id) => {
    return jwt.sign({ _id }, "SDFLKSJDJFKLSDJLKFJSLKDJ", { expiresIn: '3d' })
}





router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await User.signup(name, email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, token })

    } catch (error) {
        res.status(400).json({ error: error.message })

    }

})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    } catch (e) {
        res.status(400).json({ error: e.message })

    }
})


module.exports = router



