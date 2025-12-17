import image1 from './assets/images/cake-berries.jpg'
import image2 from './assets/images/fries-burger.jpg'
import image3 from './assets/images/three-beverages.jpg'
import image4 from './assets/images/vegetable-salad.jpg'

// Dynamically creates and populates the homepage content
export default function loadHome() {

    const content = document.getElementById('content'); // main container

    const container = document.createElement('div');
    container.classList.add('home');

    // Page headline
    const headline = document.createElement('h1');
    headline.textContent = "Urban Bites";
    container.appendChild(headline);

    // Image data for the homepage
    const images = [
        { src: image1, alt: 'Cake with Berries on plate' },
        { src: image2, alt: 'Fries and Burger on a plate' },
        { src: image3, alt: 'Three glasses cups with juice' },
        { src: image4, alt: 'Vegetable salad in gray bowl' },
    ];
    
    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('image-container');

    // Render each image
    for (let image of images) {
        const img = new Image();
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add("food-picture");
        imagesContainer.appendChild(img);
    }

    container.appendChild(imagesContainer);
    
    // Description paragraph
    const description = document.createElement('p');
    description.textContent = "A vibrant modern café serving quick bites, bold flavors, and fresh ingredients — perfect for your everyday cravings.";
    container.appendChild(description);
    
    // Append all to main content
    content.appendChild(container);
}

