const userModel = require("../models/user.model.js")


const save = async ( req, res, next ) =>{
    const result = await userModel.save(req.body);
    if(result){
        res.render('succ', {ret: true, msg: 'succ'})
    }else{
        res.render('succ', {ret: false, msg: 'fail'})

    }
}

module.exports = { save };
