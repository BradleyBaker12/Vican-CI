// Get references to the buttons and the active square
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const image1 = document.querySelector('.example-icons-image-1');
const image2 = document.querySelector('.example-icons-image-2');
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
        image1.style.opacity = '1';
        image2.style.opacity = '0';

    } else if (button === button2) {
        leftPosition = 18.3;
        button1.style.background = '#000000';
        button2.style.background = 'transparent';
        button2.style.border = '1px solid #000000';
        image1.style.opacity = '0';
        image2.style.opacity = '1';
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