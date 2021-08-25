const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({
    origin: "*"
}))
app.get('/data',(req,res)=>{
    res.send({food:'Prawns'})
})

app.listen(3000, ()=>console.log('running on 3000'))