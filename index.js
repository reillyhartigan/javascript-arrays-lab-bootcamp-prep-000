var kittens = ["Milo", "Otis", "Garfield"] //define your array here
//var name = "Ralph"
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
function appendKitten(name) {
  return kittens = [...kittens, name]
}
function prependKitten(name) {

  return kittens = [name, ...kittens]
}
function removeLastKitten() {
return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}
