const btnmobile = document.getElementById("btn-mobile"); //criando as variaveis que vão buscar o id no html
const navitens  = document.getElementById("nav-itens");
const menuBtnIcon = btnmobile.querySelector("i");

// a variavel btnmobile atraves do id do html, adiciona um evento de acordo com o clique
btnmobile.addEventListener("click", () => {
  // Abre/fecha o menu
  navitens.classList.toggle("open");

  // Verifica se está aberto
  const isOpen = navitens.classList.contains("open");

  // Troca o ícone do botão
  menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
});
