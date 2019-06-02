interface IStorageEngine {
    addItem(item:IProduct):void;
    
    getItem(index:number):IProduct;
    
    getCount():number;
}
interface IProduct {
    getName():string;
    getScale():number;
}

class Scales <StorageEngine extends IStorageEngine> {

    items: StorageEngine;

    constructor(scoreType:StorageEngine) {
        this.items=scoreType;
    }

    addItem(item:IProduct):void{
        this.items.addItem(item);
    };
    
    getItem(index:number):IProduct{
        return this.items.getItem(index);
    };
    
    getCount():number{
        return this.items.getCount();
    };

    getSumScale():number {
        let sum:number = 0;
        let itemslength = this.items.getCount();
        for (let i:number = 0; i < itemslength; i++) {
            let getIndex = this.items.getItem(i);
            sum += getIndex.getScale();
        }

        return sum;
    }

    getNameList():Array<string> {
        let allName:Array<string> = [];
        let itemslength = this.items.getCount();
        for (let i:number = 0; i < itemslength; i++) {
            let getIndex = this.items.getItem(i);
            allName.push(getIndex.getName());
        }
        return allName;
    }

}

class ScalesStorageEngineArray implements IStorageEngine {
    items:Array<IProduct>;
    constructor() {
        this.items = [];
    }

    addItem (item:IProduct):void {
        this.items.push(item);
    }

    getItem (index:number):IProduct {
        return this.items[index];
    }

    getCount ():number {
        return this.items.length;
    }

}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    
    storage: Array<IProduct>;
    name: string;
    constructor(_name:string) {
        this.name = _name;
        this.storage = [];
    }

    addItem (item:IProduct):void {
        this.storage.push(item);
        localStorage[this.name] = JSON.stringify(this.storage);
    }

    getItem (index:number):IProduct {
        return this.storage[index];
    }

    getCount ():number {
        return this.storage.length;
    }

}

class Product implements IProduct {

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

let prod1 = new Product('one', 25);
let prod2 = new Product('two', 35);
let prod3 = new Product('three', 45);
let scaleArray = new ScalesStorageEngineArray();
let arrayScale = new Scales<ScalesStorageEngineArray>(scaleArray);
arrayScale.addItem(prod1);
arrayScale.addItem(prod2);
arrayScale.addItem(prod3);
console.log('Общий вес по массиву: ' + arrayScale.getSumScale());
console.log("Наименования товаров по массиву: " + arrayScale.getNameList());

let scalesLocalStorage = new ScalesStorageEngineLocalStorage("score");
let localStorageScale = new Scales<ScalesStorageEngineLocalStorage>(scalesLocalStorage);
localStorageScale.addItem(prod1);
localStorageScale.addItem(prod2);
console.log('Общий вес по localStorage: ' + localStorageScale.getSumScale());
console.log("Наименования товаров по localStorage: " + localStorageScale.getNameList());