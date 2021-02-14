import { View } from '@slack/web-api';

const viewBienvenida: View = {
    "type": "home",
    "blocks": [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "¡Hola <@U01D8K4SB2S>! Soy el *Gestor de ComCom*. Habla conmigo para pedirle al Comité de Comunicación que difundan tus eventos. Tienes dos formas de hacerlo:"
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
                "text": "*2️⃣ Hacer click en el siguiente botón*:"
            }
        },
        {
            "type": "actions",
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Enviar un evento",
                        "emoji": true
                    },
                    "value": "enviar",
                    "action_id": "enviar_evento",
                    "style": "primary"
                }
            ]
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

const viewEnviarEvento: View = {
    "type": "modal",
    "callback_id": "enviar_evento",
    "title": {
        "type": "plain_text",
        "text": "Enviar un evento",
        "emoji": true
    },
    "submit": {
        "type": "plain_text",
        "text": "Enviar",
        "emoji": true
    },
    "close": {
        "type": "plain_text",
        "text": "Cancelar",
        "emoji": true
    },
    "blocks": [
        {
            "type": "input",
            "element": {
                "type": "plain_text_input",
                "action_id": "name-action"
            },
            "label": {
                "type": "plain_text",
                "text": "Nombre del evento",
                "emoji": true
            }, 
            "block_id": "name"
        },
        {
            "type": "input",
            "element": {
                "type": "datepicker",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Select a date",
                    "emoji": true
                },
                "action_id": "date-action"
            },
            "label": {
                "type": "plain_text",
                "text": "Fecha",
                "emoji": true
            }, 
            "block_id": "date"
        },
        {
            "type": "input",
            "optional": true,
            "element": {
                "type": "plain_text_input",
                "multiline": true,
                "action_id": "description-action"
            },
            "label": {
                "type": "plain_text",
                "text": "Descripción adicional",
                "emoji": true
            }, 
            "block_id": "description"
        },
        {
            "type": "input",
            "element":
            {
                "type": "conversations_select",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Seleccionar...",
                    "emoji": true
                },
                "action_id": "contact-action",
                "default_to_current_conversation": true,
                "response_url_enabled": true
            },
            "label": {
                "type": "plain_text",
                "text": "Canal de contacto",
                "emoji": true
            }, 
            "block_id": "contact"
        }
    ]
};

const vista_info_publicacion: View = {
    "type":"modal",
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "¡Hola, canal! Soy el *Gestor de ComCom*. \n X me ha pedido publicar el evento _dasd_. Genial!"
			}
		},
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "Proceso de publicación de evento",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "1️⃣ ComCom revisará la solicitud de publicación y emitirá una decisión."
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "✅ En caso de que la difusión sea viable, lo comunicaré al momento, en este canal."
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "❎ En caso de que ComCom no pueda realizar la difusión, también informaré de la decisión."
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
						"text": "Farmhouse",
						"emoji": true
					},
					"value": "click_me_123"
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Kin Khao",
						"emoji": true
					},
					"value": "click_me_123",
					"url": "https://google.com"
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Ler Ros",
						"emoji": true
					},
					"value": "click_me_123",
					"url": "https://google.com"
				}
			]
		}
	]
};

export { viewBienvenida, viewEnviarEvento };