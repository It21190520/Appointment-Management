const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const appointmentRoutes = require('./routes/appointments');

//app middleware
app.use(bodyParser.json());

app.use(cors());
//route middleware
app.use(appointmentRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://u:u123@cluster0.uioh2zd.mongodb.net/';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');

})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);    
});