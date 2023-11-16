const images = ["beom.jpg"];
const body = document.querySelector("body");

body.classList.add("img");

const randomBgImg = images[Math.floor(Math.random() * images.length)];

const definedBgImg = new Image();

definedBgImg.src = `https://tw3wt.github.io/nomadcoder_makeChrome/img/${randomBgImg}`;

document.body.style.backgroundImage = `url(${definedBgImg.src})`;
