function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');
    let emailCellElements = document.getElementsByTagName('td');
    let isRemoved = false;

    for (const email of emailCellElements) {
        if (email.textContent === emailInputElement.value) {
            email.parentNode.remove();
            isRemoved = true;
        }
    }
    let resultElement = document.getElementById('result');
    if (isRemoved) {
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}