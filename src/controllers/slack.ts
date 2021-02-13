import {service} from '../services/slackService';
import { vistasBienvenida } from '../resources/views';

function mencion(args: any) {
    service.getWebClient().chat.postMessage({channel: args['channel'], text: 'Hola!'});
}

function hablarConBot(args: any) {
    service.getWebClient().chat.postMessage({channel: args['channel'], text: 'Hola! Soy el bot de gestión del Comité de Comunicación (ComCom). Para solicitar que difundamos un evento, utiliza el acceso directo /enviar_evento.'});
}

function bienvenida(args: any) {
    service.getWebClient().views.publish({view: vistasBienvenida, user_id: args['user']});
}

function enviarEvento(args: any) {
    console.log('Enviar evento');
}

export { mencion, enviarEvento, hablarConBot, bienvenida };