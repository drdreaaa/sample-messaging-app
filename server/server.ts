import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// import routes
import router from './routes/router';
import authRouter from './routes/authRouter';

dotenv.config();

const app = express();
const port = process.env.PORT || 3007;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // TODO: what is extended?

// use routes
app.use(router);
app.use(authRouter);

app.listen(port, () => {
    console.log(`[server.ts] Server listening at http://localhost:${port}`);
});
