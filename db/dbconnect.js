import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {

    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI,{
        usenewUrlParser: true,
        useUnifiedTopology:true
    })

    connection.isConnected = db.connections[0].readState;
}

export default dbConnect;