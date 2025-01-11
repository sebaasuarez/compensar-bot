// controllers/chatbot.controller.js
const chatbotService = require('../services/chatbot.service');

exports.createSession = async (req, res, next) => {
  try {
    const sessionId = await chatbotService.createSession();
    res.status(200).json({ sessionId });
  } catch (error) {
    next(error);
  }
};

exports.sendMessage = async (req, res, next) => {
  const { sessionId, message } = req.body;

  if (!sessionId || !message) {
    return res.status(400).json({ error: 'Faltan parámetros: sessionId o message.' });
  }

  try {
    const response = await chatbotService.sendMessageToWatson(sessionId, message);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.sendMessageStateless = async (req, res, next) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Falta el message.' });
      }
  
      const response = await chatbotService.sendMessageStateless(message);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
};
