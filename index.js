// lib
import express from 'express';
import 'dotenv/config';
import bodyParser from "body-parser";
// app
import config from './src/config';
import auth from './src/controller/auth';
import users from './src/controller/users';
import {requestLogger} from "./src/middleware";

const app = express();

const appEnv = config.appEnv;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);

// import routes
app.use('/api/auth', auth);
app.use('/api/users', users);

app.get('/', (req, res) => {
    res.send('halo');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});