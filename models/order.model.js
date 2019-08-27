
const db = require('../utils/mongo.util.js');

const OrdersSchema = db.Schema({
    status: {type: String, required: true},  //1，评团中，
    type: {type: String, required: true}, 
    member: {type: Array, required: true},
    createTime: {type: Date, default: Date.now},
});

const Order = db.model('Orders', OrdersSchema);

const save = ( data ) =>{
    let users = new Order( data );
    return users.save().then( result => {
        return result
    }).catch( err =>{ 
        return false
    })
}

module.exports = { save };

