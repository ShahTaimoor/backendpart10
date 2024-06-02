

const Authentication = (req,res,next)=>{
    let isLogin = false
    
    if (isLogin) {
        next()
    }
    else{
        res.json({
            message:'unatthorized'
        })
    }
}

module.exports = Authentication