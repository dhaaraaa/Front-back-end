const express = require("express");
const cors = require("cors");
const app = express()
app.use(cors())

const arr = []
app.use(express.urlencoded({ extended: false}));

// app.get('/', function (req, res) {
//     console.log("your server gets ready")
//     res.send("your server gets ready")
// })
app.get('/', function (req, res) {
    // console.log(req)
    const val = req.query.inputbox
    arr.push(val)
    console.log(arr)
    console.log(val)
    res.send(("Ur fruit is added"))

})
app.listen(5000, function () {
    console.log('server runs...')
})