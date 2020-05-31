// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
   return  `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(name="special") {
        return `You are ${string}${name}${string}!`
  }
}

let Calculator = {
    add : function() {
        return 1 + 3;
    },

    subtract : function() {
        return 1 - 3;
    },

    multiply : function() {
        return 1* 3;
    },

    divide : function() {
        return 10/5;
    }
}

let actionApplyer = function(start, array) {
    let a = start
  
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
  
    return a
  }

    

    



