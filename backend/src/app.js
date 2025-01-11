require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chatbotRoutes = require('./routes/chatbot.routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    next();
});
  

// Rutas
app.use('/api/chatbot', chatbotRoutes);

// Manejo de errores
app.use((error, req, res, next) => {
  console.error('Error general:', error);
  res.status(error.status || 500).json({
    message: error.message || 'Error en el servidor.'
  });
});

module.exports = app;
