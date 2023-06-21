const express=require('express')
const app=express()
const port=8000

app.get('/',(req,res)=>res.json([
    {
        name:'sid',
        gf:'anusha'
    }
]))

app.listen(port,()=>{
    console.log('im seeing this shit')
})