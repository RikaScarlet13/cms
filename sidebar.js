
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");

});
const subMenu = document.querySelector('.sub-menu');
const menuOption = document.querySelector('.fa-caret-down');

menuOption.onclick = () => {
    subMenu.classList.toggle('active');
}
