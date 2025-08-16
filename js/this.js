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
