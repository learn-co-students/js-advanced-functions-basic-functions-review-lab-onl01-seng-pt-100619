// Your code here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun("leave the house")

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}
mondayWork("ditch work")

function wrapAdjective(emphasizer = "*") {
    return function (adjective = "special") {
        return `You are ${emphasizer}${adjective}${emphasizer}!`
    }
}
// let encouragePromptFunction = wrapAdjective("!!!")

var Calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }

}

function actionApplyer(integer, functions) {
    functions.forEach(function (func) {
        integer = func(integer)
    })
    return integer
}