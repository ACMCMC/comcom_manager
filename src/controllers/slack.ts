import slackService from '../services/slackService';

function mencion(args: any) {
    slackService.WebClient.chat.postMessage({channel: args['channel'], text: 'Hola!'});
}

export {mencion};