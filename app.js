" use strict";

let intro = confirm("Hey there buddy, You ready to meet your hero ?");

let time = prompt("What time is it ?")


if (intro == true){
let user = prompt("What is your name?");
  console.log("Go on then!");


  let book = prompt("What is your favourite book by Tino? Late Night Organ Donor or Haunted House");
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
if (book.toLocaleLowerCase())(book == "Haunted House");{
  alert("I see you big man!!👻 ");
} else if (book == "Late Night Organ Donor");{
  alert("Ouuu, you a feisty one, arent yaa?😏");
} else {
  alert("Fake Fan Alert🚨");
}


} else {
  alert("He doesnt wanna meet you anyways, byeeeeee!");
}


document.write("Welcome to the Heartbreak, " + user + ". Dont forget to priorities peace, always !" );



