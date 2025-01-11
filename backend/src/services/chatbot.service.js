// services/chatbot.service.js
const assistant = require('../config/watson');

class ChatbotService {
  constructor() {
    this.assistantId = process.env.IBM_WATSON_ASSISTANT_ID;
    this.environmentId = process.env.IBM_WATSON_ENVIRONMENT;
  }

  // Crea la sesión
  async createSession() {
    console.log('Assistant ID:', this.assistantId);
console.log('Watson URL:', process.env.IBM_WATSON_URL);
console.log('Version:', process.env.IBM_WATSON_VERSION);

    const response = await assistant.createSession({
      assistantId: this.assistantId
    });
    return response.result.session_id;
  }

  // Envía mensajes con sesión (multi-turn)
  async sendMessageToWatson(sessionId, userMessage) {
    const response = await assistant.message({
      assistantId: this.assistantId,
      sessionId,
      environmentId: this.environmentId,
      input: {
        message_type: 'text',
        text: userMessage
      }
    });
    return response.result;
  }
  
  async sendMessageStateless(userMessage) {
    const response = await assistant.messageStateless({
      assistantId: this.assistantId,
      input: {
        message_type: 'text',
        text: userMessage
      }
    });
    return response.result;
  }
}

module.exports = new ChatbotService();
