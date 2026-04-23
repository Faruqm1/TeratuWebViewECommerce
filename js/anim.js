var images = [
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/1.png"
];

var x = 0;

function changeImage() {
    document.getElementById("myImg").src = images[x];
    x++;
    if (x >= images.length) {
        x = 0;   
    }
}

setInterval(changeImage, 1000); // Call changeImage function every 1000ms