document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu");
  if (!menuContainer) {
    console.error("Elemento #menu não encontrado.");
    return;
  }

  // Menu HTML direto (sem fetch, para rodar mesmo em file://)
  const menuHTML = `
    <nav class="navbar">
      <div id="btn-mobile">
        <i class="fa-solid fa-bars"></i>
      </div>
      <ul id="nav-itens" class="nav-list">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/assets/html/login.html">Login</a></li>
        <li><a href="/assets/html/cadastro.html">Cadastro</a></li>
      </ul>
    </nav>
  `;

  menuContainer.innerHTML = menuHTML;

  // ======== Interação do menu mobile ========
  const btnmobile = menuContainer.querySelector("#btn-mobile");
  const navitens = menuContainer.querySelector("#nav-itens");
  const menuBtnIcon = btnmobile.querySelector("i");

  if (btnmobile && navitens && menuBtnIcon) {
    btnmobile.addEventListener("click", () => {
      navitens.classList.toggle("open");
      const isOpen = navitens.classList.contains("open");
      menuBtnIcon.setAttribute(
        "class",
        isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
      );
    });
  }
});
