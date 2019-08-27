const userModel = require("../models/order.model.js")


const save = async ( req, res, next ) =>{
    const result = await userModel.save(req.body);
    if(result){
        res.render('succ', {ret: true, data: JSON.stringify({msg: 'succ'})})
    }else{
        res.render('succ', {ret: false, data: JSON.stringify({msg: 'fail'})})
    }
}

module.exports = { save };
