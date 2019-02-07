//const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb'); //object destrucuring es6 property

// var obj  = new ObjectID();    to create our own object id _id
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },
(err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    //const TodoApp = db.db('TodoApp')
    
    // const db = client.db('TodoApp');   //this value of constanst we use with .collection
    // console.log('786');
    // db.collection('Todos').insertOne({ 
    //     text : 'something to do',
    //     completed : false

    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to inset Todo ', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops,undefined,2));
    //     });

    const db = client.db('TodoApp');
    db.collection('Users').insertOne({
        name : 'Akshay',
        age :25,
        location : "A-204 Aura Apartment"
    }, (err, result) => {
        if(err)
            return console.log('Errror occured ',err);
        console.log(JSON.stringify(result.ops,undefined,2))
    });

    client.close();
});
