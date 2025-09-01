const listItems = document.querySelectorAll("li");
const myHeading1 = document.querySelector("h2");
const myImg = document.querySelector("img");

let myButton = document.querySelector("button");
let myMessage = document.getElementById("message");


myImg.addEventListener("click",function() {
    const mySrc = myImg.getAttribute("src");
    if (mySrc === "images/firefox-imge.png") {
        myImg.setAttribute("src", "images/kakashi.png");
    } else {
        myImg.setAttribute("src", "images/firefox-imge.png");

    }
} )

myHeading1.addEventListener("click" , function() {
    const myContent = myHeading1.textContent;
    if (myContent === "Click me !") {
        myHeading1.textContent= "Hello, world!";
    } else{
        myHeading1.textContent= "Click me !";
    }
});


function setUserName() {
    const myName = prompt("please enter your name.");
    if (!myName){
        setUserName();
    }else {
        localStorage.setItem("name" ,myName);
        myMessage.textContent = `Java Script is cool, ${myName}`;
    }
}


function toggleDone(e){
    if (!e.target.className){
        e.target.className = "done";
    } else{
        e.target.className = "";
    }
}

listItems.forEach((item)=> {
    item.addEventListener("click",toggleDone);
});

myButton.addEventListener("click" , () => {
    setUserName();
});

