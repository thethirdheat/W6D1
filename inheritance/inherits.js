Function.prototype.inherits = function(Parent,Child){
  
  function Surrogate(){}
  Surrogate.prototype = Parent.prototype
  Child.prototype = new Surrogate()
  Child.prototype.constructor = Child
}

Function.prototype.inherits2 = function(Parent, Child){
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}

Function.prototype.inherits3 = function(Parent) {
  function Surrogate(){}

  Surrogate.prototype = Parent.prototype
  this.prototype = new Surrogate ()
  this.prototype.constructor = this;
}

Function.prototype.reverseInherit = function(Child) {
  function Surrogate (){}

  Surrogate.prototype = this.prototype
  Child.prototype = new Surrogate ()
  Child.prototype.constructor = Child
}