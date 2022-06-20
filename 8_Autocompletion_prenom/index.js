//###################################################################################
// npm init -y (pour le json package)
// npm i express (pour express)
const express = require('express')
const fs = require('fs')

let app = express()
let port = 8080
//###################################################################################

// Déclaration des variables
let data = fs.readFileSync("prenoms.txt").toString().split("\n") //readFileSync (synchrone) pour attendre la fin de la lecture du txt.

//html
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})

//LES ROUTES
app.get('/deliverName/:name',function(req,res){
    let end = req.params.name.length
    let found = data.filter(letters=>letters.substring(0, end) == req.params.name)
    //console.log(found)
    res.send(found)
})

//port d'écoute
app.listen(port)
console.log("\n\nserver launched at : localhost:"+port)