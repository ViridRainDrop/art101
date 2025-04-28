// index.js - purpose and description here
// Author: Siyan Li
// Date: 04/28/2025

// Constants

// Variables
myTransport = ["Toyota CH-R"," Bike"," Bus"];

//Creat object for dream rider
myDreamRide = {
  make: "Nissan",
  model: "GT-R SpecV",
  color: "Black",
  year: 2009,
  age: function(){
      return 2025 - this.year;
  }
}
//output
document.writeln("The kinds of transport I use: ", myTransport, "</br>");
//This allow us to write object to the doc.
document.writeln("My Dream Ride: <pre>",
  JSON.stringify(myDreamRide, null, '\t'), "</pre>");


myDreamRide.age()
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
