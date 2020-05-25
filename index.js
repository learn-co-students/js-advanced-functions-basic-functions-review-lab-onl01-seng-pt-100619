function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function (style="*"){
    return function(param = "special"){
        return `You are ${style}${param}${style}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        return a / b;
    }
}

function actionApplyer(start, array){
    let a = start 

    for (let i = 0; i < array.length; i++){
        a = array[i](a)
    }
    return a
}