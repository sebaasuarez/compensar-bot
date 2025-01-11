# Chatbot v1.0

Este proyecto consiste en un **chatbot** en **Angular** (Front-End) que se comunica con un **Back-End** en **Node.js** para conectarse a **IBM Watson** y responder mensajes de los usuarios.

---

## 1. Requisitos Previos

- **Node.js** (versión 20.10.0).  
- **Angular CLI** (versión 16+).  
- **Cuenta de IBM Cloud** con un **servicio Watson Assistant** configurado.

---

## 2. Estructura de Carpetas

- **`frontend/`**: Contiene todo el código de Angular.  
- **`backend/`**: Contiene el proyecto de Node.js con Express.

---

## 3. Ejecución del Front-End (Angular)

1. **Instalar dependencias**  
   ```bash
   cd frontend
   npm install

2. **Iniciar la aplicación**  
    ```bash
    ng serve -o

---

## 4. Ejecución del Back-End (Node.js + Express)

1.	**Variables de entorno** (.env)
En la carpeta backend/, crea (o edita) tu archivo .env con las credenciales y configuraciones. Ejemplo:
    ```bash
    PORT=3000

    # Credenciales de IBM Watson
    IBM_WATSON_APIKEY=xxxx-xxxx-xxxx-xxxx
    IBM_WATSON_URL=https://api.us-south.assistant.watson.cloud.ibm.com
    IBM_WATSON_ASSISTANT_ID=yyyy-yyyy-yyyy-yyyy
    IBM_WATSON_VERSION=2023-06-14

2. **Instalar dependencias**
    ```bash
    cd backend
    npm install

3. **Instalar el servidor**
    ```bash
    node src/index.js

4.	**Probar en Postman (o similar)**
- Crear sesión: POST http://localhost:3000/api/chatbot/session
- Enviar mensaje: POST http://localhost:3000/api/chatbot/send-message con body JSON:

    ```bash
    {
    "sessionId": "el-session-id-recibido",
    "message": "Hola"
    }

5. **Sección de Accesos / Credenciales**

    1. IBM Cloud
        - Username/Email: miusuario@dominio.com
        - Password: ******** (No exponer públicamente)
        - API Key: Ubicada en .env en IBM_WATSON_APIKEY.

