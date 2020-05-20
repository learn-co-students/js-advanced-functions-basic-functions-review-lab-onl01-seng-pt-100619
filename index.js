// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(thisSymbol = '*') {
    return function(thisWord = 'special') {
        return `You are ${thisSymbol}${thisWord}${thisSymbol}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a+b;
    },
    subtract: function(a, b) {
        return a-b;
    },
    multiply: function(a, b) {
        return a*b;
    },
    divide: function(a, b) {
        return a/b;
    }
}

function actionApplyer(startInt, arrFns){
    for (let i = 0; i < arrFns.length; i++) {
        startInt = arrFns[i](startInt);
      }
    return startInt
}
