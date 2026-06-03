const axios = require("axios");
const whatsappUrl = "https://graph.facebook.com/v25.0/1171096022745217/messages"
const headers = {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json"
}

//Función para recibir los datos del proveedor
async function sendMessage(number, messageData){
    const payload = builPayload();  //función para evitarla redundancia de datos
    const respuesta = await axios.post(whatsappUrl, payload, {headers});
    return respuesta.data;
}

async function builPayload(to, data) {
    
    const base = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": to
    }

    switch (data.type) {
            case 'text':
                return {...base, type: "text", "text": {body: data.body}}

             case 'image':
                return {...base, type: "image", "image": {link: data.link, caption: data.caption}}    
            default:
                break;
    }
    
}


module.exports = {
    sendMessage          
}