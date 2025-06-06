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



const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
    }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => observer.observe(card));
