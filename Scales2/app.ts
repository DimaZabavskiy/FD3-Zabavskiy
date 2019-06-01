
class Scales {

    addedProducts:Array<IScalable>;

    constructor() {
        this.addedProducts= [];
    }

    add(prod: IScalable):void {
        this.addedProducts.push(prod);
    }

    getSumScale():number {
        let sum:number = 0;
        for (let i:number = 0; i < this.addedProducts.length; i++) {
            sum += this.addedProducts[i].getScale();
        }
        return sum;
    }

    getNameList():Array<string>  {
        let allName:Array<string> = [];
        for (let i:number = 0; i < this.addedProducts.length; i++) {
            allName.push(this.addedProducts[i].getName());
        }
        return allName;
    }

}

interface IScalable {

    getScale():number;
    getName():string;

}

class Apple implements IScalable {
    
    name: string;
    scale: number;

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

class Tomato implements IScalable {

    name: string;
    scale: number;

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

let apple1:Apple = new Apple ('Северный синап', 300);
let apple2:Apple = new Apple ('Мельба', 100);
let apple3:Apple = new Apple ('Богатырь', 500);

let tomato1:Tomato = new Tomato ('Снежный барс', 200);
let tomato2:Tomato = new Tomato ('Гаспачо', 600);
let tomato3:Tomato = new Tomato ('Даренка', 400);

let scale: Scales = new Scales();
scale.add(apple1);
scale.add(apple2);
scale.add(apple3);
scale.add(tomato1);
scale.add(tomato2);
scale.add(tomato3);
console.log('Общий вес продуктов на весах: ' + scale.getSumScale());
console.log("Названия всех продуктов на весах: " + scale.getNameList());