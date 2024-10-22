import mongoose from "mongoose";


export const connectDatabase = () => {
    mongoose.connect("mongodb+srv://suyashgupta:<NcyWcljRbw7pp5hy>@cluster0.9sxnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Database connected successfully...");
    })
    .catch((error) => {
        console.log(error);
    });
}