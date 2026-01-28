import express from 'express';

import dotenv from 'dotenv'; 
dotenv.config();

const app = express();
const port = process.env.PORT;

import authRoute from './routes/auth.route.js';
import { connectdb } from './lib/db.js';

app.use('/api/auth',authRoute);

app.listen(port, () =>  {
  console.log(`Server is running on port ${port}`);
  connectdb();
});