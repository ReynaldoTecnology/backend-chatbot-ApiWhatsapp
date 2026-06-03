const whatsappService = require("./../services/whatsapp.services");

async function enviarMensaje(req, res){

    try {
        const{numero, mensaje} = req.body;

        if (!numero || !mensaje) {
            return res.status(400).json({success: false, error: "Debes enviar un número"})
        }

        //procesar mensaje
        const response = await whatsappService.enviarMensajeWhatsapp(numero, mensaje);

    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, error: error.message});
    }


}

module.exports = {
    enviarMensaje
}