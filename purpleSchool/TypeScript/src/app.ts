interface Observer {
    update (subject :Subject) : void;
}

interface Subject {
    attach(observer : Observer) : void;
    detach(observer : Observer) : void;
    notify() : void;
}

class Lead {
    constructor(public name : string, public phone : number ) {}
}

class NewLead implements Subject {
    private observers : Observer[] =[];
    public state : Lead;

    attach(observer: Observer): void {
        if (this.observers.includes(observer)) {
            return
        } else {
            this.observers.push(observer);
        }
    }
    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        } else {
            this.observers.splice(observerIndex,1);
        }
    }
    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

class NotificationService implements Observer {
    update(subject: Subject): void {
        console.log(`Notification Service получил уведомление`);
        console.log(subject);
    }
}

class LeadService implements Observer {
    update(subject: Subject): void {
        console.log(`Leasd Service получил уведомление`);
        console.log(subject);
    }
}

const subject = new NewLead();
subject.state = new Lead('Всеволод', 9953429564);
const s1 = new NotificationService();
const s2 = new LeadService();

subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();