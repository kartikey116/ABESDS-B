import { MongoClient } from 'mongodb';

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function runUpdate() {
  try {
    // 1. Attempt Connection
    await client.connect();
    console.log("Successfully connected to MongoDB");

    const db = client.db("myDatabase");
    const collection = db.collection("user");

    // 2. Attempt Database Operation
    const result = await collection.updateOne(
      { name: "John" }, 
      { $set: { age: 35 } }
    );

    console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);

  } catch (error) {
    // 3. Centralized Error Handling
    // This catches connection errors, query errors, and syntax errors
    console.error("Critical Error:", error.message);

    if (error.code === 'ECONNREFUSED') {
      console.error("Check if your MongoDB server is actually running!");
    }
  } finally {
    // 4. Cleanup
    // This runs whether the try succeeded OR the catch ran
    await client.close();
    console.log("Connection closed.");
  }
}

runUpdate();