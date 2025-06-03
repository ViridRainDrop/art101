$("#button-welcome").click(function(){
    let name = prompt("What's your name?");
$("#welcome").html("Hello, " + name + "!");})


function FizzBuzz() {
    for (i = 1; 1<= 200; i++){
    if (i%35 == 0) {console.log("BuzzBoom!");}
    else if (i%21 == 0) {console.log("FizzBoom!");}
    else if (i%15 == 0) {console.log("FizzBuzz!");}
    else if (i%3 == 0) {console.log("Fizz!");}
    else if (i%5 == 0) {console.log("Buzz!");}
    else if (i%7 == 0) {console.log("Boom!")}
    else {console.log(i);} 
    $("#output").append("<p>" + str + "</p>");
}
}

const ajaxobj = {
 url : "https://yesno.wtf/api",
// data:{},
  type:"GET",
  dataType:"json"
}

$("#sub").click(function(){
  $.ajax(ajaxobj)
//console.log("Click!");
  .done(function(data){
    console.log("Success!");
  console.log(data);
    let answer = data.answer
    let imageURL = data.image;
    let imageHTML = `<img src="${imageURL}">`;
    $("#ouput").html("<h1>" + answer);
})
  .fail(function( xhr, status, errorThrown ){
  console.log(errorThrown + " Status:" + status ); 
  });
})