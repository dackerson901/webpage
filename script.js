alert("Welcome to 901 Puppies!");

var name = window.prompt("What is your name?");
var amount = window.prompt("How many dogs do you have?");
document.write("Hello " + name + ", Welcome to 901 Puppies! Do you like having " + amount + " dogs?");

var isDoglover = true;
var isYoung = true;

if(isDoglover && isYoung) {
    document.write("You are a young dog lover");
} else {
    document.write("You are either not young or not a doglover or both");
}

function welcome(){
    document.write("<h1>Hello, thanks for visiting my page. Have a look at our selection of puppies.</h1>");
}
welcome