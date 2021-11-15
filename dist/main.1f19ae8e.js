// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Produkt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Produkt = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Produkt = /*#__PURE__*/function () {
  function Produkt(id, nazwa, model, rok, cena, zuzycieEnergii) {
    _classCallCheck(this, Produkt);

    this.id = id;
    this.nazwa = nazwa;
    this.model = model;
    this.rok = rok;
    this.cena = cena;
    this.zuzycieEnergii = zuzycieEnergii;
  }

  _createClass(Produkt, [{
    key: "koszt",
    value: function koszt() {
      return this.cena + " zł";
    }
  }, {
    key: "kosztEnergii",
    value: function kosztEnergii(cenaEnergii) {
      return Number.parseFloat(this.zuzycieEnergii * cenaEnergii).toFixed(2).toString();
    }
  }, {
    key: "wiekProduktu",
    value: function wiekProduktu() {
      return this.rok.toString();
    }
  }, {
    key: "wiekProduktLata",
    value: function wiekProduktLata() {
      var yearNow = new Date().getFullYear();
      var age = yearNow - this.rok;
      age = age.toString();

      if (age.slice(-1) === 1) {
        return age + " rok";
      } else if (age.slice(-1) >= 2 && age.slice(-1) <= 4) {
        return age + " lata";
      } else {
        return age + " lat";
      }
    }
  }]);

  return Produkt;
}();

exports.Produkt = Produkt;
},{}],"ListaTowarow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListaTowarow = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListaTowarow = /*#__PURE__*/function () {
  function ListaTowarow() {
    _classCallCheck(this, ListaTowarow);

    _defineProperty(this, "lista", new Array());
  }

  _createClass(ListaTowarow, [{
    key: "dodajProdukt",
    value: function dodajProdukt(produkt) {
      //wyjatek jeśli produkt o tym id już jest na liście
      if (this.znajdzProdukt(produkt.id).length == 0) {
        this.lista.push({
          produkt: produkt
        });
      } else {
        throw "Produkt juz istnieje";
      }
    }
  }, {
    key: "zmienProdukt",
    value: function zmienProdukt(idProduktu, Produkt) {
      //znajduje produkt o tym ID i podmienia wszystkie jego składowe wartościami z obiektu produkt
      if (this.znajdzProdukt(idProduktu).length == 0) {
        console.log("Nie znaleziono");
      } else {
        this.lista.forEach(function (element) {
          if (element.produkt.id === idProduktu) {
            element.produkt.nazwa = Produkt.nazwa;
            element.produkt.model = Produkt.model;
            element.produkt.rok = Produkt.rok;
            element.produkt.cena = Produkt.cena;
            element.produkt.zuzycieEnergii = Produkt.zuzycieEnergii;
          }
        });
      }
    }
  }, {
    key: "wypiszProdukt",
    value: function wypiszProdukt(idProduktu) {
      var znaleziony = this.znajdzProdukt(idProduktu);

      if (znaleziony.length == 0) {
        return console.log("Nie znaleziono");
      } else {
        return znaleziony.forEach(function (element) {
          return console.log("ID: " + element.produkt.id + "\nNazwa: " + element.produkt.nazwa + "\nModel: " + element.produkt.model + "\nRok produkcji: " + element.produkt.rok + "\nCena: " + element.produkt.koszt() + "\nZuzycie energii: " + element.produkt.zuzycieEnergii + " kWh");
        });
      }
    }
  }, {
    key: "wypiszWszystkieProdukty",
    value: function wypiszWszystkieProdukty() {
      return this.lista.forEach(function (element) {
        return console.log("ID: " + element.produkt.id + "\nNazwa: " + element.produkt.nazwa + "\nModel: " + element.produkt.model + "\nRok produkcji: " + element.produkt.rok + "\nCena: " + element.produkt.koszt() + "\nZuzycie energii: " + element.produkt.zuzycieEnergii + " kWh");
      });
    }
  }, {
    key: "znajdzProdukt",
    value: function znajdzProdukt(idProduktu) {
      return this.lista.filter(function (element) {
        return element.produkt.id === idProduktu;
      });
    }
  }, {
    key: "stanMagazynu",
    value: function stanMagazynu() {
      return this.lista.forEach(function (element) {
        return console.log("ID: " + element.produkt.id + "\nIlosc: " + element.ilosc + "\nNazwa: " + element.produkt.nazwa + "\nModel: " + element.produkt.model + "\nRok produkcji: " + element.produkt.rok + "\nCena: " + element.produkt.koszt() + "\nZuzycie energii: " + element.produkt.zuzycieEnergii + " kWh");
      });
    }
  }]);

  return ListaTowarow;
}();

exports.ListaTowarow = ListaTowarow;
},{}],"Magazyn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Magazyn = void 0;

var _ListaTowarow2 = require("./ListaTowarow");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Magazyn = /*#__PURE__*/function (_ListaTowarow) {
  _inherits(Magazyn, _ListaTowarow);

  var _super = _createSuper(Magazyn);

  function Magazyn() {
    _classCallCheck(this, Magazyn);

    return _super.apply(this, arguments);
  }

  _createClass(Magazyn, [{
    key: "dodajProdukt",
    value: function dodajProdukt(produkt, ilosc) {
      //oprócz samego produktu będzie zawierała ilość sztuk, które zostają dane
      if (this.znajdzProdukt(produkt.id).length == 0) {
        this.lista.push({
          produkt: produkt,
          ilosc: ilosc
        });
      } else {
        throw "Produkt juz istnieje";
      }
    }
  }, {
    key: "zabierzProdukt",
    value: function zabierzProdukt(produkt, ilosc) {
      if (this.znajdzProdukt(produkt.id).length == 0) {
        console.log("Produkt nie istnieje.");
      } else {
        for (var i = 0; i < this.lista.length; i++) {
          if (this.lista[i].produkt.id === produkt.id && this.lista[i].ilosc >= ilosc) {
            this.lista[i].ilosc -= ilosc;
          }
        }
      }
    }
  }]);

  return Magazyn;
}(_ListaTowarow2.ListaTowarow);

exports.Magazyn = Magazyn;
},{"./ListaTowarow":"ListaTowarow.js"}],"Sklep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sklep = void 0;

var _ListaTowarow2 = require("./ListaTowarow");

var _Produkt = require("./Produkt");

var _Magazyn = require("./Magazyn");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sklep = /*#__PURE__*/function (_ListaTowarow) {
  _inherits(Sklep, _ListaTowarow);

  var _super = _createSuper(Sklep);

  function Sklep() {
    var _this;

    _classCallCheck(this, Sklep);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "zamowienie", new Array());

    return _this;
  }

  _createClass(Sklep, [{
    key: "dodajProdukt",
    value: function dodajProdukt(idProduktu, nazwa, model, cena, zuzycieEnergii) {
      if (this.znajdzProdukt(idProduktu).length == 0) {
        var produkt = new _Produkt.Produkt();
        produkt.id = idProduktu;
        produkt.nazwa = nazwa;
        produkt.model = model;
        produkt.cena = cena;
        produkt.zuzycieEnergii = zuzycieEnergii;
        this.lista.push({
          produkt: produkt
        });
      } else {
        console.log("Produkt juz istnieje");
      }
    }
  }, {
    key: "dodajZamowienie",
    value: function dodajZamowienie(idProduktu, ilosc) {
      //będzie umożliwiało dodanie produktów do zamówienia (po ID istniejącego produktu)
      if (this.znajdzProdukt(idProduktu).length == 0) {
        console.log("Nie znaleziono produktu.");
      } else {
        var index = this.lista.findIndex(function (element) {
          return element.produkt.id === idProduktu;
        });

        if (this.lista[index].ilosc >= ilosc) {
          this.zamowienie.push({
            produkt: this.lista[index].produkt,
            ilosc: ilosc
          });
        }
      }
    }
  }, {
    key: "zrealizujZamowienie",
    value: function zrealizujZamowienie() {
      var _this2 = this;

      var _loop = function _loop(i) {
        var index = _this2.lista.findIndex(function (element) {
          return element.produkt.id == _this2.zamowienie[i].produkt.id;
        });

        _this2.lista[index].ilosc -= _this2.zamowienie[i].ilosc;
      };

      //usuwa produkt (odpowiednią ilość) z magazynu z którego pochodzi
      for (var i = 0; i < this.zamowienie.length; i++) {
        _loop(i);
      }
    }
  }]);

  return Sklep;
}(_ListaTowarow2.ListaTowarow);

exports.Sklep = Sklep;
},{"./ListaTowarow":"ListaTowarow.js","./Produkt":"Produkt.js","./Magazyn":"Magazyn.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _Produkt = require("./Produkt");

var _ListaTowarow = require("./ListaTowarow");

var _Magazyn = require("./Magazyn");

var _Sklep = require("./Sklep");

var cenaEnergii = 0.77;
var p1 = new _Produkt.Produkt(1, "produkt1", "model1", 2001, 12.2, 20);
var p2 = new _Produkt.Produkt(2, "produkt2", "model2", 2002, 54.4, 42);
var p3 = new _Produkt.Produkt(2, "produkt3", "model3", 2003, 20.4, 30);
var p4 = new _Produkt.Produkt(4, "produkt4", "model4", 2004, 224.4, 35);
var p5 = new _Produkt.Produkt(5, "produkt5", "model5", 2005, 124.4, 23);
var p6 = new _Produkt.Produkt(6, "produkt6", "model6", 2006, 22.4, 66);
var p7 = new _Produkt.Produkt(7, "produkt7", "model7", 2007, 111.4, 45);
console.log("Wypisanie Produktu:");
console.log(p1.koszt());
console.log(p1.kosztEnergii(cenaEnergii));
console.log(p1.wiekProduktu());
console.log(p1.wiekProduktLata());
var listOfProducts = new _ListaTowarow.ListaTowarow();
useDodajProduktLista(p1);
useDodajProduktLista(p2);
useDodajProduktLista(p2);
useDodajProduktLista(p3);
useDodajProduktLista(p4);
useDodajProduktLista(p5);
useDodajProduktLista(p6);
useDodajProduktLista(p7);
console.log("ListaTowarów:");
listOfProducts.wypiszProdukt(4);
listOfProducts.wypiszWszystkieProdukty();
console.log("Zmiana produktu: (id 7)");
listOfProducts.zmienProdukt(7, p3);
listOfProducts.wypiszProdukt(7);
console.log("Zmiana produktu: (id 10)");
listOfProducts.zmienProdukt(10, p3);
var warehouse = new _Magazyn.Magazyn();
useDodajProduktMagazyn(p1, 100);
useDodajProduktMagazyn(p2, 200);
console.log("To samo id: ");
useDodajProduktMagazyn(p2, 200);
useDodajProduktMagazyn(p4, 400);
useDodajProduktMagazyn(p5, 500);
useDodajProduktMagazyn(p6, 600);
useDodajProduktMagazyn(p7, 700);
console.log("Stan magazynu: ");
warehouse.stanMagazynu();
warehouse.zabierzProdukt(p7, 10);
warehouse.stanMagazynu();
var sklep = new _Sklep.Sklep();
sklep.lista = warehouse.lista;
console.log("Dodawanie do zamówienia:");
sklep.dodajZamowienie(8, 2);
sklep.dodajZamowienie(2, 100);
sklep.dodajZamowienie(5, 100);
sklep.dodajZamowienie(6, 100);
sklep.dodajZamowienie(7, 100);
console.log("Stan magazynu przed realizacją zamówienia:");
sklep.stanMagazynu();
sklep.zrealizujZamowienie();
console.log("Stan magazynu po realizacji zamówienia:");
sklep.stanMagazynu();

function useDodajProduktLista(produkt) {
  try {
    listOfProducts.dodajProdukt(produkt);
  } catch (_unused) {
    console.log("Produkt z takim samym id juz istnieje");
  }
}

function useDodajProduktMagazyn(produkt, ilosc) {
  try {
    warehouse.dodajProdukt(produkt, ilosc);
  } catch (_unused2) {
    console.log("Produkt z takim samym id juz istnieje");
  }
}
},{"./Produkt":"Produkt.js","./ListaTowarow":"ListaTowarow.js","./Magazyn":"Magazyn.js","./Sklep":"Sklep.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50705" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map