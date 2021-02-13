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
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "plain_text_input-action"
			},
			"label": {
				"type": "plain_text",
				"text": "Nombre del evento",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "datepicker",
				"initial_date": "1990-04-28",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a date",
					"emoji": true
				},
				"action_id": "datepicker-action"
			},
			"label": {
				"type": "plain_text",
				"text": "Fecha",
				"emoji": true
			}
		},
		{
			"type": "input",
            "optional": true,
			"element": {
				"type": "plain_text_input",
				"multiline": true,
				"action_id": "plain_text_input-action"
			},
			"label": {
				"type": "plain_text",
				"text": "Descripción adicional",
				"emoji": true
			}
		}
	]
};

const viewEnviarEventoMenos7Dias: View = {
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
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "plain_text_input-action"
			},
			"label": {
				"type": "plain_text",
				"text": "Nombre del eventoADADSADAS",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "datepicker",
				"initial_date": "1990-04-28",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a date",
					"emoji": true
				},
				"action_id": "datepicker-action"
			},
			"label": {
				"type": "plain_text",
				"text": "Fecha",
				"emoji": true
			}
		},
		{
			"type": "input",
            "optional": true,
			"element": {
				"type": "plain_text_input",
				"multiline": true,
				"action_id": "plain_text_input-action"
			},
			"label": {
				"type": "plain_text",
				"text": "Descripción adicional",
				"emoji": true
			}
		}
	]
};

export { viewBienvenida, viewEnviarEvento };