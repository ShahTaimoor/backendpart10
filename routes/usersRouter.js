const express = require('express')

// Create instance of express router

const userRouter = express.Router()



// ! Getting all users 

userRouter.route('/').get((req,res)=>{
       res.json({
    status:'Succes',
message:'user fetched'
})

})



// ! Getting a user , update user & delete user Router Chaining
userRouter.route('/:id').get((req,res)=>{
       res.json({
    status:'Succes',
message:'user fetched'
})
}).put((req,res)=>{
       res.json({
    status:'Succes',
message:'Welcome To'
})
}).delete((req,res)=>{
       res.json({
    status:'Succes',
message:'User Deleted'
})

})



module.exports = userRouter

