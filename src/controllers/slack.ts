import {service} from '../services/slackService';
import { vistasBienvenida } from '../resources/views';
import { ActionHandler, Respond } from '@slack/interactive-messages';

function mencion(args: any) {
    service.getWebClient().chat.postMessage({channel: args['channel'], text: 'Hola!'});
}

function hablarConBot(args: any) {
    service.getWebClient().chat.postMessage({channel: args['channel'], text: 'Hola! Soy el bot de gestión del Comité de Comunicación (ComCom). Para solicitar que difundamos un evento, utiliza el acceso directo /enviar_evento.'});
}

function bienvenida(args: any) {
    service.getWebClient().views.publish({view: vistasBienvenida, user_id: args['user']});
}

function enviarEvento(payload: any, respond: Respond): any {
    console.log(payload);
    respond({ text: 'Hola!', response_type: 'ephemeral' });
    return 'Prueba';
}

export { mencion, enviarEvento, hablarConBot, bienvenida };