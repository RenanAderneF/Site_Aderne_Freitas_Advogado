/* Seleção de elementos: */

const nav_list = document.getElementById("nav_list");
const bar_nav = document.getElementById("menu_bars");

/* Eventos: */

nav_list.style.display = "none"

document.addEventListener("click", (e)=> {

    if(e.target.id == "menu_bars" && nav_list.style.display == "none") {
        nav_list.style.display = "flex";
        bar_nav.classList.replace("fa-bars", "fa-x");
    }

    else if(e.target.id == "menu_bars" && nav_list.style.display == "flex") {
        nav_list.style.display = "none";
        bar_nav.classList.replace("fa-x", "fa-bars");
    }
});

/* Barra de navegação: */

const exibeNav = () => {

    alert("Oi");
    

    if(nav_display === "none") {
        nav_list.style.display = "flex";
    }

    else if(nav_display === "flex") {
        nav_list.style.display = "none";
    }
}