### Explicação dos códigos JS

## FAQ

<!-- Preciso ter uma variável para saber qual FAQ está aberto no momento -->

let currentFaq = 0;

<!--
E uma lista de quais são os faqs para poder fazer as manipulações.
Esses itens serão armazenados em um array.
 -->

let faqItems = document.querySelectorAll(".faq .accordion .item");

<!-- Será feito um loop em cada elemento para adicionar um evento de clique dentro do título. -->
<!-- Esse loop terá uma função que terá um elemento e um index -->

faqItems.forEach((el, index) => {

  <!-- Vamos pegar o elemento e dentro dele vamos procurar uma div com a classe title -->
  <!-- Dentro da classe title adicionamos o evento de clique (será uma função) -->

el.querySelector(".title").addEventListener("click", () => setFaq(index));
});

<!-- Função que vai fechar todos os títulos e abrir o que foi clicado. -->

const setFaq = (index) => {

  <!-- Preciso setar o currentfaq com o index para saber quem está aberto naquele momento (já que currentFaq começa com 0) -->

currentFaq = index;

<!-- Esse if abre e fecha o elemento quando clica nele, o for de baixo não fecha o elemento que está aberto quando ele é clicado, apenas fecha um faq que estava aberto e abre o que foi clicado, mas se clicar no mesmo elemento que acabou de ser aberto, ele não fechará o faq, para isso serve o if abaixo -->
<!-- Antes de entrar no loop, verifico se o item que está aberto tem a classe opened -->
<!-- Se ele tem, significa que clicou no item que já estava aberto -->

if (faqItems[currentFaq].classList.contains("opened")) {

  <!-- Então fecho ele -->

    faqItems[currentFaq].classList.remove("opened");

  <!-- Preciso dar um return para parar a execução do if -->

    return;

}

<!-- Loop que vai abrir o faq que foi clicado e fechar o faq que estava aberto -->
<!-- Quem tiver a classe opened, vai ser removido e o faq será fechado -->

for (let item of faqItems) {
item.classList.remove("opened");
}

  <!-- Depois de fechar os titles que tinham o opened, ele vai adicionar no que foi clicado, assim o faq será aberto -->

faqItems[currentFaq].classList.add("opened");
};
