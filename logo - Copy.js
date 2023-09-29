// Get references to the buttons and the active square
const yellowButton = document.getElementById('yellowButton');
const whiteButton = document.getElementById('whiteButton');
const blackButton = document.getElementById('blackButton');
const activeSquare = document.querySelector('.active-square');

// Add click event listeners to the buttons
yellowButton.addEventListener('click', () => setActiveButton(yellowButton));
whiteButton.addEventListener('click', () => setActiveButton(whiteButton));
blackButton.addEventListener('click', () => setActiveButton(blackButton));

// Function to set the active button and move the active square
function setActiveButton(button) {
    // Retrieve the left position for the active square
    let leftPosition = 0;
    let backgroundColor = '#000000';
    let textColor = '#000000';
    let activeSquareColour = '#000000';
    let yellowBorder = 'none';
    let whiteBorder = 'none';
    let blackBorder = 'none';
    let scrollerBackgroundColor = '#EBEBEB';


    if (button === yellowButton) {
        leftPosition = 3.5;
        backgroundColor = '#E0C438';
        textColor = '#000000';
        activeSquareColour = '#000000';
        yellowBorder = '1px solid #000000';
        whiteBorder = "1px solid #ffffff";
        blackBorder = "1px solid #000000";
        scrollerBackgroundColor = '#EBEBEB';
    } else if (button === whiteButton) {
        leftPosition = 11.7;
        backgroundColor = '#EBEBEB';
        textColor = '#000000';
        activeSquareColour = '#000000';
        yellowBorder = '1px solid #E0C438';
        whiteBorder = "1px solid #000000";
        blackBorder = "1px solid #000000";
        scrollerBackgroundColor = '#000000';
    } else if (button === blackButton) {
        leftPosition = 20;
        backgroundColor = 'black';
        textColor = '#EBEBEB';
        activeSquareColour = '#EBEBEB';
        yellowBorder = '1px solid #000000';
        whiteBorder = "1px solid #ffffff";
        blackBorder = "1px solid #ffffff";
        scrollerBackgroundColor = '#EBEBEB';
    }

    // Set the left position of the active square
    activeSquare.style.left = leftPosition + '%';

    // Apply background color and text color based on your design
    // Replace 'backgroundColor' and 'textColor' with appropriate values
    const mainLogoSection = document.querySelector('.main-logo');
    mainLogoSection.style.backgroundColor = backgroundColor;

    const mainLogoHeading = document.querySelector('.main-logo-heading');
    mainLogoHeading.style.color = textColor;

    const mainLogoSubheading = document.querySelector('.main-logo-subheading');
    mainLogoSubheading.style.color = textColor;

    const mainLogoParagraph = document.querySelector('.main-logo-paragraph');
    mainLogoParagraph.style.color = textColor;

    const disclosureParagraph = document.querySelector('.disclosure-paragraph');
    disclosureParagraph.style.color = textColor;

    const active_square = document.querySelector('.active-square');
    active_square.style.background = activeSquareColour;

    const yellowLogo = document.querySelector('.yellow-logo');
    yellowLogo.style.border = yellowBorder;

    const whiteLogo = document.querySelector('.white-logo');
    whiteLogo.style.border = whiteBorder;

    const blackLogo = document.querySelector('.black-logo');
    blackLogo.style.border = blackBorder;
    const square = document.querySelector('.square');
    square.style.backgroundColor = scrollerBackgroundColor;

    const line = document.querySelector('.line');
    line.style.backgroundColor = scrollerBackgroundColor;
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

