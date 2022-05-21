function toggle() {
    let buttonElement = document.querySelector('.button');
    let extraElement = document.querySelector('#extra');

    if(buttonElement.textContent === 'More'){
        buttonElement.textContent = 'Less';
        extraElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        extraElement.style.display = 'none';
    }
}