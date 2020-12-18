var router = require("express").Router()
var db = require("../db/db.json")

router.get("/api/notes",function(req,res){
    res.json(db)
})

router.post("/api/notes",function(req,res){
    //console.log(req.body)
    const newnote = {
        title: req.body.title,
        text: req.body.text,
        id: db.length
    }
    db.push(newnote)
    res.json(db)
})

//delete??? need to give notes individual id's
router.delete("/api/notes/:id",function(req,res){
    console.log(req.params.id)
    db.splice(req.params.id, 1)
    res.json(db)
})

module.exports = router