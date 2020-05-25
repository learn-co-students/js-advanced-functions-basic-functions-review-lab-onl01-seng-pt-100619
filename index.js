
function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`
};


function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
};


function wrapAdjective(flair="*") {
    return function(adj = "special"){
        return `You are ${flair}${adj}${flair}!`
    }  
};

let Calculator = {
    add: function(a, b) {
        return a + b},
    subtract: function(a, b) {
        return a - b},
    multiply: function(a, b) {
        return a * b},
    divide: function(a, b) {
        return a / b}    
};


let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }