var icon = document.querySelector(".nav__dropdown");
var ul = document.querySelector(".nav__ul");
var end = document.querySelector(".nav__end");
// var cure = document.querySelector(".nav__icon");
var open = false;
// var style = getComputedStyle(icon);
// var visible = style.visibility;
// console.log(visible);

function cureClick() {
    

        if (open == false) {
            ul.style.display = "block";
            end.style.display = "block";
           
            icon.classList.remove("fa-chevron-circle-down");
            icon.classList.add("fa-chevron-circle-up");
            open = true;
        }
        else {
            ul.style.display = "none";
            end.style.display = "none";
           
            icon.classList.remove("fa-chevron-circle-up");
            icon.classList.add("fa-chevron-circle-down");
            open = false;
        }
    

}
icon.addEventListener("click", cureClick);

console.log(pageYOffset);
// stickynav
var navbar = document.querySelector(".nav");

window.onscroll = function () {
    if (window.pageYOffset > 80) {
        this.navbar.classList.add("nav--sticky");

    }
    else {
        this.navbar.classList.remove("nav--sticky");
    }
};