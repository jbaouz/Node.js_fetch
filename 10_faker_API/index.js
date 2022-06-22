//###################################################################################
// npm init -y (pour le json package)
// npm i express (pour express)
const express = require('express')
const https = require('https')
const fs = require('fs')

let app = express()
let port = 8080
//###################################################################################

// html
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})

// Variables
let fake_data;

// récupérer les données de l'API----------------------------------------------------
https.get('https://randomuser.me/api/?results=160', (resp) => {
    
    let data = ""

    resp.on('data', (chunk) => {
        data += chunk
    })
    
    resp.on('end', () => {
        fake_data = JSON.parse(data)
        console.log(fake_data)
    })

}).on("error", (err) => {
    console.log("Error: " + err.message)
})

//-----------------------------------------------------------------------------------

//LES ROUTES
app.get('/fakeProfils',function(req,res){
    res.send(fake_data)
})

//port d'écoute
app.listen(port)
console.log("\n\nserver launched at : localhost:"+port)
