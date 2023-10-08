var homesArr = new Array();
var indexOfHomesArr = 0;

// Image Slides

function addImages() {
    homesArr[0] = new Image();
    homesArr[0].src = "img/home-1.jpg";
    homesArr[1] = new Image();
    homesArr[1].src = "img/home-2.jpg";
    homesArr[2] = new Image();
    homesArr[2].src = "img/home-3.jpg";
    homesArr[3] = new Image();
    homesArr[3].src = "img/home-4.jpg";
    homesArr[4] = new Image();
    homesArr[4].src = "img/home-5.jpg";
}

function nextImage() {
    indexOfHomesArr++;
    if (indexOfHomesArr > homesArr.length - 1) {
        indexOfHomesArr = 0;
    }
    document.getElementById("interior-images").src = homesArr[indexOfHomesArr].src;
}

function showSubMenu(evt) {
    index = evt.currentTarget.index;
    var submenus = document.getElementsByClassName("category-list");
    console.log(submenus.length);
    console.log(index);
    var submenu = submenus[index];
    submenu.style.display = "block";
}

function hideSubMenu(evt) {
    index = evt.currentTarget.index;
    var submenus = document.getElementsByClassName("category-list");
    console.log(submenus.length);
    console.log(index);
    var submenu = submenus[index];
    submenu.style.display = "none";
}

// Page Initialization

function init() {
    addImages();
    var timer = setInterval(nextImage, 5000);

    var categories = document.getElementsByClassName("category");
    for (var i = 0; i < categories.length; i++) {
        categories[i].index = i;
        categories[i].addEventListener("mouseover", showSubMenu);
        categories[i].addEventListener("mouseout", hideSubMenu);
    }
}

window.onload = init();