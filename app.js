" use strict";

let introd = confirm("Hey there buddy, You ready to meet your hero ?");

if (introd == true) {
  let user = prompt("What is your name?");
  console.log("Go on then!");

  /* getTime();
  getFood();
  getBook();
  getSport();
  getNumber();
  getNickname();
*/

  let quizScore = 0;

  function getTime() {
    let time = prompt("What time is it ? Enter First 2 digits only...");
    if (time <= 12) {
      alert("Good morning " + user);
    } else if (time <= 17) {
      alert("Good afternoon " + user);
    } else if (time <= 24) {
      alert("Good evening " + user);
    } else {
      alert("We are not on mars mate💩");
    }
  }

  function getBook() {
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
  }

  function getNickname() {
    let nickname = prompt(
      "From the following : Faffie, Bambino, Tinooo. Which one is your hero's nickname?"
    ).toLowerCase();
    let rightNickname = ["faffie", "tinoooo"];

    for (let i = 0; i < rightNickname.length; i++) {
      if (nickname == rightNickname[i]) {
        alert("Thats right!!");
        quizScore++;
      } else {
        alert("are you tryna waste my time?");
      }
    }
  }

  function getFood() {
    let food = prompt("What is Tino's favourite food?").toLowerCase();

    let foodILike = ["burgers", "wings", "pizza", "cake"];

    for (let i = 0; i < foodILike.length; i++) {
      if (food == foodILike[i]) {
        alert("Faffie sure loves " + food + " !");
        quizScore++;
      } else {
        alert("ewww ehat is that?🤮 ");
      }
    }

    function getSport() {
      let sport = prompt(
        "What is Tino's favourite sport? There is only one correct answer x"
      ).toLowerCase;

      let sportILike = "rugby";
      if (sport == sportILike) {
        alert("He doesnt only love it, hes great at it too lol😉 ");
        quizScore++;
      } else {
        alert("eww what is that?");
      }
    }

    function getNumber() {
      alert("But there's just one more thing.");
      let tries = 4;
      let guessANumber = prompt(
        "I'm thinking of a number between 1 and 10. What is it? You have " +
          tries +
          " tries remaining"
      );

      for (let i = 4; i > 0; i--) {
        console.log("i = " + i);
        if (i == 1) {
          alert("aww it seems you ran out if tries :( It was 9 all along!");
          break;
        }
        if (guessANumber == 9) {
          alert("Well done that was it");
          console.log("Correct answer!");
          quizScore++;
          return;
        } else if (question6 < 9) {
          guessANumber = prompt(
            "Nope, too small! You have " + (i - 1) + " tries left"
          );
          console.log("Incorrect, too small!. " + (i - 1) + "tries left!");
        } else if (question6 > 9) {
          guessANumber = prompt(
            "Bro it has to be below 10🤦. You have " + (i - 1) + " tries left"
          );
          console.log("Incorrect, too big!. " + (i - 1) + "tries left!");
        } else if (isNaN(question6)) {
          guessANumber = prompt(
            "That is not a number! You have " + (i - 1) + " tries left"
          );
          console.log("Incorrect, not a number. " + (i - 1) + "tries left!");
        }
      }
    }
  }

  function getScore(){
    alert("WHEEYYYYY! You made it to the end. You got " + quizScore + "/4");
  }

  alert(
    "Welcome to the Heartbreak, " +
      user +
      ". Dont forget to priorities peace, always !"
  );

} else {
  alert("He doesnt wanna meet you anyways, byeeeeee!");
}

// slides
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
