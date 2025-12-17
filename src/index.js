import "./styles.css"
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

// Main content container
const container = document.getElementById('content');

// Map nav button IDs to their respective load functions
const routes = {
    "home-btn": loadHome,
    "menu-btn": loadMenu,
    "about-btn": loadAbout,
}

// Event delegation for tab navigation
document.querySelector('nav').addEventListener('click', e => {
    const loadFn = routes[e.target.id];
    if (!loadFn) return; // ignore clicks outside buttons

    container.innerHTML = "";
    loadFn();
});

// Load home page by default on initial load
loadHome();