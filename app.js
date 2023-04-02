import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/UserRoute.js'

import cors from 'cors'

const app=express()

// middlewares
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
  methods: ['GET','PUT','DELETE', 'POST', 'PATCH'],
  allowedHeaders: 'Content-Type,Authorization'
}
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }))

app.get("/", (req, res) => {
   res.send("Route is working! YaY!");
   res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
 });

 app.use('/api/v1/auth', userRoute)
 
export default app