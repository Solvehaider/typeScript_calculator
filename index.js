#! /usr/bin/env node
// -------------------------------------------------------------------------

import { question } from "readline-sync";
// this question method always return string in this project
console.log("---TypeScript Calculator--- ");
function main() {
    //   user inputs
    const firststr = question("Enter first Number\n");
    const operator = question("Enter a Operator: + | - | x | / | ^ | % \n");
    const secondstr = question("Enter second NUmber\n");
    const isvalid = isNumber(firststr) && isOperator(operator) && isNumber(secondstr);
    if (isvalid) {
        console.log("Input is Valid \nNow calculating.....\n");
        const frstnum = parseInt(firststr);
        const scndnum = parseInt(secondstr);
        calculate(frstnum, operator, scndnum);
    }
    else {
        console.log("Input is not valid Enter again");
        main();
    }
    const answer = question("You want to run again: \n Press y or Y \n Press any key for Exit \n");
    
    if (answer === 'y' || answer === 'Y') {
        main();
    }
    else
        console.log('Exit....');
}
//   validation of input
//  checking function
function isNumber(first) {
    const maybenumber = parseInt(first); // 45 'sfd'
    // if the input is string the condition will be true
    if (isNaN(maybenumber)) {
        return false;
    }
    else {
        // when its a number return true
        return true;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "x":
        case "/":
        case "^":
        case "%":
            return true;
        default:
            return false;
    }
}
function calculate(firstnum, operator, secondnum) {
    switch (operator) {
        case "+":
            console.log(`Result: ${firstnum + secondnum}`);
            break;
        case "-":
            console.log(`Result: ${firstnum - secondnum}`);
            break;
        case "x":
            console.log(`Result: ${firstnum * secondnum}`);
            break;
        case "/":
            console.log(`Result: ${firstnum / secondnum}`);
            break;
        case "^":
            console.log(`Result: ${firstnum ** secondnum}`);
            break;
        case "%":
            console.log(`Result: ${firstnum % secondnum}`);
            break;
        default:
            break;
    }
}

main();

