var router = require("express").Router()
var db = require("../db/db.json")

router.get("/api/notes",function(req,res){
    res.json(db)
})

router.post("/api/notes",function(req,res){
    console.log(req.body)
    db.push(req.body)
    res.json(db)
})

module.exports = router