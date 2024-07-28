### Explicação dos códigos JS

## MENU HAMBÚRGUER

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
