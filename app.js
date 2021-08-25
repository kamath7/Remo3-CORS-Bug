const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({
    origin: "*",
    methods: ["GET","POST"], //only allows get and post methods
    credentials: true
 }))
app.get('/data',(req,res)=>{
    res.send({food:'Prawns'})
})

app.listen(3000, ()=>console.log('running on 3000'))