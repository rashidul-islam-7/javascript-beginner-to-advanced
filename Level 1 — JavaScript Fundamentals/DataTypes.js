/**
 
1. What is tha Data Type in JavaScript?
2. What are the different types of Data Types in JavaScript?

 */

/**
 * 1. What is the Data Type in JavaScript?
    A data type is a classification of data that tells the compiler or interpreter how the programmer intends to use the data.

    Bangla:
    Data Type হলো কোনো ডেটা বা ভ্যালুর ধরন।

 */

/*

2. How many types of Data Types are there in JavaScript?
    There are two types of data types in JavaScript:
    1. Primitive Data Types
    2. Non-Primitive Data Types

    Bangla:
    জাভাস্ক্রিপ্টে দুটি ধরনের ডেটা টাইপ রয়েছে:
    1. Primitive Data Types
    2. Non-Primitive Data Types

    Primitive Data Types:  
    Primitive data types are the basic data types that represent a single value.

    In JavaScript, primitives are immutable data values that are stored directly in memory (on the stack) rather than as reference objects.

    Bangla:
    Primitive data type হলো JavaScript-এর মৌলিক data type, যা একটি single/simple value ধারণ করে।
    Primitive Data type হলো অপরিবর্তনশীল ডাটা টাইপ।


    JavaScript has 7 primitive data types:
    1. String: A string represent textual data. it is written inside quotes.
    String হলো text বা লেখা সংরক্ষণ করার data type। সাধারণত quotes-এর মধ্যে লেখা হয়।

    let name = "Rashidul";
    let message = 'Hello';
    let code = `JavaScript`;
    
    2. Number: All numeric values, both integers and floating-point decimals (e.g., 42, 3.14, NaN, Infinity).

    let age = 25;
    let price = 99.5;
    let x = NaN;
    let y = Infinity;

    3. BigInt: BigInt is used to represent very large integers beyond the safe range of JavaScript's Number.
    BigInt ব্যবহার করা হয় অনেক বড় পূর্ণসংখ্যা রাখার জন্য, যেগুলো সাধারণ Number দিয়ে নিরাপদভাবে রাখা যায় না।
    let bigNumber = 9007199254740991n;


    4. Boolean: Logical values representing true or false.
    Boolean represents a logical value: either true or false.

    Boolean এমন একটি data type যার value শুধুমাত্র দুইটি হতে পারে:

    true → সত্য
    false → মিথ্যা

    let isLoggedIn = true;
    let isAdmin = false;    
    
    5. Undefined: Undefined means a variable has been declared but has not been assigned a value.

    কোনো variable declare করা হয়েছে কিন্তু কোনো value assign করা হয়নি, তখন তার value হলো undefined।
        let name;
        console.log(name)
    
    6. Null: Represents the intentional absence of a value.
    null ব্যবহার করা হয় যখন আমরা ইচ্ছা করে কোনো value নেই বলে নির্ধারণ করি।
    let user = null;
    
    7. Symbol: Symbol is a unique and immutable primitive value, mainly used as unique keys for object properties.
    Symbol হলো একটি unique এবং immutable primitive value। এটি বিশেষ করে object-এর property-এর জন্য unique key তৈরি করতে ব্যবহার করা হয়।

        let id = Symbol("id");
        console.log(id);


String    → Text
Number    → Number
BigInt    → Very large Integer
Boolean   → True / False
Undefined → Not assigned
Null      → Intentionally empty
Symbol    → Unique identifier

*/

/*

Non-Primitive Data Types 

Non-primitive data types are data types that can store multiple values or complex data and are stored/referenced through objects.

বাংলা:
Non-primitive data type হলো এমন data type যা একাধিক value বা complex data ধারণ করতে পারে। এগুলো JavaScript-এ reference type হিসেবেও পরিচিত।

        প্রধান Non-Primitive Types
        1. Object
        2. Array
        3. Function


    1. Object
    An Object is a collection of data stored as key-value pairs.

    Object হলো এমন একটি data structure যেখানে data key-value pair আকারে রাখা হয়।

    const person = {
        name: "Rashidul",
        age: 25,
        city: "Dhaka"
    };

    এখানে
    name → "Rashidul"
    age  → 25
    city → "Dhaka"
    name, age, city হলো keys এবং "Rashidul", 25, "Dhaka" হলো values।

NOTE: Object নিয়ে বিস্তারিত পড়ব Object Chapter এ।

    2. Array
    An Array is an ordered collection of multiple values.

    Array হলো একটি ordered collection, যেখানে একসাথে একাধিক value রাখা যায়

        const fruits = ["Apple", "Mango", "Banana"];

    এখানে:
        Index 0 → Apple
        Index 1 → Mango
        Index 2 → Banana
        Array-এর index সাধারণত 0 থেকে শুরু হয়।

NOTE: Array নিয়ে বিস্তারিত পড়ব Array Chapter এ।

    

    3. Function
    A Function is a reusable block of code to perform a specific task.

    Function হলো এমন একটি reusable code block, যা কোনো নির্দিষ্ট কাজ সম্পন্ন করার জন্য তৈরি করা হয়।

        function add(a, b) {
        return a + b;
        }

        console.log(add(10, 20));


NOTE: Function নিয়ে বিস্তারিত পড়ব Function Chapter এ।

*/
