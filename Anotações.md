### Explicação dos códigos JS

## MENU

<!-- Selecionando os elementos que serão utilizados -->

let menuOpener = document.querySelector(".menu-opener");
let nav = document.querySelector("header nav");

 <!-- funcionamento do menu no celular -->
 <!-- Adicionando o evento de click para abrir e fechar o menu Hambúrguer -->

menuOpener.addEventListener("click", () => {

   <!-- se o nav tiver a classe opened, significa que o Menu tá aberto -->

if (nav.classList.contains("opened")) {

   <!-- então vou fechar quando clicar no hamburguer (ou no x) -->

    nav.classList.remove("opened");

   <!-- quando o nav não tiver a classe opened, removemos o "x" -->

    menuOpener.querySelector(".close-icon").style.display = "none";

   <!-- e o hamburguer aparecerá -->

    menuOpener.querySelector(".hamburguer-icon").style.display = "flex";

} else {

   <!-- se não tiver a classe opened -->
   <!-- ela será adicionada -->

    nav.classList.add("opened");

   <!-- Quando o menu estiver aberto, o "x" aparecerá -->

    menuOpener.querySelector(".close-icon").style.display = "flex";

   <!-- E o hamburguer desaparecerá -->

    menuOpener.querySelector(".hamburguer-icon").style.display = "none";

}
});

## Testimonials

<!--
Esse código terá 2 etapas
Etapa 1: montar a estrutura
Etapa 2: fazer a estrutura mudar sozinha
-->

<!-- Etapa 1: montar a estrutura -->
<!-- Preciso ter um array com a lista de frases, essas frases serão objetos -->

let testimonials = [

<!-- Dentro do objeto eu preciso da frase e da imagem (nome ou link), a frase fica no quote e a imagem fica no origin, lembre-se de que preciso de aspas simples, a aspa dupla é para ser enviado junto com o texto e aparecer na tela, afinal de contas é um depoimento. -->

{ quote: '"Mais do que nunca, os animais de estimação são tratados como membros da família."', origin: "cbs.svg" },
{ quote: '"DogDev é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes 100% reais. Ingredientes que os humanos reconheceriam."', origin: "forbes.svg" },
{ quote: '"DogDev usa ingredientes simples e limpos em seus pratos."', origin: "fox.svg" },
{ quote: '"Vejo você [João] como um verdadeiro herói."', origin: "sharktank.svg" },
];

<!-- Pegando a área do HTML e armazenando em variáveis, ou seja, a área de quote e de ícones -->

let testimonialQuote = document.querySelector(".testimonials .quote");
let testimonialsIcons = document.querySelector(".testimonials .icons");

<!-- Esse loop será feito na lista de frases, em cada frase será criado o elemento e será adicionado nos ícones ("icons") e pegar o texto -->

for (let tindex in testimonials) {

<!-- vou criar uma tag img -->

let img = document.createElement("img");

<!-- Dentro dela (tag img) vamos colocar o src que é o caminho da imagem e concatenamos com o origin para pegar o nome da imagem (está em parseInt porque o tindex vem em string e pra funcionar precisamos de um número, afinal de contas, o testimonials é um array) -->

img.setAttribute("src", "./assets/images/" + testimonials[parseInt(tindex)].origin);

<!-- estilização só para mostrar ao usuário que é clicável -->

img.style.cursor = "pointer";

<!-- Quando clicar em uma imagem específica, ele vai selecionar imagem com a frase e as outras imagens ficarão com opacidade 0.2 -->

img.addEventListener("click", () => fillTestimonial(parseInt(tindex)));

<!-- Depois de pegar a imagem, adicionamos ela na área dos ícones -->

testimonialsIcons.appendChild(img);
}

<!-- Etapa 2: fazer a estrutura mudar sozinha -->

<!-- Preciso de uma variável indicando o item ativo no momento -->

let currentTestimonial = 0;

<!-- também vou criar uma variável que vai armazenar o timer -->

let testimonialTimer;

<!-- Vou precisar de uma função que vai preencher um testimonial, ele vai preencher, clicar no ícone, etc. Essa função terá um index que vai receber o testimonial que quero exibir (index é o número do testimonial que quero exibir) -->

const fillTestimonial = (index) => {

<!-- Quando clicar em um ícone, o timeout precisa ser zerado para poder ler o texto -->

clearTimeout(testimonialTimer);

<!-- crio uma variável setando para o index, para armazenar o que vai ser exibido na tela -->

currentTestimonial = index;

<!-- Exibo a frase atual -->

testimonialQuote.innerHTML = testimonials[currentTestimonial].quote;

<!-- Quando um ícone estiver escolhido ele ficará com opacidade 1 enquanto os outros ficarão com opacidade 0.2 (isso será feito dentro do loop), mas antes eu preciso pegar a lista das imagens -->
<!-- Então pego a lista das imagens -->

let imgs = testimonialsIcons.querySelectorAll("img");

<!-- Loop para pegar todos os ícones e colocar todo mundo com opacidade 0.2 -->

for (let img of imgs) img.style.opacity = 0.2;

<!-- E a atual fica com a opacidade 1 -->

imgs[currentTestimonial].style.opacity = 1;

<!-- Sempre que o fillTestimonial for executado, ele vai limpar o timer e vai montar, então no final do processo precisamos definir um timer, vou deixar em 3 segundos. -->

testimonialTimer = setTimeout(nextTestimonial, 3000);
};

<!-- Essa função vai ficar responsável por verificar se existe um próximo testimonial, se existir, vai para o próximo, se não, volta para o primeiro  -->

const nextTestimonial = () => {

<!-- Nesse if vou adicionar o próximo testimonial, exemplo: Se meu testimonial atual for o 2 e o próximo for o 3  -->

if (testimonials[currentTestimonial + 1]) {

<!-- pega ele -->

fillTestimonial(currentTestimonial + 1);

<!-- Se não tiver, volta pro início. -->

} else {
fillTestimonial(0);
}
};

<!-- No final de tudo, eu executo essa função avulsa para que tudo funcione -->

nextTestimonial();
