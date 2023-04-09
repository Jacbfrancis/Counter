
var counter = 0;


document.querySelectorAll("button")[0].addEventListener("click", function() {
    counter--;
    document.querySelector("h2").innerText = counter;
    color();
});

document.querySelectorAll("button")[1].addEventListener("click", function() {
    counter = 0;
    document.querySelector("h2").innerText = counter;
    color();
})


document.querySelectorAll("button")[2].addEventListener("click", function() {
    counter++;
    document.querySelector("h2").innerText = counter;
    color();
})
 

function color() {
    if (counter < 0) {
        document.querySelector("h2").style.color = "red"; 
    }else if (counter > 0){
        document.querySelector("h2").style.color = "green";
    }else {
        document.querySelector("h2").style.color = "black"
    }
}