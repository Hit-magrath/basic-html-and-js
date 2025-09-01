const listItems = document.querySelectorAll("li");
const myHeading = document.querySelector("h2");
const myImg = document.querySelector("img");

myImg.addEventListener("click",function() {
    const mySrc = myImg.getAttribute("src");
    if (mySrc === "images/firefox-imge.png") {
        myImg.setAttribute("src", "images/kakashi.png");
    } else {
        myImg.setAttribute("src", "images/firefox-imge.png");

    }
} )

myHeading.addEventListener("click" , function() {
    const myContent = myHeading.textContent;
    if (myContent === "Click me !") {
        myHeading.textContent= "Hello, world!";
    } else{
        myHeading.textContent= "Click me !";
    }
});


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

