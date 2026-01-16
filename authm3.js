const express = require("express")
const port = 3000
const app = express()

function middleware(req,res,next){
    const username = req.query.username
    const password = req.query.password
    if(username == "shashank" && password == "midas"){
        next()}
    else{
        res.status(403).json({msg :"something's up"})
    }
}
function idchecker(req,res,next){
    const id = req.headers.id
    if(id == 5){
        next()}
    else{
        res.status(403).json({msg :"awwww! something's up"})
    }
}

app.get("/signin" , middleware , idchecker ,function(req,res){
    res.json({msg: "welcome bro"})
})
app.listen(port)