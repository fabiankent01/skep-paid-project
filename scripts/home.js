const images = [
    "images/image1.jpg",
    "images/image3.jpg"
];

const randomIndex = Math.floor(Math.random() * images.length);
const style = document.createElement('style');
const header = document.querySelector('header');
header.classList.add('homeHeader');
style.innerHTML += `
  #header::before {
    background-image: url('${images[randomIndex]}');
  }
`;
header.appendChild(style);