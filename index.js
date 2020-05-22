function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}
function wrapAdjective(char= '*', msg = "You are ") { // Takes in two arguments
  return function(adjective = "special") { // Returns a function take takes in 1 argument
    return `${msg}${char}${adjective}${char}!` // Returns concatenated string 
  }
  // wrapAdjective()(); => "You are *special*!"
  // wrapAdjective("||")() => "You are ||special||!"
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