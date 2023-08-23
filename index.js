// lib
import express from 'express';
import 'dotenv/config';
import bodyParser from "body-parser";
import cors from 'cors';
// app
import config from './src/config';
import auth from './src/controller/auth';
import users from './src/controller/users';
import {requestLogger} from "./src/middleware";

const app = express();

const appEnv = config.appEnv;

// import packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));

// import middleware
app.use(requestLogger);

// import routes
app.use('/api/auth', auth);
app.use('/api/users', users);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/healthcheck', (req, res) => {
    res.send({ status: 'ok' });
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});