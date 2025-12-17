// Dynamically creates and renders the menu with categories and items
export default function loadMenu() {

    const content = document.getElementById('content'); // main container
    
    // Page headline
    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";
    content.appendChild(headline);

    // Menu data structured by category
    const menuItems = {
        Savory: [
            { name: "Chicken Wrap", price: 9 },
            { name: "Classic Beef Burger", price: 10 },
            { name: "Veggie Sandwich", price: 8 },
            { name: "Grilled Chicken Sandwich", price: 9 },
            { name: "Loaded Fries", price: 6 }
        ], 
        Salad: [
            { name: "Caesar Salad", price: 7 },
            { name: "Garden Fresh Salad", price: 6 },
            { name: "Greek Salad", price: 8 },
            { name: "Vegetable Salad", price: 7 }
        ],
        Dessert: [
            { name: "Chocolate Lava Cake", price: 5 },
            { name: "Cheesecake", price: 5 },
            { name: "Fruit Tart", price: 4 }, 
            { name: "Ice Cream Scoop", price: 3 },
        ],
        Beverages: [
            { name: "Lemon Mint Cooler", price: 4 },
            { name: "Fresh Orange Juice", price: 3.5 },
            { name: "Cappuccino", price: 4 },
            { name: "Iced Latte", price: 4 }
        ]
     };

    const menuDiv = document.createElement('div');
    menuDiv.id = "menu";

    // Loop through categories and create sections
    for (const category in menuItems) {

        const itemSection = document.createElement('article');
        itemSection.classList.add('menu-section', category.toLowerCase());
        
        // Category heading
        const sectionHeadline = document.createElement('h2');
        sectionHeadline.textContent = category;
        itemSection.appendChild(sectionHeadline);

        const itemList = document.createElement('ul');

        // Loop through items in the category
        for (const item of menuItems[category]) {
            const listItem = document.createElement('li');

            const itemName = document.createElement('p');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('p');
            itemPrice.textContent = '$' + item.price;

            listItem.append(itemName, itemPrice);
            itemList.appendChild(listItem);
        }

        itemSection.appendChild(itemList);
        menuDiv.appendChild(itemSection);
    }

    // Append the complete menu to main content
    content.appendChild(menuDiv);
    
}