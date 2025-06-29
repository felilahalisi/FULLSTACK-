require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI )
    .then(() => console.log('Terhubung ke MongoDB'))

    app.use(bodyParser.json());

const mahasiswaRouter = require('./routes/mahasiswa');
app.use('/mahasiswa', mahasiswaRouter);
app.listen(PORT, () => console.log(`Server berjalan di port${PORT}`));
