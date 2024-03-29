import { MongoClient } from 'mongodb'
import fs from 'fs'

async function populateDB() {
    const connectionString =
        'mongodb://otto:ottopass@129.241.104.136:27017/MealsDB?authSource=admin' // Now I know some people might not consider this quite secure, but this isn't a security course
    const dbName = 'MealsDB' // Replace with your database name
    const collectionName = 'meals'
    const filePath = './all_meals_cleaned_no_numbers.json' // Replace if necessary

    try {
        // Read the JSON file
        const fileContent = await fs.promises.readFile(filePath, 'utf8')

        const data = JSON.parse(fileContent)

        // Connect to the MongoDB database
        const client = await MongoClient.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        const db = client.db(dbName)

        // Insert data into the collection
        const result = await db.collection(collectionName).insertMany(data) // Ensure 'data' is an array of objects
        console.log(`${result.insertedCount} documents were inserted`)

        // Close the connection
        client.close()
    } catch (err) {
        console.error('An error occurred:', err)
    }
}

populateDB()
