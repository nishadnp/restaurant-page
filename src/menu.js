export default function loadMenu() {

    const content = document.getElementById('content');
    
    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";


    const itemSection = document.createElement('section');

    const itemHeadline = document.createElement('h2');
    itemHeadline.textContent = "Items:";
    
    const itemList = document.createElement('ul');

    const menuItems = [
        "Chicken Wrap — $9",
        "Classic Beef Burger — $10",
        "Loaded Fries — $6",
        "Lemon Mint Cooler — $4"
    ];
    
    for (let item of menuItems) {
        const itemNode = document.createElement('li');
        itemNode.classList.add("item");
        itemNode.textContent = item;
        itemList.appendChild(itemNode);
    }


    content.appendChild(headline);
    content.appendChild(itemSection);
    itemSection.appendChild(itemHeadline);
    itemSection.appendChild(itemList);
}