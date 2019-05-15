if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin_to_js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin_to_js'.");
}
var kotlin_to_js = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function CalculateParser() {
    this.btn_0 = null;
    this.change_0 = 1;
  }
  function CalculateParser$parse$lambda(this$CalculateParser) {
    return function (it) {
      var tmp$, tmp$_0;
      var el = document.getElementById('text');
      var inputOne = Kotlin.isType(tmp$ = document.getElementById('input_one'), HTMLInputElement) ? tmp$ : throwCCE();
      var inputTwo = Kotlin.isType(tmp$_0 = document.getElementById('input_two'), HTMLInputElement) ? tmp$_0 : throwCCE();
      switch (this$CalculateParser.change_0) {
        case 1:
          el != null ? (el.textContent = CalculatePower$Companion_getInstance().calculateGain_lu1900$(inputOne.valueAsNumber, inputTwo.valueAsNumber).toString()) : null;
          break;
        case 2:
          el != null ? (el.textContent = CalculatePower$Companion_getInstance().calculateSum_lu1900$(inputOne.valueAsNumber, inputTwo.valueAsNumber).toString()) : null;
          break;
      }
      return Unit;
    };
  }
  function CalculateParser$parse$lambda_0(closure$select, this$CalculateParser) {
    return function (it) {
      println(closure$select.value);
      this$CalculateParser.setInt_0(closure$select.value);
      this$CalculateParser.nitBtn_0();
      return Unit;
    };
  }
  CalculateParser.prototype.parse = function () {
    var tmp$, tmp$_0;
    this.nitBtn_0();
    var root = Kotlin.isType(tmp$ = document.getElementById('btn_1'), HTMLButtonElement) ? tmp$ : throwCCE();
    var select = Kotlin.isType(tmp$_0 = document.getElementById('my_select'), HTMLSelectElement) ? tmp$_0 : throwCCE();
    root.addEventListener('click', CalculateParser$parse$lambda(this));
    select.onchange = CalculateParser$parse$lambda_0(select, this);
  };
  CalculateParser.prototype.setInt_0 = function (value) {
    this.change_0 = toInt(value);
  };
  CalculateParser.prototype.nitBtn_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.btn_0 = Kotlin.isType(tmp$ = document.createElement('button'), HTMLButtonElement) ? tmp$ : throwCCE();
    (tmp$_0 = this.btn_0) != null ? (tmp$_0.textContent = '454846') : null;
    (tmp$_2 = (tmp$_1 = this.btn_0) != null ? tmp$_1.style : null) != null ? (tmp$_2.background = '#A1233C') : null;
    (tmp$_3 = document.body) != null ? tmp$_3.insertBefore(ensureNotNull(this.btn_0), document.getElementById('root')) : null;
  };
  CalculateParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CalculateParser',
    interfaces: []
  };
  function CalculatePower() {
    CalculatePower$Companion_getInstance();
  }
  function CalculatePower$Companion() {
    CalculatePower$Companion_instance = this;
  }
  CalculatePower$Companion.prototype.calculateGain_lu1900$ = function (one, two) {
    return one * two;
  };
  CalculatePower$Companion.prototype.calculateSum_lu1900$ = function (one, two) {
    return one + two;
  };
  CalculatePower$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CalculatePower$Companion_instance = null;
  function CalculatePower$Companion_getInstance() {
    if (CalculatePower$Companion_instance === null) {
      new CalculatePower$Companion();
    }
    return CalculatePower$Companion_instance;
  }
  CalculatePower.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CalculatePower',
    interfaces: []
  };
  function main(args) {
    (new CalculateParser()).parse();
  }
  _.CalculateParser = CalculateParser;
  Object.defineProperty(CalculatePower, 'Companion', {
    get: CalculatePower$Companion_getInstance
  });
  _.CalculatePower = CalculatePower;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlin_to_js', _);
  return _;
}(typeof kotlin_to_js === 'undefined' ? {} : kotlin_to_js, kotlin);
