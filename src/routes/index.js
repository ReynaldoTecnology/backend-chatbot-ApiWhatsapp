const express = require("express");
const whatsappcontroller = require("./../controllers/whatsapp.controller");

const router = express.Router();

router.post("/enviar-mensaje", whatsappcontroller.enviarMensaje);

module.exports = router;