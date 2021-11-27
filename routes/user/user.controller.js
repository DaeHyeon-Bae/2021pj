const express = require('express');
const router = express.Router();
const userService = require('./user.service');

/* GET home page. */

router.put('/', async (req,res)=>{
    try{

        const result = await userService.updateUser(req.params);
        return res.status(200).json({status: 200, data: result, message: 'Success'});

    }catch(error){
        return res.status(500).json({status: 500, message: error});
    }
});

router.post('/', async (req,res)=>{

    try{
        const result = await userService.insertUser(req.body);
        return res.status(200).json({status: 200, data: result, message: 'Success'});
      }catch(error){
        return res.status(500).json({status: 500, message: error});
      }

});

router.get('/', async(req, res)=>{

  try{
    const result = await userService.getUserList();
    return res.status(200).json({status: 200, data: result, message: 'Success'});
  }catch(error){
    return res.status(500).json({status: 500, message: error});
  }

}
  // res.render('index', { title: 'BAEDAE' });
);

module.exports = router;
