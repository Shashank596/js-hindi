//dates


// let myDate = new Date()


// console.log(myDate);

// output--> 2025-01-24t09:07:56.424z

//  console.log(myDate.toDateString());
// output--> fri jan 24 2025

//  console.log(myDate.toString());
// output-->Fri Jan 24 2025 09:07:56 GMT+0000


//  console.log(myDate.toISOString());
// output --> 2025-01-24T09:07:56.424Z


//  console.log(myDate.toLocaleString());
//   1/24/2025, 9:07:56 AM


// console.log(myDate.toJSON());
//2025-01-24T09:07:56.424Z


// console.log(myDate.toUTCString());
//Fri, 24 Jan 2025 09:07:56 GMT


let newCreatedDate = new Date("2025, 1, 23")
// console.log(newCreatedDate.toLocaleString());

///+++++++++++++time+++++++++++++++++++++++++++++++++++
 
//let myTimeStamp = Date.now()


// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})



