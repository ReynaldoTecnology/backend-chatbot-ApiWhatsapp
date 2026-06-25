const axios = require("axios");
const whatsappUrl = "https://graph.facebook.com/v25.0/1171096022745217/messages"
const headers = {
    Authorization: "Bearer EAAXhwkLkgmkBRgFlAv8h4VuNd7LZAphk1YVdGcjSWYiURaF0JviUL59LsqQ2RZCqZBKjt6ZANQ2yL4e3UOSfpja3VJorFFeM8qtMQAZAJYP2DSbMOqT3G7Cv9g4FNiXQKsRZBmNbZCPfIthDRv3ZCW2KDKYZCpQ9zZAPptG9B5krslFWhhbFRVdXh1f8lfK7mBmU9t7VjLmCet0d0wMdvGvsyriN4OhvgSZBMxBcm8h8s4xd9ZBvRWiZCab7nfMA2buksJZAu3MisGydxG8uKwufkgqb5l1p9OAJxaDMDI7SvcpEcZD",
    "Content-Type": "application/json"
}

//Función para recibir los datos del proveedor
async function sendMessage(number, messageData){

    try {
        
        const payload = builPayload(number, messageData);  //función para evitar la redundancia de datos
        console.log(payload); //Capturar error

        const respuesta = await axios.post(whatsappUrl, payload, {headers});

        return respuesta.data;

        
    } catch (error) {
        
        console.log(error.respuesta?.data);
        throw error; 
    }
    
}

function builPayload(to, data) {
    
    const base = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": to
    }

    switch (data.type) {
            case "text":
                return {...base, type: "text", "text": {body: data.body}}
            case "image":
                return {...base, type: "image", "image": {link: data.link, caption: data.caption}}   
            case "document":
                return {...base, type: "document", "document": {link: data.link, caption: data.caption, filename: data.filename}}     
            case "audio":
                return {...base, type: "audio", "audio": {link: data.link}}     
            case "video":
                return {...base, type: "video", "video": {link: data.link, caption: data.caption}}     
            default:
                throw new Error(`Tipo no soportado: ${data.type}`);

    }
    
}


module.exports = {
    sendMessage          
}