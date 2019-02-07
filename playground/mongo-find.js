const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if(err)
        return console.log('Unable to connect to Mongo Server');
    console.log('Connected with server at 27017');

    const db = client.db('TodoApp');

    
    db.collection('Todos').find({_id: new ObjectID('5c59e44e0e8bf61e0071d991')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs));
        console.log();
    },(err) => {
        console.log('Unable to fetch Todos ',err)
    });

    

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs));
        console.log();
    },(err) => {
        console.log('Unable to fetch Todos ',err)
    });

    

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count : ',count);
        console.log();
    });

    db.collection('Users').find({name:'Ashraf'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs));
        console.log()
    },(err) => {
        console.log('Unable to fetch users collection : ',err);
    });

    client.close();
});