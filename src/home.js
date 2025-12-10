export default function loadHome() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('home');

    const headline = document.createElement('h1');
    headline.textContent = "Urban Bites";

    const tagline = document.createElement('p');
    tagline.textContent = "Fresh. Fast. Flavorful."

    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/300';

    const description = document.createElement('p');
    description.textContent = "A vibrant modern café serving quick bites, bold flavors, and fresh ingredients — perfect for your everyday cravings.";

    
    container.appendChild(headline);
    container.appendChild(tagline);
    container.appendChild(description);
    container.appendChild(image);

    content.appendChild(container);
}