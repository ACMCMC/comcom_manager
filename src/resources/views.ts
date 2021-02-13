import { View } from '@slack/web-api';

const vistasBienvenida: View = {
    type: 'home',

    "blocks": [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "¡Hola! Soy el *Gestor de ComCom*. Habla conmigo para pedirle al Comité de Comunicación que difundan tus eventos. Tienes dos formas de hacerlo:"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*1️⃣ Usar el comando `/enviar_evento` *. Este comando puedes usarlo desde cualquier lugar."
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*2️⃣ Hablar directamente conmigo*. Abajo encontrarás un botón que te permite realizar la misma acción que con `/enviar_evento`."
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "context",
            "elements": [
                {
                    "type": "mrkdwn",
                    "text": "👀 Puedes ver otros comandos con `/task list`.\n❓Usa `/task help` para obtener ayuda."
                }
            ]
        }
    ]

};

export { vistasBienvenida };