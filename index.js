import app from "./app.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const PORT=process.env.PORT|| 8000


const CONNECTION_URL=`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.uiqadfz.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
   .then(()=>app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`)
   })).catch((error)=>console.log(error.message))