// // const jsUser ={}  // empty object 

// // console.log(jsUser);

// // Singleton ----> object created using constructor method 

// // Object.create() // using constructor object create karte hai toh singleton kehte hai

// // const tinderUser = new Object()
// // tinderUser.name = "shashank"
// // tinderUser.age = 21
// // console.log(tinderUser);

// // object literal 

 const mySym = Symbol("key1")

  jsUser ={
      name: "shashank ",
      "full name" : "shashank ashlok ",
       age: 21,
        email: "shashankashlok07@gmail.com",
       isLoggedIn: false,
     lastLoginDays: ["sunday" , "monday"],
       [mySym]: "mykey1",   // without using bracket we get type of mysym as string......  ([Symbol(key1)]: 'mykey1' after using bracket)


}

// console.log(jsUser);

// // Accessing the keys in an object

// console.log(jsUser.email);
// console.log(jsUser["full name"]);

// // most of the times we use dot operator for accesing the keys 
// // full name was not accessible and symbol for some special cases 
// // we use [ ]
 

// // changing the values of keys


// jsUser.email = "shashank@cusat.com"

// console.log(jsUser);

// Object.freeze(jsUser)
// jsUser.email = "shashank@gogle.com"

console.log(jsUser);  

// after freezing no change will be made in object.......


// using function in objects 
 
jsUser.greeting = function(){
    console.log("hello user ");
    
}

console.log(jsUser.greeting());  // hello user // undefined will be discussed later ..........


jsUser.greetingtwo  = function()
{
    console.log(`hello user , ${this.name}`);  // using this to fetch data from user .........


    
}


console.log(jsUser.greetingtwo());

