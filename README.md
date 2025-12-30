# restaurant-page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?logo=webpack&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?logo=githubpages&logoColor=white)


## Live Demo

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-b8926a?style=for-the-badge)](https://nishadnp.github.io/restaurant-page/)


## About 

A dynamic restaurant homepage built with **JavaScript modules** and **Webpack**, demonstrating DOM manipulation, tab navigation, and modular CSS styling. Bundled using split Webpack configs for development and production.


## Features

- **Dynamic content**: Homepage, Menu, and About sections generated via JavaScript.

- **Tabbed navigation**: Switch between Home, Menu, and About without page reload.

- **Responsive design**: Flexbox and CSS Grid layouts for structured content.

- **Category-specific styling**: Menu items styled according to their type.

- **Images with alt text**: All food images include descriptive alt attributes.

- **Footer with author link**: Includes copyright and GitHub link.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/nishadnp/restaurant-page.git
    cd restaurant-page
    ```
2. Install dependencies:

    ```bash
    npm install
    ```
3.  Start development server:

    ```bash
    npm run start
    ```
4. Open http://localhost:8080 in your browser.

## Build

```bash
npm run build
```
This bundles the application into the `dist` folder for production.

## Deployment

Deployed via **GitHub Pages**:

```bash 
npm run deploy
```

## Project Structure 

```
src/
├─ index.js         # Entry point
├─ home.js          
├─ menu.js          
├─ about.js         
├─ styles.css      
├─ assets/         
└─ template.html    # Base HTML 
```

## Author 
**Nishad Np** | [@nishadnp](https://github.com/nishadnp)