import { question } from "readline-sync";

// this question method always return string in this project
console.log("---TypeScript Calculator--- ");

type operation = "+" | "-" | "x" | "/" | "^" | "%";

function main(): void {
  //   user inputs
  const firststr: string = question("\nEnter first Number\n");
  const operator: string = question(
    "Enter a Operator: + | - | x | / | ^ | % \n"
  );
  const secondstr: string = question("Enter second NUmber\n");

  const isvalid: boolean =
    isNumber(firststr) && isOperator(operator) && isNumber(secondstr);

  if (isvalid) {
    console.log("Input is Valid \nNow calculating.....\n");
    const frstnum: number = parseInt(firststr);
    const scndnum: number = parseInt(secondstr);
    calculate(frstnum, operator as operation, scndnum);
  } else {
    console.log("\nInput is not valid Enter again\n");
    main();
  }

  const answer: string = question(
    "You want to run again: \n Press y or Y \n Press any key for Exit \n"
  );
  
  if (answer==='y'||answer==='Y') {
    main()
  } else console.log('Exit....');

}

//   validation of input
//  checking function
function isNumber(first: string): boolean {
  const maybenumber = parseInt(first); // 45 'sfd'

  // if the input is string the condition will be true
  if (isNaN(maybenumber)) {
    return false;
  } else {
    // when its a number return true
    return true;
  }
}

function isOperator(operator: string): boolean {
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

function calculate(firstnum: number, operator: operation, secondnum: number) {
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


// calling the main function
main();
