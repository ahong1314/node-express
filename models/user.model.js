
const db = require('../utils/mongo.util.js');

const usersSchema = db.Schema({
    token: {type: String, required: true},
    openid: {type: String, required: true},
    nickname: {type: String, required: true},
    city: {type: String, required: true},
    headimgurl: {type: String, required: true},
    phone: {type: String, required: false},
    realname: {type: String, required: false},
    createTime: {type: Date, default: Date.now}
});

const Users = db.model('Users', usersSchema);

const save = ( data ) =>{
    let user = new Users( data );
    return user.save().then( result => {
        return result
    }).catch( err =>{ 
        return false
    })
}

const findByOpenId = ( data ) =>{
    return Users.findOne(data).then( result => result )
}

const update = ( data ) =>{
    return Users.findOneAndUpdate({openid: data.openid}, {realname: data.realname, phone: data.phone}).then( result => result )
}

module.exports = { save, update, findByOpenId };

