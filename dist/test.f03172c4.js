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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\u628A\u7CBE\u7075\u5B9D\u8D1D\u653E\u7F6E\u7684\u4F4D\u7F6E\u5B89\u6392\u597D*/\n.bench{\n    position: relative;\n    width:940px;\n    height: 215px;\n    box-shadow: 5px 5px 0 #333;\n    margin: 50px auto;\n    padding-left: 60px;\n    padding-right: 60px;\n    display: flex;\n    flex-direction:row;\n    justify-content: space-around;\n    align-items:flex-end;\n}\n/*\u5148\u753B\u597D\u7CBE\u7075\u4EEC\u7684\u773C\u775B\u5634\u5DF4\u548C\u8138\u988A*/\n.head{\n    position: relative;\n    width:200px;\n    height: 155px;\n    border-radius: 50% 50% 55px 55px;\n    overflow: hidden;\n    z-index: 3;\n}\n.ear{\n    z-index: 2;\n}\n.eye{\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    bottom: 45px;\n    left:85px;\n    border-radius: 50%;\n    background-color: #444444;\n}\n.eye:nth-child(2n-1){\n    left:35px;\n}\n.eye:nth-child(2n){\n    left:135px;\n}\n\n.cheek{\n    position: absolute;\n    width: 30px;\n    height: 15px;\n    background-color: #DC88C2;\n    border-radius: 50%;\n    bottom: 25px;\n    left:3px;\n}\n.cheek:nth-child(2n-1){\n    left:167px;\n}\n\n.mouth{\n    position: absolute;\n    width: 30px;\n    height: 10px;\n    bottom: 50px;\n    left:50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n}\n.mouth::before,.mouth::after{\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 50%;\n    border-radius: 50%;\n    border-bottom: solid 3px #444;\n}\n.mouth::after{\n    left:50%;\n}\n\n.arm:nth-child(2n-1){\n    transform: rotate(-10deg);\n    left:50px;\n    bottom:-30px;\n}\n.arm:nth-child(2n){\n    transform: rotate(10deg);\n    left:125px;\n    bottom:-30px;\n}\n.electric{\n    position: relative;\n}\n.electric .head{\n    background-color: #FFF069;\n}\n.electric .cheek{\n    position: absolute;\n    width: 45px;\n    height: 45px;\n    background-color: #FF5757;\n    border-radius: 50%;\n    bottom: -2px;\n    left:-14px;\n}\n.electric .cheek:nth-child(2){\n    left:170px;\n}\n.electric .arm{\n    position: absolute;\n    width: 25px;\n    height: 40px;\n    border-bottom-left-radius: 50% 40px;\n    border-bottom-right-radius: 50% 40px;\n    background-color: #FFF069;\n}\n.electric .ear{\n    position: absolute;\n    width: 35px;\n    height: 80px;\n    transform: rotate(-15deg);\n    top:-30px;\n    left:5px;\n    border-radius:50%  50% 0 0;\n    background-color: #FFF069;\n    overflow: hidden;\n    transform-origin: center bottom;\n    transition: 0.3s;\n}\n.electric .ear:nth-child(2){\n    left:160px;\n    transform: rotate(15deg);\n}\n.electric .ear div{\n    position: absolute;\n    background-color: #444444;\n    width: 100px;\n    height: 25px;\n}\n.electric .tail{\n    position: absolute;\n    width: 20px;\n    height: 100px;\n    background-color: #FFE81D;\n    left:87.5px;\n    top:-50px;\n    border-radius: 6px;\n    transform: rotate(-25deg);\n}\n.electric .tail div{\n    position: absolute;\n    width:50px;\n    height: 32px;\n    border-radius: 6px;\n    background-color: #FFE81D;\n}\n.electric:hover .tail{\n    animation: waveTail 1.2s infinite linear;\n}\n.electric:hover .ear{\n    transform: rotate(-30deg);\n}\n.electric:hover .ear:nth-child(2) {\n    transform: rotate(30deg);\n}\n.water{\n    position: relative;\n}\n.water .head{\n    background-color: #4EE4FF;\n}\n.water .arm{\n    position: absolute;\n    width: 25px;\n    height: 40px;\n    border-bottom-left-radius: 50% 40px;\n    border-bottom-right-radius: 50% 40px;\n    background-color: #4EE4FF;\n}\n.water .tail {\n    position: absolute;\n    left: 60px;\n    top: -40px;\n    width: 60px;\n    height: 100px;\n    border-radius: 50% 50px 0 0;\n    border-left: 100px solid #1bdcff;\n    transform: rotate(20deg);\n    transform-origin: center bottom;\n    transition: 0.3s;\n}\n.water .tail div{\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    left: -80px;\n    top:-5px;\n    border-radius: 50% 50% 50% 0;\n    background-color: #1bdcff;\n    border-left:10px solid #05C8EB ;\n    border-top:5px solid #05C8EB ;\n}\n.water .tail div div{\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    left: 15px;\n    top:-5px;\n    border-radius: 50% 50% 50% 0;\n    background-color: #1bdcff;\n    border-left:10px solid #05C8EB ;\n    border-top:5px solid #05C8EB ;\n}\n.water:hover .tail{\n    transform: rotate(10deg);\n}\n\n.fire{\n    position: relative;\n}\n.fire .head{\n    background-color: #FF9147;\n}\n.fire .arm{\n    position: absolute;\n    width: 25px;\n    height: 40px;\n    border-bottom-left-radius: 50% 40px;\n    border-bottom-right-radius: 50% 40px;\n    background-color: #FF9147;\n}\n.fire .tail{\n    position: absolute;\n    left: 80px;\n    top: -40px;\n    column-width: 60px;\n    height: 100px;\n    border-radius: 50px;\n    border-left: 40px solid #ff7314;\n}\n.fire .tail>div{\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    background-color: #FFF069; \n    top:-40px;\n    left:-10px;\n    border-radius: 50% 0 50% 50%;\n}\n.fire .tail>div>div{\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    background-color: #FF5757;\n    border-radius: 35% 0 35% 50%;\n    left:12px;\n    top:20px;\n} \n.fire:hover .tail{\n    transform: rotate(-15deg);\n    transition: 1s;\n}\n.fire:hover .tail div:first-child{\n    animation: flicker 0.6s infinite linear;\n}\n.fire:hover .tail div:nth-child(2){\n    animation: flicker 0.2s infinite linear;\n}\n\n\n.grass{\n    position: relative;\n}\n.grass .head{\n    background-color: #56FFE9;\n}\n.grass .head div:nth-child(6){\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    background-color: #00BCA4 ;\n    border-radius: 20% 5px 20% 100%;\n    left:55px;\n    top:35px;\n    z-index:3;\n    transform: rotate(-20deg);\n}\n.grass .head div:nth-child(7){\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    background-color: #00BCA4 ;\n    border-radius: 20% 5px 20% 100%;\n    left:140px;\n    top:20px;\n    z-index:3;\n    transform: rotate(15deg);\n}\n.grass .arm{\n    position: absolute;\n    width: 25px;\n    height: 40px;\n    border-bottom-left-radius: 50% 40px;\n    border-bottom-right-radius: 50% 40px;\n    background-color: #56FFE9;\n}\n.grass .ear{\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    transform: rotate(-30deg);\n    top:-10px;\n    left: 5px;\n    border-radius:50%  50% 0 0;\n    background-color: #56FFE9;\n    overflow: hidden;\n    transform-origin: center bottom;\n    transition: 0.3s;\n}\n.grass .ear:nth-child(2){\n    left:145px;\n    transform: rotate(30deg);\n}\n.grass .tail div:first-child{\n    position: absolute;\n    width: 150px;\n    height: 150px;\n    background-color: #00D6BA ;\n    transform: rotate(45deg);\n    top:-20px;\n    left: 25px;\n    border-radius:0 50% 100% 50%;\n    z-index: 1;\n}\n.grass .tail div:nth-child(2){\n    position: absolute;\n    width: 80px;\n    height: 80px;\n    background-color: #00BCA4 ;\n    transform: rotate(60deg);\n    border-radius:0 50% 100% 50%;\n    top:-35px;\n    left: 30px;\n}\n.grass .tail div:nth-child(3){\n    position: absolute;\n    width: 80px;\n    height: 80px;\n    background-color: #00BCA4 ;\n    transform: rotate(30deg);\n    border-radius:0 50% 100% 50%;\n    top:-35px;\n    left: 90px;\n}\n.grass:hover .ear{\n    transform: rotate(-40deg);\n}\n.grass:hover .ear:nth-child(2) {\n    transform: rotate(40deg);\n}\n.grass:hover .tail div:nth-child(2){\n    transform: rotate(50deg);\n    transition: 1s;\n}\n.grass:hover .tail div:nth-child(3){\n    transform: rotate(40deg);\n    transition: 1s;\n}\n";
var _default = string;
exports.default = _default;
},{}],"DdXF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var mobileString = "\n.bench{\n    position: relative;\n    width:9.4rem;\n    height: 2.15rem;\n    box-shadow: 0.1rem 0.1rem 0 #333;\n    margin: 0.5rem auto;\n    padding-left: 0.6rem;\n    padding-right: 0.6rem;\n    display: flex;\n    flex-direction:row;\n    justify-content: space-around;\n    align-items:flex-end;\n    background-color:#FFFFFF ;\n}\n\n.head{\n    position: relative;\n    width:2rem;\n    height: 1.5rem;\n    border-radius: 50% 50% 0.55rem 0.55rem;\n    overflow: hidden;\n    z-index: 3;\n}\n.ear{\n    z-index: 2;\n}\n.eye{\n    position: absolute;\n    width: 0.3rem;\n    height: 0.3rem;\n    bottom: 0.45rem;\n    left:0.85rem;\n    border-radius: 50%;\n    background-color: #444444;\n}\n.eye:nth-child(2n-1){\n    left:0.35rem;\n}\n.eye:nth-child(2n){\n    left:1.35rem;\n}\n\n.cheek{\n    position: absolute;\n    width: 0.3rem;\n    height: 0.15rem;\n    background-color: #DC88C2;\n    border-radius: 50%;\n    bottom: 0.25rem;\n    left:0.03rem;\n}\n.cheek:nth-child(2n-1){\n    left:1.67rem;\n}\n\n.mouth{\n    position: absolute;\n    width: 0.3rem;\n    height: 0.1rem;\n    bottom: 0.5rem;\n    left:50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n}\n.mouth::before,.mouth::after{\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 50%;\n    border-radius: 50%;\n    border-bottom: solid 0.03rem #444;\n}\n.mouth::after{\n    left:50%;\n}\n\n.arm:nth-child(2n-1){\n    transform: rotate(-10deg);\n    left:0.5rem;\n    bottom:-0.3rem;\n}\n.arm:nth-child(2n){\n    transform: rotate(10deg);\n    left: 1.25rem;\n    bottom:-0.3rem;\n}\n.electric{\n    position: relative;\n}\n.electric .head{\n    background-color: #FFF069;\n}\n.electric .cheek{\n    position: absolute;\n    width: 0.45rem;\n    height: 0.45rem;\n    background-color: #FF5757;\n    border-radius: 50%;\n    bottom: -0.02rem;\n    left: -0.14rem;\n}\n.electric .cheek:nth-child(2){\n    left: 1.7rem;\n}\n.electric .arm{\n    position: absolute;\n    width: 0.25rem;\n    height: 0.4rem;\n    border-bottom-left-radius: 50% 0.4rem;\n    border-bottom-right-radius: 50% 0.4rem;\n    background-color: #FFF069;\n}\n.electric .ear{\n    position: absolute;\n    width: 0.35rem;\n    height: 0.8rem;\n    transform: rotate(-15deg);\n    top: -0.3rem;\n    left: 0.05rem;\n    border-radius:50%  50% 0 0;\n    background-color: #FFF069;\n    overflow: hidden;\n    transform-origin: center bottom;\n    transition: 0.3s;\n}\n.electric .ear:nth-child(2){\n    left: 1.6rem;\n    transform: rotate(15deg);\n}\n.electric .ear div{\n    position: absolute;\n    background-color: #444444;\n    width: 1rem;\n    height: 0.25rem;\n}\n.electric .tail{\n    position: absolute;\n    width: 0.2rem;\n    height: 1rem;\n    background-color: #FFE81D;\n    left: 0.875rem;\n    top: -0.5rem;\n    border-radius: 0.06rem;\n    transform: rotate(-25deg);\n}\n.electric .tail div{\n    position: absolute;\n    width: 0.5rem;\n    height: 0.32rem;\n    border-radius: 0.06rem;\n    background-color: #FFE81D;\n}\n.electric:hover .tail{\n    animation: waveTail 1.2s infinite linear;\n}\n.electric:hover .ear{\n    transform: rotate(-30deg);\n}\n.electric:hover .ear:nth-child(2) {\n    transform: rotate(30deg);\n}\n.water{\n    position: relative;\n}\n.water .head{\n    background-color: #4EE4FF;\n}\n.water .arm{\n    position: absolute;\n    width: 0.25rem;\n    height: 0.4rem;\n    border-bottom-left-radius: 50% 0.4rem;\n    border-bottom-right-radius: 50% 0.4rem;\n    background-color: #4EE4FF;\n}\n.water .tail {\n    position: absolute;\n    left: 0.6rem;\n    top: -0.4rem;\n    width: 0.6rem;\n    height: 1rem;\n    border-radius: 50% 0.5rem 0 0;\n    border-left: 1rem solid #1bdcff;\n    transform: rotate(20deg);\n    transform-origin: center bottom;\n    transition: 0.3s;\n}\n.water .tail div{\n    position: absolute;\n    width: 0.6rem;\n    height: 0.6rem;\n    left: -0.8rem;\n    top: -0.05rem;\n    border-radius: 50% 50% 50% 0;\n    background-color: #1bdcff;\n    border-left: 0.1rem solid #05C8EB ;\n    border-top: 0.05rem solid #05C8EB ;\n}\n.water .tail div div{\n    position: absolute;\n    width: 0.6rem;\n    height: 0.6rem;\n    left: 0.15rem;\n    top: -0.05rem;\n    border-radius: 50% 50% 50% 0;\n    background-color: #1bdcff;\n    border-left: 0.1rem solid #05C8EB ;\n    border-top: 0.05rem solid #05C8EB ;\n}\n.water:hover .tail{\n    transform: rotate(10deg);\n}\n\n\n.fire{\n    position: relative;\n}\n.fire .head{\n    background-color: #FF9147;\n}\n.fire .arm{\n    position: absolute;\n    width: 0.25rem;\n    height: 0.4rem;\n    border-bottom-left-radius: 50% 0.4rem;\n    border-bottom-right-radius: 50% 0.4rem;\n    background-color: #FF9147;\n}\n.fire .tail{\n    position: absolute;\n    left: 0.8rem;\n    top: -0.4rem;\n    column-width: 0.6rem;\n    height: 1rem;\n    border-radius: 0.5rem;\n    border-left: 0.4rem solid #ff7314;\n}\n.fire .tail>div{\n    position: absolute;\n    width: 0.5rem;\n    height: 0.5rem;\n    background-color: #FFF069;\n    top: -0.4rem;\n    left: -0.1rem;\n    border-radius: 50% 0 50% 50%;\n}\n.fire .tail>div>div{\n    position: absolute;\n    width: 0.2rem;\n    height: 0.2rem;\n    background-color: #FF5757;\n    border-radius: 35% 0 35% 50%;\n    left: 0.12rem;\n    top: 0.2rem;\n}\n.fire:hover .tail{\n    transform: rotate(-15deg);\n    transition: 1s;\n}\n.fire:hover .tail div:first-child{\n    animation: flicker 0.6s infinite linear;\n}\n.fire:hover .tail div:nth-child(2){\n    animation: flicker 0.2s infinite linear;\n}\n\n\n.grass{\n    position: relative;\n}\n.grass .head{\n    background-color: #56FFE9;\n}\n.grass .head div:nth-child(6){\n    position: absolute;\n    width: 0.3rem;\n    height: 0.3rem;\n    background-color: #00BCA4 ;\n    border-radius: 20% 0.05rem 20% 100%;\n    left: 0.55rem;\n    top: 0.35rem;\n    z-index:3;\n    transform: rotate(-20deg);\n}\n.grass .head div:nth-child(7){\n    position: absolute;\n    width: 0.2rem;\n    height: 0.2rem;\n    background-color: #00BCA4 ;\n    border-radius: 20% 0.05rem 20% 100%;\n    left: 1.4rem;\n    top: 0.2rem;\n    z-index:3;\n    transform: rotate(15deg);\n}\n.grass .arm{\n    position: absolute;\n    width: 0.25rem;\n    height: 0.4rem;\n    border-bottom-left-radius: 50% 0.4rem;\n    border-bottom-right-radius: 50% 0.4rem;\n    background-color: #56FFE9;\n}\n.grass .ear{\n    position: absolute;\n    width: 0.5rem;\n    height: 0.5rem;\n    transform: rotate(-30deg);\n    top: -0.1rem;\n    left: 0.05rem;\n    border-radius:50%  50% 0 0;\n    background-color: #56FFE9;\n    overflow: hidden;\n    transform-origin: center bottom;\n    transition: 0.3s;\n}\n.grass .ear:nth-child(2){\n    left: 1.45rem;\n    transform: rotate(30deg);\n}\n.grass .tail div:first-child{\n    position: absolute;\n    width: 1.5rem;\n    height: 1.5rem;\n    background-color: #00D6BA ;\n    transform: rotate(45deg);\n    top: -0.2rem;\n    left: 0.25rem;\n    border-radius:0 50% 100% 50%;\n    z-index: 1;\n}\n.grass .tail div:nth-child(2){\n    position: absolute;\n    width: 0.8rem;\n    height: 0.8rem;\n    background-color: #00BCA4 ;\n    transform: rotate(60deg);\n    border-radius:0 50% 100% 50%;\n    top: -0.35rem;\n    left: 0.3rem;\n}\n.grass .tail div:nth-child(3){\n    position: absolute;\n    width: 0.8rem;\n    height: 0.8rem;\n    background-color: #00BCA4 ;\n    transform: rotate(30deg);\n    border-radius:0 50% 100% 50%;\n    top: -0.35rem;\n    left: 0.9rem;\n}\n.grass:hover .ear{\n    transform: rotate(-40deg);\n}\n.grass:hover .ear:nth-child(2) {\n    transform: rotate(40deg);\n}\n.grass:hover .tail div:nth-child(2){\n    transform: rotate(50deg);\n    transition: 1s;\n}\n.grass:hover .tail div:nth-child(3){\n    transform: rotate(40deg);\n    transition: 1s;\n}\n";
var _default = mobileString;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

var _mobileCSS = _interopRequireDefault(require("./mobileCSS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
var n = 1;
var time = 50;
var id;
var player = {
  init: function init() {
    if (window.document.documentElement.clientWidth >= 500) {
      demo.innerText = _css.default.substr(0, n);
      demo2.innerHTML = _css.default.substr(0, n);
    } else {
      demo.innerText = _mobileCSS.default.substr(0, n);
      demo2.innerHTML = _mobileCSS.default.substr(0, n);
    }

    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    document.querySelector('#btnPause').onclick = player.pause;

    document.querySelector('#btnPlay').onclick = function () {
      player.pause();
      player.play();
    };

    document.querySelector('#btnSlow').onclick = player.slow;
    document.querySelector('#btnNormal').onclick = player.normal;
    document.querySelector('#btnFast').onclick = player.fast;
  },
  run: function run() {
    n += 1;

    if (n > _css.default.length) {
      window.clearInterval(id);
      return;
    }

    if (window.document.documentElement.clientWidth >= 500) {
      demo.innerText = _css.default.substr(0, n);
      demo2.innerHTML = _css.default.substr(0, n);
    } else {
      demo.innerText = _mobileCSS.default.substr(0, n);
      demo2.innerHTML = _mobileCSS.default.substr(0, n);
    }

    demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    id = setInterval(player.run, time);
  },
  pause: function pause() {
    window.clearInterval(id);
  },
  slow: function slow() {
    player.pause();
    time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi","./mobileCSS":"DdXF"}]},{},["HdJB"], null)
//# sourceMappingURL=test.f03172c4.js.map