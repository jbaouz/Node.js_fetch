//###################################################################################
// npm init -y (pour le json package)
// npm i express (pour express)
const express = require('express')
const https = require('https')
const fs = require('fs')

let app = express()
let port = 8080

// html & css #######################################################################
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.use(express.static('public'))

// Variables ########################################################################
// Variables Module1 http
https.get('https://randomuser.me/api/?results=9', (resp) => {
    
    let data = ""

    resp.on('data', (chunk) => {
        data += chunk
    })
    
    resp.on('end', () => {
        images_module1 = JSON.parse(data)
    })

}).on("error", (err) => {
    console.log("Error: " + err.message)
})

// Variables Module2 http
https.get('https://fakerapi.it/api/v1/credit_cards?_quantity=9', (resp) => {
    
    let data2 = ""

    resp.on('data', (chunk) => {
        data2 += chunk
    })
    
    resp.on('end', () => {
        users_module2 = JSON.parse(data2)
    })

}).on("error", (err) => {
    console.log("Error: " + err.message)
})

// Variables Module3 http
https.get('https://fakerapi.it/api/v1/companies?_quantity=9', (resp) => {
    
    let data3 = ""

    resp.on('data', (chunk) => {
        data3 += chunk
    })
    
    resp.on('end', () => {
        company_module3 = JSON.parse(data3)
        console.log(company_module3)
    })

}).on("error", (err) => {
    console.log("Error: " + err.message)
})

// LES ROUTES
// Route photos pour Module1
app.get('/module1/images',function(req,res){
    res.send(images_module1)
})
// Route photos pour Module2
app.get('/module2/users',function(req,res){
    res.send(users_module2)
})
// Route photos pour Module3
app.get('/module3/company',function(req,res){
    res.send(company_module3)
})
//port d'écoute #####################################################################
app.listen(port)
console.log("\n\nserver launched at : localhost:"+port)