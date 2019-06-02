var Scales = /** @class */ (function () {
    function Scales(scoreType) {
        this.items = scoreType;
    }
    Scales.prototype.addItem = function (item) {
        this.items.addItem(item);
    };
    ;
    Scales.prototype.getItem = function (index) {
        return this.items.getItem(index);
    };
    ;
    Scales.prototype.getCount = function () {
        return this.items.getCount();
    };
    ;
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        var itemslength = this.items.getCount();
        for (var i = 0; i < itemslength; i++) {
            var getIndex = this.items.getItem(i);
            sum += getIndex.getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var allName = [];
        var itemslength = this.items.getCount();
        for (var i = 0; i < itemslength; i++) {
            var getIndex = this.items.getItem(i);
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
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage(_name) {
        this.name = _name;
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        if (!localStorage[this.name]) {
            var storage = [];
            storage.push(item);
            localStorage[this.name] = JSON.stringify(storage);
        }
        else {
            var storage = JSON.parse(localStorage.getItem(this.name));
            storage.push(item);
            localStorage[this.name] = JSON.stringify(storage);
        }
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var storage = JSON.parse(localStorage.getItem(this.name));
        return storage[index];
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var storage = JSON.parse(localStorage.getItem(this.name));
        return storage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
/*
Object.defineProperty(Object.prototype, 'getScale', {
    get: function() {
        return this.scale;
    }
});

Object.defineProperty(Object.prototype, 'getName', {
    get: function() {
        return this.name;
    }
});*/
Object.prototype.getName = function () {
    return this.name;
};
Object.prototype.getScale = function () {
    return this.scale;
};
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
var prod1 = new Product('one', 25);
var prod2 = new Product('two', 35);
var prod3 = new Product('three', 45);
var scaleArray = new ScalesStorageEngineArray();
var arrayScale = new Scales(scaleArray);
arrayScale.addItem(prod1);
arrayScale.addItem(prod2);
arrayScale.addItem(prod3);
console.log('Общий вес по массиву: ' + arrayScale.getSumScale());
console.log("Наименования товаров по массиву: " + arrayScale.getNameList());
var scalesLocalStorage = new ScalesStorageEngineLocalStorage("score");
var localStorageScale = new Scales(scalesLocalStorage);
localStorageScale.addItem(prod1);
localStorageScale.addItem(prod2);
console.log('Общий вес по localStorage: ' + localStorageScale.getSumScale());
console.log("Наименования товаров по localStorage: " + localStorageScale.getNameList());
