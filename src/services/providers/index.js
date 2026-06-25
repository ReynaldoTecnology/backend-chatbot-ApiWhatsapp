const cloudProvider = require("./whatsappcloud.providers");
const evolutionProvider = require("./evolutionapi.providers");
const provider = 'cloud';

function getWhatsappProviders(){

    switch(provider){
        case 'cloud':
            return cloudProvider;

        case 'evolution':
            return evolutionProvider;

        default:
            throw new Error("Proveedor de whatsap no soportado");

    }
}

module.exports = getWhatsappProviders();
