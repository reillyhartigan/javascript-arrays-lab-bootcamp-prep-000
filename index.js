var kittens = ["Milo", "Otis", "Garfield"] //define your array here
var name = "Ralph"
// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
return kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
return kittens.shift(name)
}
var name = "Broom"
function appendKitten(name) {
var kittens = [name, ...kittens]
return kittens
}
function prependKitten(name) {
  var kittens = [name, ...kittens]
  return kittens
}
