let testString1 = "5*6-6+5/2"
//26.5 
let testString2 = "5*2/3+3-7/2/2"
//4.5833

const createArrays = (equationString) => {
    let numArr = equationString.replaceAll("+", " ").replaceAll("-", " ").replaceAll("*", " ").replaceAll("/", " "); 
    //^removes all the operators from the string
    numArr = numArr.split(" "); //creates an array of numbers in string form
    numArr = numArr.map(i => i = Number(i)); //makes that array of string numbers into numbers
    let operArr = [];
    let possibleOperators = ['+', '-', '*', '/'];
    for (let i=0; i<equationString.length; i++){ //loops through the equation string
        for (let x=0; x<possibleOperators.length; x++){ //loops through an array of possible operators
            if (equationString[i] === possibleOperators[x]){
                operArr.push(equationString[i]); 
                //^pushes any operators into a new array, in the order they appear in the string
            }
        }
    }
    return getResult(operArr, numArr)
}

let theResult = createArrays(testString2)

console.log(theResult)

const getResult = (operArr, numArr) => {
    let resultToAdd = 0;
    if (numArr.length === 1){
        console.log(numArr[0])
        return numArr[0];
    }
    for (let i = 0; i<operArr.length; i++){ //loops through array of operators
      if (operArr[i]==="*"||operArr[i]==="/"){ //first checks * and / for order of operations 
        switch (operArr[i]) {
        case "/": resultToAdd = numArr[i] / numArr[i+1]; break; //does calculation depending on operator
        case "*": resultToAdd = numArr[i] * numArr[i+1]; break;
        }
        operArr.splice(i, 1); //removes the used operator 
        numArr.splice(i,2,resultToAdd); //replaces the first number in the equation with the result-
        //and removes the index after the first number
        console.log(operArr,numArr);
        return getResult(operArr, numArr); //enters the modified arrays back into the function 
      }
    }
    for (let i = 0; i<operArr.length; i++){
      if (operArr[i]==="+"||operArr[i]==="-"){ 
        //^once the oper array has been emptied of * and / then + and - can be calculated
        switch (operArr[i]) {
        case "-": resultToAdd = numArr[i] - numArr[i+1]; break;
        case "+": resultToAdd = numArr[i] + numArr[i+1]; break;
        }
        operArr.splice(i, 1);
        numArr.splice(i,2,resultToAdd);
        console.log(operArr,numArr);
        return getResult(operArr, numArr);
      }
    }
}

