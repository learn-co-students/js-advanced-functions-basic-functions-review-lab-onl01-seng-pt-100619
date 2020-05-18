// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(param="special") {
        return `You are ${string}${param}${string}!`
    }
}

let Calculator = {
    add(){ return 1 + 3},
    subtract() {return 1 - 3},
    multiply() {return 1 * 3},
    divide() {return 10 / 5}
}

function actionApplyer(i, arr) {
    let start = i

    for (let n = 0; n < arr.length; n++) {
        start = arr[n](start)
    }

    return start
}