var Scales = /** @class */ (function () {
    function Scales() {
        this.addedProducts = [];
    }
    Scales.prototype.add = function (prod) {
        this.addedProducts.push(prod);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.addedProducts.length; i++) {
            sum += this.addedProducts[i].getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var allName = [];
        for (var i = 0; i < this.addedProducts.length; i++) {
            allName.push(this.addedProducts[i].getName());
        }
        return allName;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var apple1 = new Apple('Северный синап', 300);
var apple2 = new Apple('Мельба', 100);
var apple3 = new Apple('Богатырь', 500);
var tomato1 = new Tomato('Снежный барс', 200);
var tomato2 = new Tomato('Гаспачо', 600);
var tomato3 = new Tomato('Даренка', 400);
var scale = new Scales();
scale.add(apple1);
scale.add(apple2);
scale.add(apple3);
scale.add(tomato1);
scale.add(tomato2);
scale.add(tomato3);
console.log('Общий вес продуктов на весах: ' + scale.getSumScale());
console.log("Названия всех продуктов на весах: " + scale.getNameList());
