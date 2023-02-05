let btn = document.querySelector(".btn");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

btn.addEventListener("click", function() {
    if(moon.style.display == "none"){
        btn.style.backgroundColor = "black"
        moon.style.display = 'block'
        sun.style.display = 'none'
        document.body.classList.remove("active");
    }else{
        btn.style.backgroundColor = "white"
        moon.style.display = 'none'
        sun.style.display = 'block'
        document.body.classList.add("active");
    }
})

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");

let img__one = document.querySelector(".img__one");
let img__two = document.querySelector(".img__two");
let img__three = document.querySelector(".img__three");
let img__four = document.querySelector(".img__four");

img__two.style.display = "none";
img__three.style.display = "none";
img__four.style.display = "none";

one.addEventListener("click", function() {
    img__one.style.display = "block";
    img__two.style.display = "none";
    img__three.style.display = "none";
    img__four.style.display = "none";
});

two.addEventListener("click", function() {
    img__one.style.display = "none";
    img__two.style.display = "block";
    img__three.style.display = "none";
    img__four.style.display = "none";
});

three.addEventListener("click", function() {
    img__one.style.display = "none";
    img__two.style.display = "none";
    img__three.style.display = "block";
    img__four.style.display = "none";
});

four.addEventListener("click", function() {
    img__one.style.display = "none";
    img__two.style.display = "none";
    img__three.style.display = "none";
    img__four.style.display = "block";
});