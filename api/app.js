import express from 'express';
import router from './routes/postRoute.js';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(router);

export default app;