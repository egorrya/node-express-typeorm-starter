import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import 'reflect-metadata';

import { AppDataSource } from './data-source';

const app = express();
const port = process.env.PORT;

AppDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!');
	})
	.catch((err: Error) => {
		console.error('Error during Data Source initialization', err);
	});

app.get('/', (req, res) => {
	res.send('Welcome, Space Cowboy!');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
