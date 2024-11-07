const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const sauceRoutes = require('./routes/sauce');
const authRoutes = require('./routes/auth');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Reva:Reva@cluster0.5elfntj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {})
  .then(() => console.log('MongoDB connected!'))
  .catch(error => console.error('MongoDB connection error:', error));

const app = express();

app.use(cors({origin: 'http://localhost:4200'}));

app.use(express.json());

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/sauces', sauceRoutes);
app.use('api/auth', authRoutes);

module.exports = app;