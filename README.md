### Description

The client.js file contains code that takes in an equation in the form of a string, and returns a result. It does this without using an eval(), taking into account order of operations and using recursion.

The first function, createArrays, takes in the string and creates two arrays. One array contains all the operators, and the second contains all the numbers, both are in the order they appear within the original equation string. Then both arrays are passed into the second function.

The second function, getResult, loops through the operator array, first checking for * and / to correctly apply order of operations. If either operator is found, the index of that operator is used to access the correct index within the number array. Then a quick switch statement applies the correct operator, either * or / and the result is inserted back into the number array, while the second number in the equation is removed from the array. At this point the operator that was used in the equation is also removed from the operator array. Then, both arrays are inserted back into getResult using recursion. This ensures that the loops are able to dynamically update the .length of each array as operators and numbers are removed. Once all / and * operators are removed from the operator array, then the function moves onto + and - and solves continuing to use recursion. Finally once all the operators are removed from the array, the base case is met, the recursion stops, and the result is returned!

