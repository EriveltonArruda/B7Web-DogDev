// MENU
let menuOpener = document.querySelector(".menu-opener");
let nav = document.querySelector("header nav");

menuOpener.addEventListener("click", () => {
  if (nav.classList.contains("opened")) {
    nav.classList.remove("opened");
    menuOpener.querySelector(".close-icon").style.display = "none";
    menuOpener.querySelector(".hamburguer-icon").style.display = "flex";
  } else {
    nav.classList.add("opened");
    menuOpener.querySelector(".close-icon").style.display = "flex";
    menuOpener.querySelector(".hamburguer-icon").style.display = "none";
  }
});

// TESTIMONIALS
/*
Esse código terá 2 etapas
Etapa 1: montar a estrutura
Etapa 2: fazer a estrutura mudar sozinha
*/

// Etapa 1
let testimonials = [
  { quote: '"Mais do que nunca, os animais de estimação são tratados como membros da família."', origin: "cbs.svg" },
  { quote: '"DogDev é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes 100% reais. Ingredientes que os humanos reconheceriam."', origin: "forbes.svg" },
  { quote: '"DogDev usa ingredientes simples e limpos em seus pratos."', origin: "fox.svg" },
  { quote: '"Vejo você [João] como um verdadeiro herói."', origin: "sharktank.svg" },
];
let testimonialQuote = document.querySelector(".testimonials .quote");
let testimonialsIcons = document.querySelector(".testimonials .icons");

for (let tindex in testimonials) {
  let img = document.createElement("img");
  img.setAttribute("src", "./assets/images/" + testimonials[parseInt(tindex)].origin);
  img.style.cursor = "pointer";
  img.addEventListener("click", () => fillTestimonial(parseInt(tindex)));
  testimonialsIcons.appendChild(img);
}

// Etapa 2
let currentTestimonial = 0;
let testimonialTimer;

const fillTestimonial = (index) => {
  clearTimeout(testimonialTimer);
  currentTestimonial = index;
  testimonialQuote.innerHTML = testimonials[currentTestimonial].quote;
  let imgs = testimonialsIcons.querySelectorAll("img");
  for (let img of imgs) img.style.opacity = 0.2;
  imgs[currentTestimonial].style.opacity = 1;
  testimonialTimer = setTimeout(nextTestimonial, 3000);
};

const nextTestimonial = () => {
  if (testimonials[currentTestimonial + 1]) {
    fillTestimonial(currentTestimonial + 1);
  } else {
    fillTestimonial(0);
  }
};

nextTestimonial();
