// Get references to the buttons and the active square
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const activeSquare = document.querySelector('.active-square');

// Add click event listeners to the buttons
button1.addEventListener('click', () => setActiveButton(button1));
button2.addEventListener('click', () => setActiveButton(button2));
button3.addEventListener('click', () => setActiveButton(button3));

// Function to set the active button and move the active square
function setActiveButton(button) {
    // Retrieve the left position for the active square
    let leftPosition = 0;

    if (button === button1) {
        leftPosition = 12;
        button1.style.background = 'transparent';
        button2.style.background = '#000000';
        button3.style.background = '#000000';
        button1.style.border = '1px solid #000000';
        document.querySelector('.image-1').style.opacity = '1';
        document.querySelector('.image-2').style.opacity = '0';
        document.querySelector('.image-3').style.opacity = '0';
    } else if (button === button2) {
        leftPosition = 47.5;
        button1.style.background = '#000000';
        button2.style.background = 'transparent';
        button3.style.background = '#000000';
        button2.style.border = '1px solid #000000';
        document.querySelector('.image-1').style.opacity = '0';
        document.querySelector('.image-2').style.opacity = '1';
        document.querySelector('.image-3').style.opacity = '0';
    } else if (button === button3) {
        leftPosition = 83;
        button1.style.background = '#000000';
        button2.style.background = '#000000';
        button3.style.background = 'transparent';
        button3.style.border = '1px solid #000000';
        document.querySelector('.image-1').style.opacity = '0';
        document.querySelector('.image-2').style.opacity = '0';
        document.querySelector('.image-3').style.opacity = '1';
    }

    // Set the left position of the active square
    activeSquare.style.left = leftPosition + '%';
}

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

// Function to handle intersection
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Unobserve once animation is triggered
        }
    });
}

// Set up the Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Percentage of element visible
};

// Select all elements with the 'animate-on-scroll' class
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Observe each 'animate-on-scroll' element
animatedElements.forEach(element => {
    observer.observe(element);
});