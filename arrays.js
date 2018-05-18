var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = ['bread','mild cheese','sharp cheese', 'butter','tomato','garlic']
var tomatoSauceIngredients = ['tomato','garlic','olive oil','basil','oregano']

var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element) {
  var newarray = [element,...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  return array.unshift('element')
}

function addElementToEndOfArray(array,element) {
  var newarray = [...array,element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array,element) {
  return array.push('element')
}

function accessElementInArray(array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var warray = array.slice(1)
  return newarray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var newarray = array.slice(0,array.length-1)
  return newarray
  

}
