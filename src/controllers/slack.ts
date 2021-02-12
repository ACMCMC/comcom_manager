import slackService from '../services/slackService';

function mencion(args: any) {
    console.log(args);
    slackService.getWebClient().chat.postMessage({channel: args["channel"], text: 'Hola!'});
}

export {mencion};