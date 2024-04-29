import express from 'express';
import { connect } from 'mongoose';
import { failureResponse } from '../User/utils/responseHelper.js';


import router from './routes/route.js';

const app = express();
app.use(express.json());
app.use('/user', router);
try {
  await connect('mongodb+srv://saquib:Saquib123@mohammadsaquib.f3sxbno.mongodb.net/washing', { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
} catch (error) {
 
  failureResponse(error.message)
}
