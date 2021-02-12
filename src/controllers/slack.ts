import {service} from '../services/slackService';

function mencion(args: any) {
    service.getWebClient().chat.postMessage({channel: args['channel'], text: 'Hola!'});
}

function hablarConBot(args: any) {
    service.getWebClient().chat.postMessage({channel: args['channel'], text: 'Hola! Soy el bot de gestión del Comité de Comunicación (ComCom). Para solicitar que difundamos un evento, utiliza el acceso directo /enviar_evento.'});
}

function enviarEvento(args: any) {
    console.log('Enviar evento');
}

export { mencion, enviarEvento, hablarConBot };