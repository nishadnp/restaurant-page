export default function loadHome() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('home');

    const headline = document.createElement('h1');
    headline.textContent = 'My Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Best food in the universe.';

    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/300';
    
    container.appendChild(headline);
    container.appendChild(description);
    container.appendChild(image);

    content.appendChild(container);
}