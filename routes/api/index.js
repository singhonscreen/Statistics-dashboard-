var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/login', (req, res, next)=>{
  try{
    let payload = req.body;
    let data = {
        "email":"abc@gmail.com",
        "password":"12345"
    }
    if (payload['email'] != data['email']){
      return res.json({"status":"401", "message":"email doesn't exist", "result":"couldn't login"})
    }else if(payload['password'] != data['password']){
      return res.json({"status":"401", "message":"wrong password", "result":"couldn't login"})
    }
  return res.json({"status":"200", "message":"success", "result":"login"})
  }catch(err){
    return err
  }
})

router.get('/dashboard', (req, res)=>{
  try{
    let res_json ={}
    return res.json({"status":"success", "message":"success", "result":res_json})
  }catch(err){
    return err
  }
})


module.exports = router;