import MongoClient from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

MongoClient.connect(url).then(function(err,db){
    db.collection("user").updateOne({name:"John"}, {$set:{age:30}});
}).catch(error => {        
    console.log(error);
});

// import { MongoClient } from "mongodb";

// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

// // In Promises, we don't pass 'err' into .then()
// client.connect()
//   .then((connectedClient) => {
//     console.log("Connected successfully");
    
//     // You must specify the database name
//     const db = connectedClient.db("myDatabase"); 
    
//     // Return the promise so we can chain the next .then()
//     return db.collection("user").updateOne(
//       { name: "John" }, 
//       { $set: { age: 30 } }
//     );
//   })
//   .then((result) => {
//     console.log("Update successful:", result.modifiedCount);
//   })
//   .catch((error) => {
//     // ALL errors (connection, collection, or update) end up here
//     console.error("An error occurred:", error.message);
//   })
//   .finally(() => {
//     // Close the connection regardless of success or failure
//     client.close();
//   });