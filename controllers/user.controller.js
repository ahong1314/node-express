const userModel = require("../models/user.model.js")


const save = async ( req, res, next ) =>{
    const result = await userModel.save(req.body);
    if(result){
        res.render('succ', {ret: true, data: JSON.stringify({msg: 'succ'})})
    }else{
        res.render('succ', {ret: false, data: JSON.stringify({msg: 'fail'})})
    }
}
const update = async ( req, res, next ) =>{
    const result = await userModel.update(req.body);
    if(result){
        res.render('succ', {ret: true, data: JSON.stringify({msg: 'succ'})})
    }else{
        res.render('succ', {ret: false, data: JSON.stringify({msg: 'fail'})})
    }
}
const findByOpenId = async ( req, res, next ) =>{
    const result = await userModel.findByOpenId(req.body);
    if(result){
        res.render('succ', {ret: true, data: JSON.stringify(result)})
    }else{
        res.render('succ', {ret: false, data: JSON.stringify({msg: 'fail'})})
    }
}

module.exports = { save, update, findByOpenId };


