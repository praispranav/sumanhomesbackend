const express = require('express');
const EnquiryModel = require('./enquiryModel')
var router = express.Router();

router.post('/get', async (req, res)=>{
    if(req.body.token === "skdkajskldsalkd"){
        const body = req.body;
        const result = await EnquiryModel.find();
        res.json(result);
    } else {
        res.status(401).json({ message: "Access Denied"})
    }
})
router.post('/insert', async (req, res)=>{
    try{
        const body = req.body;

        await EnquiryModel.create({ ...body });
        res.json({  message: "Message Sent"})
    } catch(error){
        res.status(500).json({  message: "Error"})
    }
    
    
})

module.exports = router;