// ...
const router = require('express').Router();
const chatbotController = require('../controllers/chatbot.controller');

// Rutas existentes
router.post('/session', chatbotController.createSession);
router.post('/send-message', chatbotController.sendMessage);

// NUEVA RUTA sin sesión
router.post('/message-stateless', chatbotController.sendMessageStateless);

module.exports = router;
