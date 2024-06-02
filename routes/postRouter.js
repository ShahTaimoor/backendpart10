const express = require('express')

const postRouter = express.Router()

postRouter.get('/post', (req,res)=>{
         res.json({
    status:'Succes',
message:'ALL POST'
})
})

module.exports = postRouter