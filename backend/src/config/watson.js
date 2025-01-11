const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
require('dotenv').config();

const assistant = new AssistantV2({
  version: process.env.IBM_WATSON_VERSION,
  authenticator: new IamAuthenticator({ apikey: process.env.IBM_WATSON_APIKEY }),
  serviceUrl: process.env.IBM_WATSON_URL
});

module.exports = assistant;
