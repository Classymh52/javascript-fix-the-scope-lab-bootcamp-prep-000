var animal = 'dog'

function myAnimal(dog) {
  return animal
}

function yourAnimal(cat) {
  animal = 'cat'
  return animal
}

function add2(n) {
  return (n+2)
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()()
