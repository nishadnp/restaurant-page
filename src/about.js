// Dynamically creates the About Us page with sections for info, hours, and contact
export default function loadAbout() {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.classList.add('about-us');

  // --- ABOUT ---
  const aboutTitle = document.createElement('h1');
  aboutTitle.textContent = "About Us";

  const aboutText = document.createElement('p');
  aboutText.textContent =
    "Urban Bites is a modern café dedicated to serving fresh, flavorful, and fast meals. We focus on quality ingredients, bold flavors, and a vibrant atmosphere for our guests.";

  container.appendChild(aboutTitle);
  container.appendChild(aboutText);

  // --- WORKING HOURS ---
  const hoursSection = document.createElement('section');
  const hoursTitle = document.createElement('h2');
  hoursTitle.textContent = "Working Hours";

  const hoursList = createList([
    "Monday – Friday: 8:00 AM – 8:00 PM",
    "Saturday – Sunday: 9:00 AM – 6:00 PM"
  ]);

  hoursSection.appendChild(hoursTitle);
  hoursSection.appendChild(hoursList);
  container.appendChild(hoursSection);

  // --- CONTACT ---
  const contactSection = document.createElement('section');
  const contactTitle = document.createElement('h2');
  contactTitle.textContent = "Contact Us";

  const contactList = createList([
    "Phone: 555-0199",
    "Email: info@urbanbites.com",
    "Address: Downtown, Food Court 3"
  ]);

  contactSection.appendChild(contactTitle);
  contactSection.appendChild(contactList);
  container.appendChild(contactSection);

  // Append the complete About Us content to main container
  content.appendChild(container);
}


// Helper function to create an unordered list from an array of strings
function createList(items) {
  const ul = document.createElement('ul');

  for (let item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }

  return ul;
}
