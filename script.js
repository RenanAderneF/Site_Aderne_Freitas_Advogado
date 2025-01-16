/* Seleção de elementos: */

const nav_list = document.getElementById("nav_list");
const menu_bars = document.getElementById("menu_bars");

/* Eventos: */

//Exibe e esconde navegação com base no tamanho: 
window.addEventListener("resize", ()=> {

    if(window.innerWidth <= 800) {
        nav_list.style.display = "none";
        menu_bars.style.display = "block";
        
    }

    else if(window.innerWidth >= 800) {
        nav_list.style.display = "flex";
    }
})

//Exibe e esconde navegação com base no clique no menu de barras:
document.addEventListener("click", (e)=> {

    if(e.target.id == "menu_bars" && nav_list.style.display == "none") {
        nav_list.style.display = "flex";
        menu_bars.classList.replace("fa-bars", "fa-x");
    }

    else if(e.target.id == "menu_bars" && nav_list.style.display == "flex") {
        nav_list.style.display = "none";
        menu_bars.classList.replace("fa-x", "fa-bars");
    }
});

document.addEventListener('DOMContentLoaded', ()=> {
    nav_list.style.display = "none";
})

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