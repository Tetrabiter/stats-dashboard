require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');


app.get('/', (req , res) => {
    res.send('Server pashet!');
});

app.use(cors());
app.use(express.json());

app.use('/api/auth' , authRoutes);
app.use('/api/protected' , protectedRoutes);

app.listen(PORT , () =>{
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`)
});