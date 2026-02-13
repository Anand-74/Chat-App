import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'; 
dotenv.config();
 
const app = express();
const port = process.env.PORT;

import messageRoutes from './routes/message.route.js';
import authRoute from './routes/auth.route.js';
import { connectdb } from './lib/db.js';

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/message',messageRoutes);

app.listen(port, () =>  {
  console.log(`Server is running on port ${port}`);
  connectdb();
});