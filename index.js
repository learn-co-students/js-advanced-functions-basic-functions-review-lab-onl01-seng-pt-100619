function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(character = "*") {
  let you = "You are "
  return function(adjective = "special") {
    return `${you}${character}${adjective}${character}!`
  }
}

let Calculator = {
  add: function(num1, num2) {return num1 + num2},
  subtract: function(num1, num2) {return num1 - num2},
  multiply: function(num1, num2) {return num1 * num2},
  divide: function(num1, num2) {return num1 / num2}
};


let actionApplyer = function(num, arr) {
  // let newNum = num;
  // arr.forEach(fn => {    USING forEach
  //   newNum = fn(newNum)
  // })
  // return newNum

  let result = num
  for (let i = 0; i < arr.length; i++) {
    result = arr[i](result)
    console.log(result)
  }
  return result // USING for loop
}