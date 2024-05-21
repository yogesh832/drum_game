// function handleClick(){
//     alert("I got clicked");
// }
// document.querySelector("button").addEventListener("click", handleClick);


           ///or we can write this code by  another way.....
// document.querySelector("button").addEventListener("click", function(){
//addEventLitioner has option to "click" "keypress".
//     alert("I got clicked")
// })


// by using  for loop  we can add event listener to all other button.

var numberOfDrumButtons= document.querySelectorAll(".drum").length;

for ( var i=0; i < numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // alert("I got clicked");

var toCheck =this.innerHTML;

      makeSound(toCheck)

      buttonAnimation(toCheck);
        this.style.color="yellow";
    });
    }



    // we can also do the same thing from while loop..
    // numberOfDrumButtons= document.querySelectorAll(".drum").length;
    // var i = 0;
    // while (i < numberOfDrumButtons) {
      
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    //         alert("I got clicked");
    //     });
    //     i++;
    // }

//...."this"..... tag  work as inspect button for javascript
// console.log("this")
// after typing this code we have to go  in console and just click
// on ant of the elemetn and this tag give all information about
// that perticular element.





// function BellBoy (name, age ,varifiedByHotel, workExperience, knownLanguage ){
// this.name=name;
// this.age=age;
// this.varifiedByHotel=varifiedByHotel;
// this.workExperience=workExperience;
// this.knownLanguage=knownLanguage;
// }
// var BellBoy1= new BellBoy("Amit", 20, true, "4 years", "Hindi , English");


//     switch satatement is work as same as if and elese statement \
// here we use "   case "":   " to start the code and end with "break;"



//methods- these are the practice by wich we can add ways to compleate the function
// for  ex-
// function BellBoy (name, age ,varifiedByHotel, workExperience, knownLanguage ){
// this.name=name;
// this.age=age;
// this.varifiedByHotel=varifiedByHotel;
// this.workExperience=workExperience;
// this.knownLanguage=function(){
//     alert(" I knows different language"+" like Hindi , English" );
// }
// ;
// }
// var BellBoy1= new BellBoy("Amit", 20, true, "4 years", "Hindi , English");



// contructor function - these are the function which work as  a table to store data 
// there speical identity is there name has no use of cammle case

document.addEventListener("keypress",function(event){

    makeSound(event.key);

buttonAnimation(event.key);
});
function makeSound(key){

    switch(key){       //     switch satatement is work as same as if and elese statement \
                       // here we use "   case "":   " to start the code and end with "break;"
        
        case "w": 
        var tom1= new Audio('tom-1.mp3');
        tom1.play();
        break;

        case "a":
            var tom2= new Audio('tom-2.mp3');
            tom2.play();
            break;

 case "s":
 var tom3= new Audio('tom-3.mp3');
   tom3.play();
 break; 

  case "d":
     var tom4= new Audio('tom-4.mp3');
 tom4.play();
  break;

  case "j":
 var snare= new Audio('snare.mp3');
         snare.play();
        break;

     case "k":
      var kick= new Audio('kick-bass.mp3');
         kick.play();
         break;

         case "l":
       var crash= new Audio('crash.mp3');
     crash.play();
     break;
    
        default: console.log(toCheck)
    }
}
function buttonAnimation(curruntKey){
let activeButton= document.querySelector("."+ curruntKey);
activeButton.classList.add("pressed"); 
setTimeout(function(){
activeButton.classList.remove("pressed") }, 100)
// here we have to add time out to remove the class  and here 100 is in mili seconds means 0.1 seconds

};
