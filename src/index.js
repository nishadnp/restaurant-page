
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const container = document.getElementById('content');

const routes = {
    "home-btn": loadHome,
    "menu-btn": loadMenu,
    "about-btn": loadAbout,
}

document.querySelector('nav').addEventListener('click', e => {
    const loadFn = routes[e.target.id];
    if (!loadFn) return;

    container.innerHTML = "";
    loadFn();
});

// Load home page by default
loadHome();