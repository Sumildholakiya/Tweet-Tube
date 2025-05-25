
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


async function connectDB(){
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb Connected Successfully || DB host :${connectionInstance.connection.host}`);
        
    }catch(err){
        console.error(`ERROR in Connecting db: ${err}`);
    }
}

export default connectDB