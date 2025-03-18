"use strict";
class TelegramProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnected TG');
    }
}
class WhatsAppProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnected WA');
    }
}
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}
class DelayedNotificationSender extends NotificationSender {
    constructor(provider) {
        super(provider);
    }
    sendDelayed() { }
    ;
}
const sender = new NotificationSender(new TelegramProvider);
const sender2 = new NotificationSender(new WhatsAppProvider);
