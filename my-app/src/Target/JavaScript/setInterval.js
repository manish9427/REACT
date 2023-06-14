function message() {
  console.log("hello from manish");
}

var id = setInterval(message, 1000);

setTimeout(function () {
  clearInterval(id);
}, 5000);

const m = () => {
  console.log("hello");
};
var i = setInterval(m, 1000);

setTimeout(() => {
  clearInterval(i);
}, 5000);

function greet(name) {
  console.log("Hello, " + name + "!");
}

// Execute the greet function with the argument "John" after a delay of 1 second
setTimeout(greet, 1000, "John");
setTimeout(greet, 1000, "manish");
