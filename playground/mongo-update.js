const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },
(err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');



//db.collection('Todos').findOneAndUpdate(filter, update, options,callback) //or return promise
    // db.collection('Todos').findOneAndUpdate({text:'Go for walk'},{
    //     $set:{completed:true}},{returnOriginal:false}).then((result) => {
    //         console.log(result);
    //     },(err) =>{
    //         console.log('Some Error');
    // })

    db.collection('Users').findOneAndUpdate({_id:new ObjectID('5c59e81d1762fc19308911fb')},{
        $set:{name:'Menka'},
        $inc:{age:45}
    }, {returnOriginal:false}).then((result) => {
        console.log(result);
    });

    //client.close();


});