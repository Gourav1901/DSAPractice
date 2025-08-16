const myObject = {
  myMethod() {
    console.log(this);
  },
};
myObject.myMethod();

// factory function

function User(name, age) {
  return {
    name: "Gourav",
    age: 20,
    greet: function () {
      console.log(`hello my name us ${this.name} and Im ${this.age} year old`);
    },
  };
}

console.log(User("Gourav", 20));

// Constructors in Javascript are a special kind of function used to create and instantiate objects,
//  especially when multiple objects of the same kind need to be created.

var a = new Object();
var b = new String("raj");
var c = new Number("24");
var d = new Boolean(true);
var e = new Array();
var f = new Function();
var g = new Date();
var h = new RegExp();
var i = new Error();

console.log(a, b, c, d, e, f, g, h, i);
