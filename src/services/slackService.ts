import { WebClient, LogLevel } from '@slack/web-api';
import { createEventAdapter, SlackEventAdapter } from '@slack/events-api';
import {mencion} from '../controllers/slack';

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET || '';

class slackService {

    WebClient: WebClient;
    slackEvents: SlackEventAdapter;
    token = 'xoxb-1048445467270-1728836818599-smr69fhm9fFjSoIBichlX03x';

    constructor() {
        this.WebClient = new WebClient(this.token, {logLevel: LogLevel.WARN});
        this.slackEvents = createEventAdapter(slackSigningSecret);

        this.setupListeners();
    }

    public getSlackEvents() : SlackEventAdapter {
        return this.slackEvents;
    }

    public getWebClient() : WebClient {
        return this.WebClient;
    }

    private setupListeners() {
        this.slackEvents.addListener('app_mention', mencion);
    }
    
}

const service: slackService = new slackService();

export = service;