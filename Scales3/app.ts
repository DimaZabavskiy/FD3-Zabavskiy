interface IStorageEngine {
    addItem(item:Array<object>):void;
    
    getItem(index:number):object;
    
    getCount():number;
}

class Scales <StorageEngine extends IStorageEngine> {

    items: StorageEngine[];

    constructor() {
        this.items=[];
    }

    getSumScale(type:StorageEngine):number {
        let sum:number = 0;
        let typelength = type.getCount();
        for (let i:number = 0; i < typelength; i++) {
            let getIndex = type.getItem(i);
            sum += getIndex.getScale();
        }

        return sum;
    }

    getNameList(type:StorageEngine):Array<string> {
        let allName:Array<string> = [];
        let typelength = type.getCount();
        for (let i:number = 0; i < typelength; i++) {
            let getIndex = type.getItem(i);
            allName.push(getIndex.getName());
        }
        return allName;
    }

}

class ScalesStorageEngineArray implements IStorageEngine {
    items:Array<object>;
    constructor() {
        this.items = [];
    }

    addItem (item:Array<object>):void {
        this.items.push(item);
    }

    getItem (index:number):object {
        return this.items[index];
    }

    getCount ():number {
        return this.items.length;
    }

}

class Product {

    private name: string;
    private scale: number;

    constructor(_name: string, _scale: number) {
        this.name = _name;
        this.scale = _scale;
    }

    getScale():number {
        return this.scale;
    }

    getName():string {
        return this.name;
    }

}

let q = new Product('qwerty', 25);
let a = new Product('qwerty', 35);
let z = new Product('qwerty', 45);
let w = new ScalesStorageEngineArray();
w.addItem(q);
w.addItem(a);
w.addItem(z);
let c = new Scales<ScalesStorageEngineArray>();
console.log(c.getSumScale(w));
console.log('hello');
