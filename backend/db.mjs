import mongoose from 'mongoose'

// Function used to connect to the database
export async function connectToDB() {
    try {
        // Attempt to connect to database
        await mongoose.connect(
            'mongodb://otto:ottopass@129.241.104.136:27017/MealsDB?authSource=admin', // connection string
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        console.log('Connected to MongoDB')
    } catch (error) {
        // Throw error if attempt failed
        console.log('Error connecting to MongoDB:', error)
    }
}

connectToDB()
