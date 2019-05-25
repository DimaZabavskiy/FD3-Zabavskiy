var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            sum += this.addedProducts[i].scale;
        }
        console.log('Общий вес продуктов на весах: ' + sum);
    };
    Scales.prototype.getNameList = function () {
        var allName = [];
        for (var i = 0; i < this.addedProducts.length; i++) {
            allName.push(this.addedProducts[i].name);
        }
        console.log("Перечень всех продуктов на весах: " + allName);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        console.log('Вес продукта ' + this.name + ': ' + this.scale);
    };
    Product.prototype.getName = function () {
        console.log("Название продукта: " + this.name);
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        var _this = _super.call(this, _name, _scale) || this;
        Apple.applesScale += _this.scale;
        Apple.applesNames.push(_this.name);
        return _this;
    }
    Apple.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
        console.log('Вес всех Apples: ' + Apple.applesScale);
    };
    Apple.prototype.getName = function () {
        _super.prototype.getName.call(this);
        console.log("Все сорты Apples: " + Apple.applesNames);
    };
    Apple.applesScale = 0;
    Apple.applesNames = [];
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        var _this = _super.call(this, _name, _scale) || this;
        Tomato.tomatoesScale += _this.scale;
        Tomato.tomatoesNames.push(_this.name);
        return _this;
    }
    Tomato.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
        console.log('Вес всех Tomatoes: ' + Tomato.tomatoesScale);
    };
    Tomato.prototype.getName = function () {
        _super.prototype.getName.call(this);
        console.log("Все сорты Tomatoes: " + Tomato.tomatoesNames);
    };
    Tomato.tomatoesScale = 0;
    Tomato.tomatoesNames = [];
    return Tomato;
}(Product));
console.log('Накинем яблочек:');
var apple1 = new Apple('Северный синап', 300);
var apple2 = new Apple('Мельба', 100);
var apple3 = new Apple('Богатырь', 500);
apple3.getScale();
apple3.getName();
console.log('А теперь время томата:');
var tomato1 = new Tomato('Снежный барс', 200);
var tomato2 = new Tomato('Гаспачо', 600);
var tomato3 = new Tomato('Даренка', 400);
tomato3.getScale();
tomato3.getName();
console.log('Итого на весах:');
var scale = new Scales();
scale.add(apple1);
scale.add(apple2);
scale.add(apple3);
scale.add(tomato1);
scale.add(tomato2);
scale.add(tomato3);
scale.getSumScale();
scale.getNameList();
