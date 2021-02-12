import {service} from '../services/slackService';

function mencion(args: any) {
    service.getWebClient().chat.postMessage({channel: args['channel'], text: 'Hola!'});
}

function enviarEvento(args: any) {
    console.log('Enviar evento');
}

export { mencion, enviarEvento };