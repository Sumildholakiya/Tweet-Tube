import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.error("ERROR" , err);
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is Running On localhost:${process.env.PORT}`);
            
        })
    })
    .catch((err) => {
        console.error(`MONGODB Connection failed !!`, err);

    })