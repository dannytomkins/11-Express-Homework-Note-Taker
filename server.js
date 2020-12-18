var express = require("express")

// To use horoku or listen locally
var PORT = process.env.PORT || 3000

var app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static("public"))

app.use(require("./routes/htmlroutes"))
app.use(require("./routes/apiroutes"))

app.listen(PORT,function(){
    console.log("app is listening on port "+PORT)
})