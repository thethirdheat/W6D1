function sum() {
  let args = Array.prototype.slice.call(arguments);
  return args.reduce((acc, ele) => acc += ele, 0);
}

function sumSpread(...args) {
  return args.reduce((acc, ele) => acc += ele, 0);
}


Function.prototype.myBind = function(context, ...bindArgs){
  let that = this;
  return function(...callArgs){
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBindWithArgs = function(){
  let that = this

  bindArgs = Array.from(arguments).slice(1)
  let context = Array.from(arguments)[0]

  return function(){
    callArgs = Array.from(arguments)
    return that.apply(context,bindArgs.concat(callArgs))
  }
}

function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(number) {
    numbers.push(number);
   
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc += el, 0);
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry = function(numArgs){
  let args=[];
  let ogfunc = this;
  function _curriedFn(num){
    args.push(num);
    if (args.length === numArgs ){
      ogfunc.apply(null,...args);
    }else{
      return _curriedFn;
    }
  }
  return _curriedFn;
};

Function.prototype.curry2 = function(numArgs) {
  let numbers =[];
  let ogfunc = this;
  function _curriedFn(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return ogfunc(...numbers);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
};


Function.prototype.curry3 = function(numArgs) {
  let numbers = [];
   _curriedFn = (arg) => {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      return this(...numbers);
    } else {
      return _curriedFn;
    }
  };
  return _curriedFn;
};