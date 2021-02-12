import { WebClient, LogLevel } from '@slack/web-api';
import { createEventAdapter, SlackEventAdapter } from '@slack/events-api';
import { createMessageAdapter, SlackMessageAdapter } from '@slack/interactive-messages';
import {mencion} from '../controllers/slack';

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET || '';

class slackService {

    WebClient: WebClient;
    slackEvents: SlackEventAdapter;
    slackInteractions: SlackMessageAdapter;
    token = 'xoxb-1048445467270-1728836818599-smr69fhm9fFjSoIBichlX03x';

    constructor() {
        this.WebClient = new WebClient(this.token, {logLevel: LogLevel.WARN});
        this.slackEvents = createEventAdapter(slackSigningSecret);
        this.slackInteractions = createMessageAdapter(slackSigningSecret);

        this.setupListeners();
    }

    public getSlackEvents() : SlackEventAdapter {
        return this.slackEvents;
    }

    public getSlackInteractions() : SlackMessageAdapter {
        return this.slackInteractions;
    }

    public getWebClient() : WebClient {
        return this.WebClient;
    }

    private setupListeners() {
        this.slackEvents.addListener('app_mention', mencion);
    }
    
}

const service: slackService = new slackService();

export {service};