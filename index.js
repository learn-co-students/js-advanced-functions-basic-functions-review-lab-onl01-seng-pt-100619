// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!` 
} 

// function declaration  saturdayFun() before or after you write them
// hoisting works

let mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

// function expression is function(){}
// no name and no hoisting
// can be set to a variable
// also anonymous function
// mondayWork is a pointer 
// mondayWork() executes the function


function wrapAdjective(vf = '*'){
    let string = 'You are'
    return function (parameter = "special"){ 
        return `${string} ${vf}${parameter}${vf}!`
    }
    
}

// wrapAdjective has to be called as wrapAdjective()()
// since it has inner functions
// inner and outer functions can recieve parameters
// wrapAdjectve("#")("awesome")

// closure is the inner annonymous function
// closure is in the scope of the parent
// can carry knowledge

let [answer, theBase] = (
    function(thingToAdd) {
      let base = 3
      return [
        function() { return base + thingToAdd }, // this is equal to answer
        function() { return base } // this is equal to theBase
      ] // these two are closures they are anonymous inner and are in the scope of the parent
      //both have access to base 3
      // the 2 is being passed into the parent function as thingtoAdd argument
    }
  )(2)// this a IIFE: Instantly-Invoked Function Expression and the thingsToAdd = 2

  answer() //=> 5 // answer() and theBase() can be called as functions

  console.log(`The base was ${theBase()}`)
  // answer and theBase are not variable they are functions

  let Calculator = {// we pass an js object of functions where the name is the key and the value the iife
      add: function (){return 1+3},
      subtract: function(){return 1-3},
      multiply: function(){return 1*3},
      divide: function(){return 10/5},  
    }

function actionApplyer(integer, array){ 
    // if array is empty return it
    if (array === []){
        return integer
    }
    return function(){return integer * 4}    ]
}