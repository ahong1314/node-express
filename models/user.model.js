
const db = require('../utils/mongo.util.js');

const usersSchema = db.Schema({
    token: {type: String, required: true},
    openid: {type: String, required: true},
    nickname: {type: String, required: true},
    city: {type: String, required: true},
    headimgurl: {type: String, required: true},
    createTime: {type: Date, default: Date.now},
});

const UserInfo = db.model('Users', usersSchema);

const save = ( data ) =>{
    let users = new UserInfo( data );
    return users.save().then( result => {
        return result
    }).catch( err =>{ 
        return false
    })
}

module.exports = { save };

