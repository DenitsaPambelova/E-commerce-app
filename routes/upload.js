const router= require('express').Router()
const cloudinary = require('cloudinary')
const auth=require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})
// Upload image
router.post('/upload', (req,res)=>{
    try{
        res.json('test upload')
        console.log(req.files)
    }catch(err){
        res.status(500).json({msg: err.message})
    }
})

module.exports = router