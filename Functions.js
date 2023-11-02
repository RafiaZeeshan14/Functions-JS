                       /*****************Question 1****************/

// ****Write a program that returns your age in days. (take age as an input)

function calculateAgeInDays(age) {
 
    var daysInYear = 365;
   var ageInDays = age * daysInYear;
    return ageInDays;
}
var age = parseInt(prompt("Enter your age:"));
var ageInDays = calculateAgeInDays(age);
console.log(`Your age in days is approximately ${ageInDays} days.`);

                       /*****************Question 2****************/

//****Create a function that takes a number as an argument, increments the number by +1 and returns the result. (take number as an input)

function incrementNumber(number) {
    return number + 1;
}
var inputNumber = parseInt(prompt("Enter a number:"));
var incrementedNumber = incrementNumber(inputNumber);
console.log(`The number after incrementing by +1 is: ${incrementedNumber}`); 


                        /*****************Question 3****************/
                        
//****Create a function that takes a number as an argument, decrements the number by -1 and returns the result.

function decrementNumber(number) {
    return number - 1;
}
var inputNumber = parseInt(prompt("Enter a number:"));
var decrementedNumber = decrementNumber(inputNumber);
console.log(`The number after decrementing by -1 is: ${decrementedNumber}`);



                          /*****************Question 4****************/

//***Create a function that takes a number and return square of a number

function squareNumber(inputNumber) {
    var result = inputNumber * inputNumber;
    return result;
  }
  var inputNumber = parseFloat(prompt("Please enter a number:"));
  var squaredNumber = squareNumber(inputNumber);
  document.write("The square of the number is: " + squaredNumber + "." );

                          /*****************Question 5****************/

//***Create a function that tells current time in Y-m-d format.

  function getCurrentTimeInYMDFormat() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var day = String(now.getDate()).padStart(2, '0');
    var formattedTime = `${year}-${month}-${day}`;
    return formattedTime;
}
var currentYMDTime = getCurrentTimeInYMDFormat();
document.write( "The current time in Y-M-D format is: " + currentYMDTime + ".");

                          /*****************Question 6****************/

//****Create a function that tells current time from Date object in H:i:s format

function getCurrentTimeInHisFormat() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    
    var formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
}
var currentTimeHis = getCurrentTimeInHisFormat();
document.write( " the current time in H:i:s format is:" + currentTimeHis + "."); 




                         /*****************Question 1****************/

// ****Create a block of code that you can use several times.

function calculateSquare(number) {
    return number * number;
}

var number1 = 5;
var square1 = calculateSquare(number1);
console.log(`Square of ${number1} is: ${square1}`);

var number2 = 7;
var square2 = calculateSquare(number2);
console.log(`Square of ${number2} is: ${square2}`);


                 /*****************Question 2****************/

//**** Write a function that displays current date & time in your browser.

  function getCurrentDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    return dateTimeString;
  }
  
  function displayCurrentDateTime() {
    var dateTimeString = getCurrentDateTime();
    var displayElement = document.getElementById("currentDateTime");
  
    if (displayElement) {
      displayElement.textContent = dateTimeString;
    } else {
      document.write("The current date and time is :" + dateTimeString + ".");
    }
  }
  displayCurrentDateTime();


                        /*****************Question 3****************/

  //***Write a function that takes first &amp; last name and then it greets the user using his/her full name.

  function greetUserWithFullName() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    var fullName = firstName + " " + lastName;
  
    if (firstName && lastName) {
      alert("Hello, " + fullName + "! Welcome !");
    } else {
      alert("Please enter both your first and last names.");
    }
  }
  greetUserWithFullName();


                           /*****************Question 4****************/

  //******Write a function that adds two numbers (input by user) and returns the sum of two numbers.

  function addTwoNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var sum = num1 + num2;
  
    if (!isNaN(num1) && !isNaN(num2)) {
      document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + ".");
      return sum;
    } else {
      document.write("Please enter valid numbers.");
    }
  }
  var result = addTwoNumbers(); 


                            /*****************Question 5****************/

    /**** Calculator:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.*/

    function calculate(num1, num2, operator) {
        var result;
      
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              return "Division by zero is not allowed";
            }
            break;
          default:
            return "Invalid operator";
        }
      
        return result;
      }
      
      var num1 = parseFloat(prompt("Enter the first number:"));
      var num2 = parseFloat(prompt("Enter the second number:"));
      var operator = prompt("Enter the operator (+, -, *, /):");
      
      var calculationResult = calculate(num1, num2, operator);
      
      if (typeof calculationResult === "number") {
        document.write("Result is : " + calculationResult + ".");
      } else {
        document.write("Error: " + calculationResult);
      } 
    
                                   /*****************Question 6****************/
    
    //*****Write a function that squares its argument.
    
       function squareNumber(number) {
        var squared = number * number;
        return squared;
      }
      
      var input = parseFloat(prompt("Enter a number to square:"));
      
      if (!isNaN(input)) {
        var result = squareNumber(input);
        document.write("The square of " + input + " is: " + result + ".");
      } else {
        document.write("Please enter a valid number.");
      } 
    
                                    /*****************Question 7****************/
    
    //*****Write a function that computes factorial of a number.
    
       function calculateFactorial(number) {
        var factorial = 1;
      
        for (var i = 1; i <= number; i++) {
          factorial *= i;
        }
      
        return factorial;
      }
      
      var input = parseInt(prompt("Enter a number to calculate its factorial:"));
      
      if (!isNaN(input)) {
        var result = calculateFactorial(input);
        document.write("The factorial of " + input + " is: " + result + ".");
      } else {
        document.write("Please enter a valid number.");
      } 
    
                                /*****************Question 8****************/
    
    // ***Write a function that take start and end number as inputs & display counting in your browser.
    
      function displayCounting(start, end) {
        var counting = "";
        if (start <= end) {
          for (var i = start; i <= end; i++) {
            counting += i + " ";
          }
        } else {
          for (var i = start; i >= end; i--) {
            counting += i + " ";
          }
        }
      
        document.write(counting);
      }
      
      var startNumber = parseInt(prompt("Enter the start number:"));
      var endNumber = parseInt(prompt("Enter the end number:"));
      
      if (!isNaN(startNumber) && !isNaN(endNumber)) {
        displayCounting(startNumber, endNumber);
      } else {
        alert("Please enter valid numbers.");
      } 
     
                                     /*****************Question 9****************/
    
      /*****Write a nested function that computes hypotenuse of a right angle triangle.
       Hypotenuse 2 = Base 2 + Perpendicular 2
       Take base and perpendicular as inputs.
       Outer function : calculateHypotenuse()
       Inner function: calculateSquare() */
    
      function calculateHypotenuse(base, perpendicular) {
        function calculateSquare(number) {
          return number * number;
        }
      
        var baseSquare = calculateSquare(base);
        var perpendicularSquare = calculateSquare(perpendicular);
        var hypotenuseSquare = baseSquare + perpendicularSquare;
        var hypotenuse = Math.sqrt(hypotenuseSquare);
      
        return hypotenuse;
      }
      
      var base = parseFloat(prompt("Enter the length of the base:"));
      var perpendicular = parseFloat(prompt("Enter the length of the perpendicular:"));
      
      if (!isNaN(base) && !isNaN(perpendicular)) {
        var result = calculateHypotenuse(base, perpendicular);
        alert("The hypotenuse of the right-angled triangle is: " + result);
      } else {
        alert("Please enter valid numbers.");
      } 
    
                                 /*****************Question 11****************/
    
      /***  Write a function that accepts any number of arguments & find largest of the number.*/
    
      function findLargest() {
        var largest = parseFloat(arguments[0]);
        for (var i = 1; i < arguments.length; i++) {
          var currentNumber = parseFloat(arguments[i]);
          if (!isNaN(currentNumber) && currentNumber > largest) {
            largest = currentNumber;
          }
        }
        return largest;
      }
      
      var input = prompt("Enter a list of numbers separated by spaces:");
      var args = input.split(" ");
      
      var largestNumber = findLargest(...args);
      
      if (!isNaN(largestNumber)) {
        alert("The largest number is: " + largestNumber + ".");
      } else {
        alert("No valid numbers were entered.");
      }
      
                                     /*****************Question 12****************/
    
    /****Write a function that calculates the area of a rectangle.
    A = width * height
    Pass width and height in following manner:
    a. Arguments as values
    b. Arguments as variables*/
    
    
      function calculateRectangleArea(width, height) {
        var area = width * height;
        return area;
      }
      
    
      var widthValue1 = parseFloat(prompt("Enter the width of the rectangle (as value):"));
      var heightValue1 = parseFloat(prompt("Enter the height of the rectangle (as value):"));
      var area1 = calculateRectangleArea(widthValue1, heightValue1);
      
    
      var widthValue2 = parseFloat(prompt("Enter the width of the rectangle (as variable):"));
      var heightValue2 = parseFloat(prompt("Enter the height of the rectangle (as variable):"));
      var area2 = calculateRectangleArea(widthValue2, heightValue2);
      
      alert("a. Arguments as values: " + area1 + ".");
      alert("b. Arguments as variables: " + area2 +"."); 
    
                                /*****************Question 13****************/
    
      //****Write a function that receives an array &amp; returns the sorted array.
    
       function sortArray() {
        var input = prompt("Enter a list of numbers separated by spaces:");
        var inputArray = input.split(" ").map(Number);
        if (inputArray.some(isNaN)) {
          return "Invalid input. Please enter valid numbers.";
        }
        var sortedArray = inputArray.slice(); 
        sortedArray.sort(function(a, b) {
          return a - b;
        });
        return sortedArray;
      }
      var sortedResult = sortArray();
      
      if (Array.isArray(sortedResult)) {
        alert("Sorted Array: " + sortedResult.join(", "));
      } else {
        alert(sortedResult);
      } 
    
                            /*****************Question 14****************/ 
    
    /****** Write a function that takes numbers array, sums its elements
    & returns the sum. */
    
      function sumArrayElements() {
        var input = prompt("Enter a list of numbers separated by spaces:");
        var inputArray = input.split(" ").map(Number);
      
        if (inputArray.some(isNaN)) {
          return "Invalid input. Please enter valid numbers.";
        }
      
        var sum = 0;
        for (var i = 0; i < inputArray.length; i++) {
          sum += inputArray[i];
        }
      
        return sum;
      }
      
      var sumResult = sumArrayElements();
      
      if (typeof sumResult === "number") {
        document.write(" The Sum of Array Elements is: " + sumResult + ".");
      } else {
        document.write(sumResult);
      }
    
                                  /*****************Question 15****************/
    
      /**** Execute & monitor the output of following JS program:
    var param = function inner() {
    return typeof inner;
    }
    alert(param()); */
    
      var param = function inner() {
        return typeof inner;
      }
      alert(param());
       
                                      /*****************Question 16****************/
    
    //****Write a function that computes power of a number. E.g. 2 3 is 8.
    
      function calculatePower(base, exponent) {
        var result = 1;
      
        for (var i = 0; i < exponent; i++) {
          result *= base;
        }
      
        return result;
      }
      
      var base = parseFloat(prompt("Enter the base:"));
      var exponent = parseFloat(prompt("Enter the exponent:"));
      
      if (!isNaN(base) && !isNaN(exponent)) {
        var power = calculatePower(base, exponent);
        alert("The power of a number"+ " " + base + " ^ " + exponent + "="   + power + ".");
      } else {
        alert("Please enter valid numeric values for the base and exponent.");
      } 
    
                               /*****************Question 17****************/
    
      //**** Write a function that simulates a dice &amp; returns a random dice value.
    
       function rollDice() {
        var min = 1;
        var max = 6;
        var randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomValue;
      }
      
      var diceValue = rollDice();
      document.write("The dice rolled: " + diceValue + "."); 
    
                                       /*****************Question 18****************/
    
    /**** Write a JavaScript function that reverse a number.
    Example x = 32243;
    EXPECTED OUTPUT : 34223*/
    
       function reverseNumber(number) {
        var reversedNumber = 0;
        var sign = number < 0 ? -1 : 1;
        number = Math.abs(number); 
      
        while (number > 0) {
          reversedNumber = reversedNumber * 10 + (number % 10);
          number = Math.floor(number / 10);
        }
      
        return reversedNumber * sign;
      }
      
      var userInput = prompt("Enter a number to reverse: ");
      var numberToReverse = parseFloat(userInput);
      
      if (!isNaN(numberToReverse)) {
        var reversedResult = reverseNumber(numberToReverse);
        alert("The Reversed Number is: " + reversedResult + ".");
      } else {
        alert("Please enter a valid number.");
      }
      
                                   /*****************Question 19****************/
    
    /**** Write a JavaScript function that checks whether a passed string is palindrome or not?
    A palindrome is word, phrase, or sequence that reads the same
    backward as forward, e.g., madam. */
    
      function isPalindrome(str) {
        str = str.replace(/\s/g, "").toLowerCase();
        var reversedStr = "";
        for (var i = str.length - 1; i >= 0; i--) {
          reversedStr += str[i];
        }
        return str === reversedStr;
      }
      var userInput = prompt("Enter a string to check if it's a palindrome:");
      if (userInput !== null) {
        var result = isPalindrome(userInput);
        if (result) {
          alert("The input is a palindrome.");
        } else {
          alert("The input is not a palindrome.");
        }
      } else {
        alert("Please enter a valid string.");
      } 
    
                                      /*****************Question 20****************/
    
    /**** Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
    string in upper case.
    EXAMPLE STRING : 'the quick brown fox' 
    EXPECTED OUTPUT : 'The Quick Brown Fox' */
    
      function capitalizeFirstLetterOfEachWord(inputString) {
        var words = inputString.split(" ");
        var result = [];
      
        for (var i = 0; i < words.length; i++) {
          var word = words[i];
          var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
          result.push(capitalizedWord);
        }
      
        return result.join(" ");
      }
      
      var userInput = prompt("Enter a string to capitalize the first letter of each word:");
      if (userInput !== null) {
        var result = capitalizeFirstLetterOfEachWord(userInput);
        alert("Capitalized String: " + result + ".");
      } else {
        alert("Please enter a valid string.");
      } 
      
                             /*****************Question 21****************/
    
    /****Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
    EXAMPLE STRING : 'Web Development Tutorial' 
    EXPECTED OUTPUT : 'Development' */
    
      function findLongestWord(inputString) {
        var words = inputString.split(" ");
        var longestWord = "";
      
        for (var i = 0; i < words.length; i++) {
          var word = words[i];
          if (word.length > longestWord.length) {
            longestWord = word;
          }
        }
      
        return longestWord;
      }
      
      var userInput = prompt("Enter a string to find the longest word:");
      if (userInput !== null) {
        var result = findLongestWord(userInput);
        alert("The Longest Word is : " + result + ".");
      } else {
        alert("Please enter a valid string.");
      }
      
                               /*****************Question 22****************/
    
     /**** Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
    EXAMPLE STRING : 'The quick brown fox' 
    EXPECTED OUTPUT : 5 */
    
      function countVowels(inputString) {
        var vowels = "aeiouAEIOU";
        var count = 0;
      
        for (var i = 0; i < inputString.length; i++) {
          if (vowels.indexOf(inputString[i]) !== -1) {
            count++;
          }
        }
      
        return count;
      }
      
      var userInput = prompt("Enter a string to count the number of vowels:");
      if (userInput !== null) {
        var result = countVowels(userInput);
        alert("The Number of Vowels in the String  "+ userInput + " " + "is:" + result + ".");
      } else {
        alert("Please enter a valid string.");
      } 
    
                                  /*****************Question 24****************/
    
     /***  Write a JavaScript function to extract unique character from a string.
    EXAMPLE STRING : 'thequickbrownfoxjumpsoverthelazydog';
    EXPECTED OUTPUT : 'thequickbrownfxjmpsvlazydg'*/
    
      function extractUniqueCharacters(inputString) {
        var uniqueCharacters = "";
        
        for (var i = 0; i < inputString.length; i++) {
          if (uniqueCharacters.indexOf(inputString[i]) === -1) {
            uniqueCharacters += inputString[i];
          }
        }
      
        return uniqueCharacters;
      }
      
      var userInput = prompt("Enter a string to extract unique characters:");
      if (userInput !== null) {
        var result = extractUniqueCharacters(userInput);
        alert("Unique Characters: " + result);
      } else {
        alert("Please enter a valid string.");
      } 
    
                                    /*****************Question 26****************/
    
      /****The Age Calculator Forgot how old you are? Calculate it! Write a function named calculateAge that:
    o takes 2 arguments: birth year, current year. o calculates the 2 possible ages based on those years.
    o outputs the result to the screen like so: 'You are either NN or NN'
    Call the function three times with different sets of values.
    Bonus: Figure out how to get the current year in JavaScript instead of passing it in. */
    
    
      function calculateAge(birthYear, currentYear) {
        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;
      
        document.write("You are either " + age1 + " or " + age2 + " years old.");
      }
      
      var birthYear1 = parseInt(prompt("Enter your birth year (e.g., 1990):"));
      if (!isNaN(birthYear1)) {
        var currentYear = new Date().getFullYear();
        calculateAge(birthYear1, currentYear);
      } else {
        document.write("Please enter a valid birth year.");
      }
      
      var birthYear2 = parseInt(prompt("Enter another birth year:"));
      if (!isNaN(birthYear2)) {
        var currentYear = new Date().getFullYear();
        calculateAge(birthYear2, currentYear);
      } else {
        document.write("Please enter a valid birth year.");
      }
      
      var birthYear3 = parseInt(prompt("Enter one more birth year:"));
      if (!isNaN(birthYear3)) {
        var currentYear = new Date().getFullYear();
        calculateAge(birthYear3, currentYear);
      } else {
        document.write("Please enter a valid birth year.");
      } 
    
                 /*****************Question 28****************/
    
    /***The Geometrizer
    Create 2 functions that calculate properties of a circle, using
    the definitions here.
    Create a function called calcCircumference:
     Pass the radius to the function.
     Calculate the circumference based on the radius, and output
    'The circumference is NN'.
    Create a function called calcArea:
     Pass the radius to the function.
     Calculate the area based on the radius, and output 'The area
    is NN.' */
    
      
     function calcCircumference(radius) {
        var circumference = 2 * Math.PI * radius;
        document.write("The circumference is " + circumference +"." + " ");
    }
    
      function calcArea(radius) {
        var area = Math.PI * Math.pow(radius, 2);
        document.write("The area is " + area +"." );
      }
      
      var radius = parseFloat(prompt("Enter the radius of the circle:"));
      if (!isNaN(radius)) {
        calcCircumference(radius);
        calcArea(radius);
      } else {
        console.log("Please enter a valid radius.");
      } 
    
                     /*****************Question 29****************/
    
      /****The Temperature Converter
    Its hot out! Lets make a converter based on the steps here.
    Create a function called celsiusToFahrenheit:
     Store a celsius temperature into a variable.
     Convert it to fahrenheit and output NN°C is NN°f.
    Create a function called fahrenheitToCelsius:
     Now store a fahrenheit temperature into a variable.
     Convert it to celsius and output NN°F is NN°C. */
    

      var celsiusTemp = parseFloat(prompt("Enter a temperature in Celsius:"));
      if (!isNaN(celsiusTemp)) {
        celsiusToFahrenheit(celsiusTemp);
      } else {
        console.log("Please enter a valid Celsius temperature.");
      }
      var fahrenheitTemp = parseFloat(prompt("Enter a temperature in Fahrenheit:"));
      if (!isNaN(fahrenheitTemp)) {
        fahrenheitToCelsius(fahrenheitTemp);
      } else {
        console.log("Please enter a valid Fahrenheit temperature.");
      }
    function celsiusToFahrenheit(celsius) {
        var fahrenheit = (celsius * 9/5) + 32;
        console.log( "The Output is: "+ celsius + "°C is " + fahrenheit + "°F.");
      }

      function fahrenheitToCelsius(fahrenheit) {
        var celsius = (fahrenheit - 32) * 5/9;
        console.log("The Output is: "+ fahrenheit + "°F is " + celsius + "°C.");
      }
      
      
      
      
      
      
      
    