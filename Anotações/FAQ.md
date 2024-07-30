### Explicação dos códigos JS

## FAQ

<!-- Preciso ter uma variável para saber qual FAQ está aberto no momento -->

let currentFaq = 0;

<!--
E uma lista de quais são os faqs para poder fazer as manipulações.
Esses itens serão armazenados em um array
 -->

let faqItems = document.querySelectorAll(".faq .accordion .item");

<!-- Será necessário criar um evento de clique em cada um deles. -->
<!-- Esse loop terá uma função que terá um elemento e um index -->

faqItems.forEach((el, index) => {

  <!-- Vamos pegar o elemento e dentro dele vamos procurar uma classe title -->
  <!-- Dentro da classe title adicionamos o evento de clique (será uma função) -->

el.querySelector(".title").addEventListener("click", () => setFaq(index));
});

<!-- Função que vai fechar todos os títulos e abrir o que foi clicado. -->

const setFaq = (index) => {

  <!-- Setar para saber quem está aberto naquele momento (já que começa com 0) -->

currentFaq = index;

<!-- Antes de entrar no loop, verifico se o item que está aberto tem a classe opened -->
<!-- Se ele tem, significa que clicou no item que já estava aberto -->

if (faqItems[currentFaq].classList.contains("opened")) {

  <!-- Então preciso fechar ele -->

    faqItems[currentFaq].classList.remove("opened");

  <!-- Preciso dar um return para parar  a execução do if -->

    return;

}

<!-- Quem tiver a classe opened, vai ser removido -->

for (let item of faqItems) {
item.classList.remove("opened");
}

  <!-- Depois de fechar os titles que tinham o opened, ele vai adicionar no que foi clicado -->
  <!-- Assim o faq será aberto -->

faqItems[currentFaq].classList.add("opened");
};
