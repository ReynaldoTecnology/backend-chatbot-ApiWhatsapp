
async function enviarMensaje(){
    const response = await fetch("https://graph.facebook.com/v25.0/1171096022745217/messages",
        {
            method: 'POST',
            headers: {
                Authorization: 'Bearer EAAXhwkLkgmkBRmE7apRdWD9wanTXUrE12xDb5HmAicfhho0kjJ2zLn8bbZBKMHUD6kRZBZCXxTQN5Yh55XmkugFbPGyKaATDxoHGLUeUr6d91gfqVtffb15JjRhZA0QW8gwgTLsi1u36ofEBKGXbsLXy4vbJHIBwYee8pRIEFa1Yu5hdwvhy4pwxzeYgbc4OAE9taoJv0Mtyp8gYDZBLtu4sgrZCXXfZC6LpUXaSAuyRyN0xGZAFNeNeajPHuwjBc5DJ68gSZC273jvOhoKBZCTHmrTP8YpOt1zQaHMkPsIBsZD',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "messaging_product": "whatsapp",
                "to": "51997327825", 
                "type": "template", 
                "template": {
                    "name": "hello_world", 
                    "language": { 
                        "code": "en_US" 
                    } 
                } 
            })
        });
}


enviarMensaje();