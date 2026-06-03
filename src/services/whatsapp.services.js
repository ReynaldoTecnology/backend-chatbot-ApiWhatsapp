const whatsappProviders = require("./providers");

async function enviarMensajeWhatsapp(numero, mensaje) {
    
    return await whatsappProviders.sendMessage(numero, mensaje);
}

module.exports = {
    enviarMensajeWhatsapp
}