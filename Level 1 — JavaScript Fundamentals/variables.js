
/*
JavaScript Fundamentals - Variables 
- let 
- const 
- var

1.what is a variable? 
2.why use variables?
3. what is the difference between let, const and var?

*/

/**
1. What is a variable?
    A variable is a container that holds data or value under a specific name. 

 */
// For example 
 let instituteName = "Square Polytechnic Institute-Bogura"; // here name is a variable that holds the value "Square Polytechnic"
 let studentCount = 1000; // here studentCount is a variable that holds the value 1000

 /*
 
 2. Why use variables?
  simple say - variable are used to store data or value in computer memory so that we can use it later in our program.

  Bangla:
  সহজভাবে বললে - ভেরিয়েবলগুলি কম্পিউটার মেমরিতে ডেটা বা মান সংরক্ষণ করতে ব্যবহৃত হয় যাতে আমরা পরে আমাদের প্রোগ্রামে এটি ব্যবহার করতে পারি।
 
 */

  /*
  
    3. What is the difference between let, const and var?

    Var:
    - var is function scoped.
    - var can be re-declared and updated.
    - var can be hoisted.

        Bangla:
    Var:
    - var ফাংশন স্কোপড।
    - var পুনঃঘোষিত এবং আপডেট করা যেতে পারে।
    - var হোইস্ট করা যেতে পারে।


  */

    // For example: 

    var name = "John"; // declare a variable using var
    console.log(name); // output: John
    var name = "Doe"; // re-declare the variable using var
    console.log(name); // output: Doe
    name = "Smith"; // update the variable using var
    console.log(name); // output: Smith

    function testVar() {
        var x = 1;
        if (true) {
            var x = 2;
            console.log(x); // output: 2
        }
        console.log(x); // output: 2
    }

    // console.log(x); // output: ReferenceError: x is not defined because x is function scoped and not accessible outside the function

/**
 
Let:
    - let is block scoped.
    - let can be updated but not re-declared.
    - let can be hoisted but not initialized.

    Let:
    - let ব্লক স্কোপড।
    - let আপডেট করা যেতে পারে কিন্তু পুনঃঘোষিত করা যাবে না।
    - let হোইস্ট করা যেতে পারে কিন্তু ইনিশিয়ালাইজ করা যাবে না।

 */

// for example:
    let age = 25; // declare a variable using let
    console.log(age); // output: 25
    // let age = 30; // re-declare the variable using let (this will throw an error)
    age = 30; // update the variable using let
    console.log(age); // output: 30

    if(true) {
        let age = 35;
        console.log(age); // output: 35
    }
    // console.log(age); // output: ReferenceError: age is not defined because age is block scoped and not accessible outside the block

/**
    Const:
    - const is block scoped.
    - const cannot be updated or re-declared.
    - const can be hoisted but not initialized.

    Const:
    - const ব্লক স্কোপড।
    - const আপডেট বা পুনঃঘোষিত করা যাবে না।
    - const হোইস্ট করা যেতে পারে কিন্তু ইনিশিয়ালাইজ করা যাবে না।
 */

// For example:
    const pi = 3.14; // declare a variable using const
    console.log(pi); // output: 3.14
    // pi = 3.14159; // update the variable using const (this will throw an error)
    // const pi = 3.14159; // re-declare the variable using const (this will throw an error)