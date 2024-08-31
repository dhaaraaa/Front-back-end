const express = require("express")

const app = express()
const arr = ["Strawberry"]

app.listen(3000, function () {
    console.log('server runs...')
})
app.get('/', function (req, res) {
    console.log("your server gets ready")
    res.send("your server gets ready")
})
app.get('/name', function (req, res) {
    // console.log(req.query.inputbox)
    const val = req.query.inputbox
    arr.push(val)
    console.log(arr)
    console.log(val)
    res.send(("works"))

})
