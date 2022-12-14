/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/

const calculateTotal = (subTotal, tax) => {
  return subTotal + tax;
};

const order1 = calculateTotal(100, 50);
const order2 = calculateTotal(100, 10);
const order3 = calculateTotal(100, 20);

console.log(
  `Value of order 1 is :${order1} ,Value of order 2 is : ${order2} ,Value of order 3 is : ${order3}`
);
