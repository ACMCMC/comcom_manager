import { Event } from '../entity/Event';
import { service } from '../services/slackService';
import { viewBienvenida, viewEnviarEvento } from '../resources/views';
import { ActionHandler, Respond } from '@slack/interactive-messages';
import { View, SectionBlock, PlainTextElement } from '@slack/web-api';
import { connection } from '../database/eventsDB';
import {Repository} from 'typeorm';

function mencion(args: any) {
    service.getWebClient().chat.postMessage({ channel: args['channel'], text: 'Hola!' });
}

function hablarConBot(args: any) {
    service.getWebClient().chat.postMessage({ channel: args['channel'], text: 'Hola! Soy el bot de gestión del Comité de Comunicación (ComCom). Para solicitar que difundamos un evento, utiliza el acceso directo /enviar_evento.' });
}

function bienvenida(args: any) {
    var viewModificada = viewBienvenida;
    (<SectionBlock> viewModificada.blocks.find(view => view.type==='section')).text =  <PlainTextElement> ( <unknown> ('¡Hola <@' + args['user'] + '>! Soy el *Gestor de ComCom*. Habla conmigo para pedirle al Comité de Comunicación que difundan tus eventos. Tienes dos formas de hacerlo:'));
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

function enviarEventoSubmit(payload: View): Promise<any> {

    console.log("Conectando, " + connection.isConnected);
    console.log(connection.entityMetadatas);
    const repo: Repository<Event> = connection.getRepository(Event);
    console.log("1");
    repo.findOne(1).then(e => console.log(e)).catch((err) => console.error(err));
    console.log("2");

    return (Promise.resolve({
        "response_action": "errors", "errors": {
            "fecha": "La fecha no puede estar en el pasado"
        }
    }));
}

export { mencion, enviarEvento, hablarConBot, bienvenida, enviarEventoShortcut, enviarEventoSubmit };