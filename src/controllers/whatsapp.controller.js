const whatsappService = require("./../services/whatsapp.services");

async function enviarMensaje(req, res){

    console.log("Entro Al Controller"); //............
    try {
        const{numero, mensaje} = req.body;

        if (!numero || !mensaje) {
            return res.status(400).json({success: false, error: "Debes enviar un número"})
        }

        //procesar mensaje
        const response = await whatsappService.enviarMensajeWhatsapp(numero, mensaje);
        console.log(response);
        return res.status(200).json({success: true, data: response});

    } catch (error) {

        console.log("Error potente")
        console.log(error.response?.data);
        return res.status(500).json({success: false, error: error.message});
    }


}

module.exports = {
    enviarMensaje
}