// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.` 
}

function wrapAdjective(vflair='*'){
    return function(adj='special'){
        return `You are ${vflair}${adj}${vflair}!`
    }
}

const Calculator = {
    add: function(a,b){return a+b},
    subtract: function(a, b){return a-b},
    multiply: function(a, b){return a * b},
    divide: function(a,b){return a/b}
}

function actionApplyer(start, funcArray){
    for(let i=0; i < funcArray.length; i++){
        start = funcArray[i](start)
    }
    return start
}