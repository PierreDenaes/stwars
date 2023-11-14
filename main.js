const myButton = document.querySelector('.menuButton');
var myMenu = document.querySelector('nav');

myButton.addEventListener('click', () => {
    if( myMenu.style.display === "none") {
        myMenu.style.display = "block";
    }else {
        myMenu.style.display = "none";
    }

});