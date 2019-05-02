var temp = 0;
function carousel() {
    var pictures = document.getElementsByClassName("mySlides");
    for (i = 0; i < pictures.length; i++)
    {
        pictures[i].style.display = "none";
    }
    temp++;
    if(temp > pictures.length)
    {
        temp = 1;
    }
    pictures[temp-1].style.display = "block";
    setTimeout(carousel, 2000);
}
carousel();
