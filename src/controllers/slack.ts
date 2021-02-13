import { service } from '../services/slackService';
import { viewBienvenida, viewEnviarEvento } from '../resources/views';
import { ActionHandler, Respond } from '@slack/interactive-messages';
import { View } from '@slack/web-api';

function mencion(args: any) {
    service.getWebClient().chat.postMessage({ channel: args['channel'], text: 'Hola!' });
}

function hablarConBot(args: any) {
    service.getWebClient().chat.postMessage({ channel: args['channel'], text: 'Hola! Soy el bot de gestión del Comité de Comunicación (ComCom). Para solicitar que difundamos un evento, utiliza el acceso directo /enviar_evento.' });
}

function bienvenida(args: any) {
    service.getWebClient().views.publish({ view: viewBienvenida, user_id: args['user'] });
}

function enviarEvento(payload: any, respond: Respond): any {
    service.getWebClient().views.open({ trigger_id: payload['trigger_id'], view: viewEnviarEvento });
    /*respond({
        text: "Thanks for your request, we'll process it and get back to you.",
        response_type: "ephemeral"
    }).catch((err) => console.error(err)).then((result) => console.log(result));*/
}

function enviarEventoShortcut(payload: any): any {
    service.getWebClient().views.open({ trigger_id: payload['trigger_id'], view: viewEnviarEvento });
}

function enviarEventoSubmit(payload: View): any {
    console.log("dassa");
    return Promise.resolve({
        "response_action": "errors",
        "errors": {
          "fecha-action": "You may not select a due date in the past"
        }
      });
}

export { mencion, enviarEvento, hablarConBot, bienvenida, enviarEventoShortcut, enviarEventoSubmit };