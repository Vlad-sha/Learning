class KVDatabase {
    private db: Map<string, string> = new Map();
    save(key : string, value : string) {
        this.db.set(key,value);
    }
}

class PersistendDB {
    savePersistend (data : Object) {
        console.log(data);
    }
}

class PersistendDBAdapter extends KVDatabase {
    constructor(public database : PersistendDB) {
        super();
    }

    override save(key: string, value: string): void {
        this.database.savePersistend({key,value});
    }
}

function run(base : KVDatabase){
    base.save('key','myValue');
};

run(new PersistendDBAdapter(new PersistendDB));