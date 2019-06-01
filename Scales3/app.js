var Scales = /** @class */ (function () {
    function Scales() {
        this.items = [];
    }
    Scales.prototype.getSumScale = function (type) {
        var sum = 0;
        var typelength = type.getCount();
        for (var i = 0; i < typelength; i++) {
            var getIndex = type.getItem(i);
            sum += getIndex.getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function (type) {
        var allName = [];
        var typelength = type.getCount();
        for (var i = 0; i < typelength; i++) {
            var getIndex = type.getItem(i);
            allName.push(getIndex.getName());
        }
        return allName;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    return ScalesStorageEngineArray;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var q = new Product('qwerty', 25);
var a = new Product('qwerty', 35);
var z = new Product('qwerty', 45);
var w = new ScalesStorageEngineArray();
w.addItem(q);
w.addItem(a);
w.addItem(z);
var c = new Scales();
console.log(c.getSumScale(w));
console.log('hello');
