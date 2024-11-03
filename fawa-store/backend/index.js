const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/router')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.ORIGIN,
    credentials: true,
};

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());


app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
