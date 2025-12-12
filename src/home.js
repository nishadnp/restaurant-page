import image1 from './assets/images/cake-berries.jpg'
import image2 from './assets/images/fries-burger.jpg'
import image3 from './assets/images/three-beverages.jpg'
import image4 from './assets/images/vegetable-salad.jpg'

export default function loadHome() {

    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('home');

    const headline = document.createElement('h1');
    headline.textContent = "Urban Bites";
    container.appendChild(headline);

    const images = [
        { src: image1, alt: 'Cake with Berries on plate' },
        { src: image2, alt: 'Fries and Burger on a plate' },
        { src: image3, alt: 'Three glasses cups with juice' },
        { src: image4, alt: 'Vegetable salad in gray bowl' },
    ];
    
    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('image-container');

    for (let image of images) {
        const img = new Image();
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add("food-picture");
        imagesContainer.appendChild(img);
    }

    

    container.appendChild(imagesContainer);
    

    const description = document.createElement('p');
    description.textContent = "A vibrant modern café serving quick bites, bold flavors, and fresh ingredients — perfect for your everyday cravings.";
    container.appendChild(description);
    
    

    content.appendChild(container);
}

