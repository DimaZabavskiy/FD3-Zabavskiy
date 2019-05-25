
class Scales {

    addedProducts:Array<{name:string,scale:number}>;

    constructor() {
        this.addedProducts= [];
    }

    add(prod:{name:string,scale:number}):void {
        this.addedProducts.push(prod);
    }

    getSumScale():void {
        let sum:number = 0;
        for (let i:number = 0; i < this.addedProducts.length; i++) {
            sum += this.addedProducts[i].scale;
        }
        console.log('Общий вес продуктов на весах: ' + sum);
    }

    getNameList():void {
        let allName:Array<string> = [];
        for (let i:number = 0; i < this.addedProducts.length; i++) {
            allName.push(this.addedProducts[i].name);
        }
        console.log("Перечень всех продуктов на весах: " + allName);
    }

}

class Product {

    name: string;
    scale: number;

    constructor(_name: string, _scale: number) {
        this.name = _name;
        this.scale = _scale;
    }
    
    getScale():void {
        console.log('Вес продукта ' + this.name + ': ' + this.scale);
    }

    getName():void {
        console.log("Название продукта: " + this.name);
    }

}

class Apple extends Product {

    static applesScale: number = 0;
    static applesNames: Array<string> = [];

    constructor(_name: string, _scale: number) {
        super(_name, _scale); 
        Apple.applesScale += this.scale;
        Apple.applesNames.push(this.name);
    }
    
    getScale():void {
        super.getScale();
        console.log('Вес всех Apples: ' + Apple.applesScale);
    }
    
    getName():void {
        super.getName();
        console.log("Все сорты Apples: " + Apple.applesNames);
    }

}

class Tomato extends Product {

    static tomatoesScale: number = 0;
    static tomatoesNames: Array<string> = [];

    constructor(_name: string, _scale: number) {
        super(_name, _scale); 
        Tomato.tomatoesScale += this.scale;
        Tomato.tomatoesNames.push(this.name);
    }
    
    getScale():void {
        super.getScale();
        console.log('Вес всех Tomatoes: ' + Tomato.tomatoesScale);
    }
    
    getName():void {
        super.getName();
        console.log("Все сорты Tomatoes: " + Tomato.tomatoesNames);
    }

}

console.log('Накинем яблочек:');
let apple1:Apple = new Apple ('Северный синап', 300);
let apple2:Apple = new Apple ('Мельба', 100);
let apple3:Apple = new Apple ('Богатырь', 500);
apple3.getScale();
apple3.getName();

console.log('А теперь время томата:');
let tomato1:Apple = new Tomato ('Снежный барс', 200);
let tomato2:Apple = new Tomato ('Гаспачо', 600);
let tomato3:Apple = new Tomato ('Даренка', 400);
tomato3.getScale();
tomato3.getName();

console.log('Итого на весах:')
let scale: Scales = new Scales();
scale.add(apple1);
scale.add(apple2);
scale.add(apple3);
scale.add(tomato1);
scale.add(tomato2);
scale.add(tomato3);
scale.getSumScale();
scale.getNameList();