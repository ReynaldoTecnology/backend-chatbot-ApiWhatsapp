const axios = require("axios");
const whatsappUrl = "https://graph.facebook.com/v25.0/1171096022745217/messages"
const headers = {
    Authorization: "Bearer "+process.env.WHATSAPP_ACCESS_TOKEN, //Se instala un paquete para la variable de entorno dotenv
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