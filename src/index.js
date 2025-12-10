
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const container = document.getElementById('content');

document.querySelector('nav').addEventListener('click', e => {

    if (e.target.id === 'home-btn') {
        container.innerHTML = "";
        loadHome();
    }
    else if (e.target.id === 'menu-btn') {
        container.innerHTML = "";
        loadMenu();
    }
    else if (e.target.id === 'about-btn') {
        container.innerHTML = "";
        loadAbout();
    }
});
