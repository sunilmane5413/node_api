const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
res.send('hello world')
})

app.listen(port,() =>{
console.log(`example app listening on {port}`)
})

// in browser at localhost:3000 port i am getting output as HELLO WORLD
