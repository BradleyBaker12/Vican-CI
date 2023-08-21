// Get references to the buttons and the active square
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const iconImages1 = document.querySelectorAll(".icon-img-1"); // Use querySelectorAll
const iconImages2 = document.querySelectorAll(".icon-img-2"); // Use querySelectorAll
const activeSquare = document.querySelector('.active-square');

// Add click event listeners to the buttons
button1.addEventListener('click', () => setActiveButton(button1));
button2.addEventListener('click', () => setActiveButton(button2));

// Function to set the active button and move the active square
function setActiveButton(button) {
    // Retrieve the left position for the active square
    let leftPosition = 0;

    if (button === button1) {
        leftPosition = 10.5;
        button1.style.background = 'transparent';
        button2.style.background = '#000000';
        button1.style.border = '1px solid #000000';
        iconImages1.forEach(img => (img.style.opacity = 1));
        iconImages2.forEach(img => (img.style.opacity = 0));
    } 
    else if (button === button2) {
        leftPosition = 18.3;
        button1.style.background = '#000000';
        button2.style.background = 'transparent';
        button2.style.border = '1px solid #000000';
        iconImages1.forEach(img => (img.style.opacity = 0));
        iconImages2.forEach(img => (img.style.opacity = 1));
    }
    // Set the left position of the active square
    activeSquare.style.left = leftPosition + '%';
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".outline-icons, .solid-icons");
  
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Remove 'icon-active' class from all buttons
        buttons.forEach(function(btn) {
          btn.classList.remove("icon-active");
        });
  
        // Add 'icon-active' class to the clicked button
        button.classList.add("icon-active");
      });
    });
  });
  
  // Get the square and line elements
const square = document.querySelector('.square');
const line = document.querySelector('.line');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Calculate the scroll progress
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // Calculate the new position for the square
    const maxPosition = line.clientHeight - square.clientHeight;
    const newPosition = (maxPosition * scrollPercentage) / 100;

    // Update the square's position
    square.style.transform = `translateY(${newPosition}px)`;
});

document.addEventListener('DOMContentLoaded', function () {
  const outlineButton = document.getElementById('button-4');
  const solidButton = document.getElementById('button-3');
  const outlineIcons = document.querySelectorAll('.icon-1');
  const solidIcons = document.querySelectorAll('.icon-2');
  const dropdown = document.getElementById('icon-dropdown');
  const sections = document.querySelectorAll('.section'); // Select divs with class "section"

  outlineButton.addEventListener('click', function () {
    outlineIcons.forEach(icon => icon.style.display = 'block');
    solidIcons.forEach(icon => icon.style.display = 'none');
  });

  solidButton.addEventListener('click', function () {
    outlineIcons.forEach(icon => icon.style.display = 'none');
    solidIcons.forEach(icon => icon.style.display = 'block');
  });

  dropdown.addEventListener('change', function () {
    const selectedValue = dropdown.value;
    sections.forEach(section => {
      if (section.classList.contains(selectedValue + '-icons')) {
        section.style.display = 'flex';
      } else {
        section.style.display = 'none';
      }
    });
  });

sections.forEach((section, index) =>{
  if (index === 0){
    section.style.display = "flex";
  }
  else{
    section.style.display = "none";
  }
})

  const searchInput = document.getElementById('icon-search');

    searchInput.addEventListener('input', function () {
      const searchQuery = searchInput.value.toLowerCase().trim();

      sections.forEach(section => {
        const iconsInSection = section.querySelectorAll('.icon-container a');

        iconsInSection.forEach(iconLink => {
          const iconName = iconLink.getAttribute('href').split('/').pop().split('.')[0];
          const iconBox = iconLink.closest('.icon-box');

          if (iconName.includes(searchQuery)) {
            iconBox.style.display = 'block';
          } else {
            iconBox.style.display = 'none';
          }
        });
      });
    });
});
