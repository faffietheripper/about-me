" use strict";

let intro = confirm("Hey there buddy, You ready to meet your hero ?");

if (intro == true) {
  let user = prompt("What is your name?");
  console.log("Go on then!");

  let time = prompt("What time is it ? Enter First 2 digits only...");
  if (time <= 12) {
    alert("Good morning" + user);
  } else if (time <= 17) {
    alert("Good afternoon" + user);
  } else if (time <= 24) {
    alert("Good evening" + user);
  } else {
    alert("We are not on mars mate💩");
  }

  let book = prompt(
    "What is your favourite book by Tino? Late Night Organ Donor or Haunted House"
  );
  // allow lowercase book.toLowerCase()

  /*switch (book.toLowerCase()){
  case "Late Night Organ Donor" :
    alert("Ouuu, you a feisty one, arent yaa?😏");
    break;
  case " Haunted House " :
    alert("I see you big man!!👻 ");
    break;
  default :   alert("Fake Fan Alert🚨");
}
*/

  if (book.toLowerCase() === "haunted house") {
    alert("I see you big man!!👻 ");
  } else if (book === "late night organ donor") {
    alert("Ouuu, you a feisty one, arent yaa?😏");
  } else {
    alert("Fake Fan Alert🚨");
  }


  let nickname = prompt
  let food = prompt("What is Tino's favourite food?").toLowerCase();

  let foodILike = ["burgers", "wings", "pizza", "cake" ];
  
  for (let i=0; i < foodILike.length; i++){
    if (food == foodILike[i]){
      alert( "Faffie sure loves " + food + " !")
    }
  }


} else {
  alert("He doesnt wanna meet you anyways, byeeeeee!");
}

document.write(
  "Welcome to the Heartbreak, " +
    user +
    ". Dont forget to priorities peace, always !"
);
