import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import boxersRoute from './routes/boxersRoute.js'; // Ensure this path is correct
import cors from 'cors';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

// Root route
app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to the Boxing Website');
});

// Boxers routes
app.use('/boxers', boxersRoute);

// Connect to MongoDB and start the server
mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`App is listening on port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});
