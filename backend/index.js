const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
require('dotenv').config();

app.get('/', (req , res) => {
    res.send('Server pashet!');
});

app.use(cors());
app.use(express.json());

app.use('/api/auth' , require('./routes/authRoutes'));

app.listen(PORT , () =>{
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`)
});