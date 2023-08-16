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
