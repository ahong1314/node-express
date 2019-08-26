
//use 集合  不存在就创建
use muisc

//创建集合
db.createCollection('beyond')

//获取集合
db.getCollection('beyond')

//获取集合名称
db.getCollectionNames()

//增
db.beyond.insertOne({'name': '海阔天空'})
db.beyond.insertMany([{'name': '海阔天空', 'year': '1998'}])
db.beyond.insert([{'name': '海阔天空', 'year': '1998'}])
db.beyond.save([{'name': '情人', 'year': '2000'}])

//删
db.beyond.remove({'name': '海阔天空'})
db.beyond.delete({'name': '海阔天空'})

//改
db.beyond.update({'name': '海阔天空'}, {'name': '海阔天空2'})
db.beyond.update({'name': '海阔天空'}, {$inc:{'age':50}}, false, true)

//查
db.beyond.find()
db.beyond.find({'age': 20})  //条件查询
db.beyond.find({'age': {$gt: 22}})  //大于或等于
db.beyond.find({'age': {$gte: 22}})  //大于
db.beyond.find({'age': {$lt: 22}})  //小于
db.beyond.find({'age': {$lte: 22}})  //小于或等于
db.beyond.find({'age': {$ge: 22, $te: 26}})  //范围
db.beyond.find({'age': /mongo/})  //正则查询， 模糊匹配
db.beyond.find().sort({age: 1})  //升序排序
db.beyond.find().sort({age: -1})  //降序排序
db.beyond.find().limit(5)  //查询5条
db.beyond.find().skip(10)  //跳过多少条
db.beyond.find().limit(5).skip(10)  //查询10-15的数据
db.beyond.find({$or:[{age: 22}, {age: 25}]})  //或
db.beyond.find({}).count()  //条数
//https://github.com/xiadd/shorthand




db.beyond.disinct('name') //去重
db.beyond.find({})
db.beyond.find()
db.beyond.find()