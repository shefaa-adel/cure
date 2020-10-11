var cure = document.querySelector(".nav__icon");
var ul = document.querySelector(".nav__ul");
var end = document.querySelector(".nav__end");
var open = false;
var style=getComputedStyle(cure);
var center=style.textAlign;
// console.log(width);

function cureClick() {
    if (center === "center") {
       
        if (open == false) {
            ul.style.display = "block";
            end.style.display = "block";
            open = true;
        }
        else {
            ul.style.display = "none";
            end.style.display = "none";
            open = false;
        }
    }

}
cure.addEventListener("click", cureClick);


// stickynav
var navbar=document.querySelector(".nav");

window.onscroll=function(){
    if(window.pageYOffset > 81){
        this.navbar.classList.add("nav--sticky");

    }
    else{
        this.navbar.classList.remove("nav--sticky");
    }
};