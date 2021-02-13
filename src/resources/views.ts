import { View } from '@slack/web-api';

const viewBienvenida: View = {
	"type": "home",
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
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "¡Hola! Soy el *Gestor de ComCom*. Habla conmigo para pedirle al Comité de Comunicación que difundan tus eventos. Tienes dos formas de hacerlo:"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>"
			}
		}
	]
};

export { viewBienvenida, viewEnviarEvento };