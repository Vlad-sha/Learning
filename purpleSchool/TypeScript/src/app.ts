class Notify {
    send(template : string, to : string) {
        console.log(`отправляю ${template} : ${to}`)
    }
}

class Log {
    log (message : string) {
        console.log(message)
    }
}

class Template {
    private template = [
        {
            name : 'other',
            template : '<h1>Шаблон</h1>'
        }
    ];

    getByName (name : string) {
        return this.template.find(n => n.name === name);
    }
}

class NotificationFacade {
    private notify : Notify;
    private logger : Log;
    private template : Template;

    constructor() {
        this.notify = new Notify();
        this.template = new Template();
        this.logger = new Log();
    }

    send(to : string, templateName : string) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log('не найден шаблон');
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log('шаблон отправлен');
    }
}

const s = new NotificationFacade();
s.send('dadas', 'other');