const express = require('express')
const userRouter = require('../backendpart9/routes/usersRouter')
const postRouter = require('../backendpart9/routes/postRouter')
const Authentication = require('./middleware/authintication')

const app = express()


app.get('/', (req,res)=>{
       res.json({
    status:'Succes',
message:'Welcome To'
})

})

app.use('/user', Authentication ,userRouter)
app.use('/', postRouter)



const PORT =3000

app.listen(PORT,()=>{
    console.log(`Server Running is ${PORT}`);
})
