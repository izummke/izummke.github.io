var mobileMenuIcon = document.getElementById("mobile-menu-icon");
var menu = document.getElementById("main-menu");


if(mobileMenuIcon) {
    mobileMenuIcon.addEventListener("click", function(){
        mobileMenuIcon.classList.toggle("opened");
        menu.classList.toggle("opened");
    })
}
//button.addEventListener('click', function(){
 //   console.log("kliknięty przycisk");

//})
//.addEventListener('click', function(){})