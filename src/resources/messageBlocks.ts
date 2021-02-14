import { KnownBlock } from '@slack/web-api';

const mensajeSolicitudPublicacion: KnownBlock[] = [
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "¡Hola, canal! Soy el *Gestor de ComCom*. \n X me ha pedido publicar el evento _dasd_. Genial!"
        }
    },
    {
        "type": "divider"
    },
    {
        "type": "actions",
        "elements": [
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Saber más sobre el proceso",
                    "emoji": true
                },
                "value": "click_me_123"
            },
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Contactar con ComCom",
                    "emoji": true
                },
                "value": "click_me_123",
                "url": "https://google.com"
            }
        ]
    }
];

export { mensajeSolicitudPublicacion };