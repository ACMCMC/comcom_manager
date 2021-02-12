import { WebClient, LogLevel } from "@slack/web-api";

const slackClient: WebClient = new WebClient('xoxb-1048445467270-1728836818599-smr69fhm9fFjSoIBichlX03x', {logLevel: LogLevel.WARN});

export = slackClient;