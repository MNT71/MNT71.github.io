var myIndex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  
    }
    myIndex++;
    if (myIndex > slides.length) {
        myIndex = 1;
    }
    slides[myIndex-1].style.opacity = "1";  
    setTimeout(carousel, 5000); // Change image every 6 seconds
}
