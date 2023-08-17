function changeFont(buttonId) {
    const buttons = document.querySelectorAll('.font-button');
    const inputField = document.querySelector('.tester');

    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.style.background = '#000000';
        } else {
            button.style.background = 'transparent';
        }
    });

    switch (buttonId) {
        case 'font-light':
            inputField.style.fontFamily = 'Gilroy-Light, sans-serif';
            break;
        case 'font-medium':
            inputField.style.fontFamily = 'Gilroy-Medium, sans-serif';
            break;
        case 'font-heavy':
            inputField.style.fontFamily = 'Gilroy-Heavy, sans-serif';
            break;
        default:
            break;
    }
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