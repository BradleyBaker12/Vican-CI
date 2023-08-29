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
