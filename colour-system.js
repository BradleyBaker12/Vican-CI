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

    if (button === yellowButton) {
        leftPosition = 17.5;
        backgroundColor = '#E0C438';
        textColor = '#000000';
        activeSquareColour = '#000000';
        yellowBorder = '1px solid #000000';
        whiteBorder = "1px solid #ffffff";
        blackBorder = "1px solid #000000"
    } else if (button === blackButton) {
        leftPosition = 25.3;
        backgroundColor = '#000000';
        textColor = '#EBEBEB';
        activeSquareColour = '#EBEBEB';
        yellowBorder = '1px solid #E0C438';
        whiteBorder = "1px solid #EBEBEB";
        blackBorder = "1px solid #EBEBEB"
    } else if (button === whiteButton) {
        leftPosition = 33;
        backgroundColor = '#EBEBEB';
        textColor = '#000000';
        activeSquareColour = '#000000';
        yellowBorder = '1px solid #E0C438';
        whiteBorder = "1px solid #000000";
        blackBorder = "1px solid #ffffff"
    }

    // Set the left position of the active square
    activeSquare.style.left = leftPosition + '%';

    // Apply background color and text color based on your design
    // Replace 'backgroundColor' and 'textColor' with appropriate values
    const mainLogoSection = document.querySelector('.colour-systems');
    mainLogoSection.style.backgroundColor = backgroundColor;

    const mainLogoHeading = document.querySelector('.colour-system-heading');
    mainLogoHeading.style.color = textColor;

    const mainLogoSubheading = document.querySelector('.colour-system-subheading');
    mainLogoSubheading.style.color = textColor;

    const mainLogoParagraph = document.querySelector('.colour-system-paragraph');
    mainLogoParagraph.style.color = textColor;

    const active_square = document.querySelector('.active-square');
    active_square.style.background = activeSquareColour;

    const yellowLogo = document.querySelector('.yellow-button');
    yellowLogo.style.border = yellowBorder;

    const whiteLogo = document.querySelector('.white-button');
    whiteLogo.style.border = whiteBorder;

    const blackLogo = document.querySelector('.black-button');
    blackLogo.style.border = blackBorder;
}
