

// Day 1 outputs
console.log("Day 1 Outputs");
document.write("<h2>Day 1 Outputs</h2>");
// ... Other outputs ...


//Day 1:


//Question 1:
//Create one function with zero parameter having a console statement;
function zeroParameter() {
    console.log(`Q1: ${"This is a function with zero parameters."}`);
    document.write(`<h4>Q1 : Create one function with zero parameter having a console statement;<br><br>
    <i style="color: darkred;">Code : <br>function zeroParameter() {<br>    console.log("This is a function with zero parameters.");<br>}<br>zeroParameter();</i><br><br>
    <i style="color: darkblue;"> Output: ${JSON.stringify("This is a function with zero parameters.")}</i><br><br>
    <mark>Reason for output:</mark><br>Here, defining a function called zeroParameter. This function doesn't take any parameters and consists of a single statement that logs a message to the console. The message is a template string that combines the text with the string "This is a function with zero parameters". After defining the function, you immediately call it using zeroParameter();.<br>This output demonstrates that the function was successfully called, and it printed the specified message to the console."</h4><hr>`);
}
zeroParameter();

//Question 2:
//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a, b) {
    console.log("Q2:", `Sum of ${a}, ${b} is ${a + b}`);
    document.write(`<h4>Q2 : Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7";<br><br>
    <i style="color: darkred;">Code : <br>function sum(a, b) {<br>    console.log(a + b);<br>}<br>sum(3, 4);</i><br><br>
    <i style="color: darkblue;"> Output: ${JSON.stringify(`${a} + ${b} = ${a + b}`)}</i><br><br>
    <mark>Reason for output:</mark><br>The sum function is called with the arguments 3 and 4. This means that within the function, a will be 3 and b will be 4. The console.log function is called with the result of a + b, which is 7. When you run the code sum(3, 4);, it will output "7" to the console because that's the result of adding 3 and 4 together.</h4><hr>`);

}
sum(3, 4);

//Question 3:
//Create one arrow function
const arrowFunction = () => {
    console.log("Q3:", "This is an arrow function.");
    document.write(`<h4>Q3 : "Create one arrow function"<br><br>
    <i style="color: darkred;">Code : <br>const arrowFunction = () => {<br>    console.log("This is an arrow function.");<br>}<br>arrowFunction();</i><br><br>
    <i style="color: darkblue;"> Output: ${JSON.stringify("This is an arrow function.")}</i><br><br>
    <mark>Reason for output:</mark><br>Here, defining an arrow function named arrowFunction using the arrow function syntax () => { ... }. This arrow function takes no parameters and contains a single statement, which is a console.log statement that prints the string "This is an arrow function." to the console. After defining the arrowFunction(), here call it using the () operator. This triggers the execution of the arrow function's code block. Inside the code block, the console.log statement is executed. The text "This is an arrow function." is passed to console.log, and it is printed to the console. The text "This is an arrow function." is passed to console.log, and it is printed to the console.</h4><hr>`);
};
arrowFunction();


//Question 4:
var x = 21;
var girl = function () {
    console.log(`Q4: ${x}`);
    document.write(`<h4>Q4 : "Print output:<br>var x = 21;<br>var girl = function () {<br>    console.log(x);<br>    var x = 20;<br>};<br>girl ();"<br><br>
    <i style="color: darkred;">Code : <br>var x = 21;<br>var girl = function () {<br>    console.log(x);<br>var x = 20;<br>};<br>girl();</i><br><br>
    <i style="color: darkblue;"> Output: ${JSON.stringify(`${x}`)}</i><br><br>
    <mark>Reason for output:</mark><br>var x = 21; declares a variable x and initializes it with the value 21. This declaration is hoisted to the top of the current scope.<br>Inside the girl function, you have console.log(x);. At this point, the x variable has been hoisted to the top of the girl function, but it has not been assigned a value yet. Therefore, it's in a "temporal dead zone," and any attempt to access its value results in undefined.<br>var x = 20; inside the girl function declares a new variable x with a value of 20. This declaration is also hoisted to the top of the girl function, but it doesn't affect the outer x variable.<br>The output is "undefined" because the x variable inside the girl function is hoisted to the top and shadowed by the local var x = 20; declaration, which hasn't been assigned a value at the time the console.log statement is executed.</h4><hr>`);
    var x = 20;
};
girl();



//Question 5:
var x5 = 21;
document.write(`<h4>Q5 : "Print output:<br>var x = 21;<br> girl();<br> console.log(x)<br> function girl() {<br>    console.log(x);<br>    var x = 20;<br>};"<br><br>
<i style="color: darkred;">Code : <br>var x = 21;<br> girl();<br> console.log(x)<i style="color: darkblue;"> //"21"</i><br>function girl() {<br>    console.log(x);<i style="color: darkblue;"> //"undefined"</i><br>    var x = 20;<br>};"<br></i><br></h4>`);
girl5();
console.log(`Q5: ${x5}`);
document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(`${x5}`)}</i></h4>`);
function girl5() {
    console.log(`Q5: ${x5}`);
    document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(`${x5}`)}</i></h4>`);
    var x5 = 20;
}
document.write(`<h4><mark>Reason for output:</mark><br>The first console.log(x) inside the girl() function logs the value of the local x variable, which is declared within the function. At this point, the local x has been declared but hasn't been assigned any value, so it's undefined.<br>After the girl() function is called, you log the value of the global x variable using console.log(x). This global x variable is still 21 because it was never modified within the function. This is why you see "21" in the output.<br>You declare a global variable x and set it to 21. This variable has global scope, meaning it can be accessed from anywhere in your code.<br>You call the girl() function before defining it. In JavaScript, function declarations are hoisted to the top of their containing scope during the compilation phase. So, even though you call girl() before defining it, JavaScript "hoists" the function declaration to the top of the code, making it available to be called.<br>Inside the girl() function, you have another var x declaration. This declaration creates a new variable x with local scope within the function. This local x shadows (hides) the global x within the function's scope.</h4><hr>`);


//Question 6:
var x6 = 21;
document.write(`<h4>Q6 : "Print output<br>var x = 21;<br>a();<br>b();<br>function a() {<br>    x = 20;<br>console.log(x);<br>};<br>function b() {<br>    x = 40;<br>    console.log(x);<br>}; "<br><br>
<i style="color: darkred;">Code : <br>var x = 21;<br>a();<br>b();<br>function a() {<br>    x = 20;<br>console.log(x);<i style="color: darkblue;"> //"20"</i><br>};<br>function b() {<br>    x = 40;<br>    console.log(x);<i style="color: darkblue;"> //"40"</i><br>};</i></h4>`);

a();
b();

function a() {
    x6 = 20;
    console.log(`Q6: ${x6}`);
    document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(`${x6}`)}</i></h4>`);


};
function b() {
    x6 = 40;
    console.log(`Q6: ${x6}`);
    document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(`${x6}`)}</i></h4>`);


};
document.write(`<h4><mark>Reason for output:</mark><br>var x = 21;: This initializes the variable x with the value 21.<br>a();: This is the first function call, invoking the function a().<br>Inside a(), you have the following code:<br>x = 20;<br>console.log(x);<br>Here, x is assigned the value 20, and then it's logged to the console. So, the output of this function call is "20".<br>b();: This is the second function call, invoking the function b().<br>Inside b(), you have the following code:<br>x = 40;<br> console.log(x);<br>Here, x is assigned the value 40, and then it's logged to the console. So, the output of this function call is "40".<br> The first function call a() changes the value of x to 20 and logs it, resulting in the output "20".<br>The second function call b() changes the value of x to 40 and logs it, resulting in the output "40".<br>Each function modifies the value of x, and the console logs the updated value of x inside each function, which is why you see "20" and "40" as the output.</h4><hr>`);





//Question 7:
function factorial(n) {
    document.write(`<h4>Q7 : "Write a function that accepts parameter n and returns factorial of n"<br><br>
<i style="color: darkred;">Code : <br>if (n === 0 || n === 1) {<br>return (1);<br>} else {<br>return (n * factorial(n - 1));<br>    }<br>}<br>factorial(0);</i></h4>`);

    if (n === 0 || n === 1) {
        document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(1)}</i></h4>`);
        return (`Q7: ${1}`);

    } else {
        document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(n * factorial(n - 1))}</i></h4>`);
        return (`Q7: ${n * factorial(n - 1)}`);
    }
}
factorial(0);
document.write(`<h4><mark>Reason for output:</mark><br>The factorial function takes one argument, n, which represents the number for which you want to calculate the factorial.<br>Inside the function, there's an if statement that checks whether n is equal to 0 or 1.<br>If n is 0 or 1, the function immediately returns the string "1". This is because the factorial of 0 and 1 is defined as 1.<br>If n is neither 0 nor 1, the function proceeds to the else block.<br>Inside the else block, the function makes a recursive call to itself. It calculates the factorial of n by multiplying n with the factorial of (n - 1). This recursive call keeps reducing n by 1 each time until it reaches either 0 or 1, at which point it returns 1.<br>The function returns the result of each recursive call as a string. <br> The if condition is checked, and n === 0 is true.<br>Therefore, the function immediately returns the string "1".<br>The output of factorial(0) is "1".</h4 ><hr>`);





// Day 2 outputs
console.log("Day 2 Outputs");
document.write("<h2>Day 2 Outputs</h2>");
// ... Other outputs ...


//Question 1:
// "Guess the Output

// function FindSum(a, b) {
//     return a + b;
// }

// function DisplayData(data, batch) {
//     console.log(`i am from ${data} and My batch is EA${batch}`)
// }

// DisplayData(""PrepBytes"", FindSum(10, 9)); "

document.write('<h4>Q1 : "Guess the Output<br>function FindSum(a, b) {<br>    return a + b;<br>}<br><br>function DisplayData(data, batch) {<br>    console.log(""`i am from ${ data } and My batch is EA${ batch }`)<br>}<br>DisplayData(""PrepBytes"", FindSum(10, 9)); "<br><br><i style="color: darkred;">Code : <br>function FindSum(a, b) {<br>    return a + b;<i style="color: darkblue;"> // "19"</i><br>}<br><br>function DisplayData(data, batch) {<br>    console.log(`i am from ${ data } and My batch is EA${ batch }`)<i style="color: darkblue;"> // "I am from PrepBytes and My batch is EA19"</i><br>}<br>DisplayData(""PrepBytes"", FindSum(10, 9));</i></h4>');

function FindSum(a, b) {
    document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(a + b)}</i></h4>`);
    return a + b;
}

function DisplayData(data, batch) {
    console.log(`I am from ${data} and My batch is EA${batch}`);
    document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(`I am from ${data} and My batch is EA${batch}`)}</i></h4>`);

}

DisplayData("PrepBytes", FindSum(10, 9));
document.write(`<h4><mark>Reason for output:</mark><br>Definitions: FindSum(a, b): This function takes two parameters, a and b, and returns their sum by using the + operator.<br> DisplayData(data, batch): This function takes two parameters, data and batch, and uses console.log to display a message that includes these parameters as part of a template string.<br>Invocation: After defining the functions, the code proceeds to invoke the DisplayData function with the data is the string "PrepBytes".<br>0batch is the result of invoking the FindSum function with the arguments 10 and 9, which evaluates to 19.</h4 ><hr>`);




//Question 2:
// "Guess the output

// Abc();
// const Abc = function () {
//     let value = 20;
//     console.log(value);
// }"
document.write('<h4>Q2 : "Guess the output<br>Abc();<br>const Abc = function () {<br>    let value = 20;<br>    console.log(value);<br>}"<br><br><i style="color: darkred;">Code : <br>Abc();<br>const Abc = function () {<br>    let value = 20;<br>    console.log(value);<br>};</i></h4>');

const Abc = function () {
    let value = 20;
    console.log(value);
    document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(value)}</i></h4>`);
}
Abc();
document.write(`<h4><mark>Reason for output:</mark><br>const Abc = function () { ... }: This line declares a constant variable named Abc and assigns it a function expression. In JavaScript, functions can be assigned to variables just like any other data type.<br>Abc();: This line calls the Abc function. When this line is executed, the function is invoked, and the code within the function is executed.<br>Inside the Abc function:<br>let value = 20;: This line declares a variable named value and assigns it the value 20. This variable is scoped to the function, meaning it can only be accessed within the function.<br>console.log(value); : This line logs the value of the value variable to the console. In this case, it will log 20.</h4 ><hr>`);



//Question 3:
document.write('<h4>Q3 : "Guess the output<br>var a = 10;<br>    (function () {<br>        console.log(a);<br>        var a = 20;<br>    })();"<br><br><i style="color: darkred;">Code : <br>var a = 10;<br>    (function () {<br>        console.log(a);<br>        var a = 20;<br>    })();"</i></h4>');

var a = 10;
(function () {
    console.log(a);
    document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(a)}</i></h4>`);
    var a = 20;
})();
document.write(`<h4><mark>Reason for output:</mark><br>1.Scope: Inside the IIFE, there are two variables named a:<br>The local a declared with var a = 20; inside the IIFE.<br>The global a declared with var a = 10; outside the IIFE.<br>2.Closure: JavaScript functions have access to variables in their containing scope, which is known as closure. When you try to log a inside the IIFE, JavaScript looks for the nearest a in its scope chain, which is the local a declared within the function. However, at the time of logging, the local a has been declared (hoisted) but not yet assigned a value, so it's "undefined". This is why you see "undefined" in the console.<br>3.The output of the code is "undefined" because the local variable a inside the IIFE is hoisted to the top of the function, and at the time of the console.log statement, it hasn't been assigned a value yet. The global variable a with the value 10 remains unaffected within the IIFE's scope.</h4 ><hr>`);



//Question 4:
document.write('<h4>Q4 : "Guess the output<br>const greet = function (name) {<br>    return function (m) {<br>    console.log(`Hi!! ${name}, ${m}`);<br>}<br>}const greet_message = greet("EA19");<br>greet_message(""Welcome To PrepBytes"") <br><br><i style="color: darkred;">Code : <br>const greet = function (name) {<br>    return function (m) {<br>    console.log(`Hi!! ${name}, ${m}`);<br>}<br>}const greet_message = greet("EA19");<br>greet_message(""Welcome To PrepBytes"") </i></h4>');

const greet = function (name) {
    return function (m) {
        console.log(`Hi!! ${name}, ${m}`);
        document.write(`<h4><i style="color: darkblue;"> Output: ${JSON.stringify(`Hi!! ${name}, ${m}`)}</i></h4>`);
    }
}

const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes");
document.write(`<h4><mark>Reason for output:</mark><br>1.greet is a function that takes one parameter, name. Inside this function, it defines another anonymous function that takes a parameter m. This inner function logs a message using console.log(), which includes the values of name and m in a template string.<br>2. When you call greet('EA19'), you are essentially assigning the result of this call to the variable greet_message. This means greet_message now holds a reference to the inner function returned by the greet function. The value of name inside this inner function is 'EA19'.<br>3. Finally, when you call greet_message("Welcome To PrepBytes"), you are invoking the inner function with the argument "Welcome To PrepBytes". This triggers the execution of the inner function, and it logs the message to the console.<br><br>greet('EA19') assigns the inner function to greet_message, with the value of name set to 'EA19'.<br>When you call greet_message("Welcome To PrepBytes"), it logs "Hi!! EA19, Welcome To PrepBytes" because the inner function references the name variable from its outer scope (closure). In this case, the name variable is 'EA19'.</h4 ><hr>`);













// ... DisplayData("PrepBytes", FindSum(10, 9)) ...

// More outputs...
