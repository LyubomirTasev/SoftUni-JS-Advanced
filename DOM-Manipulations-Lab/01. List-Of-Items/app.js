function addItem() {
    let itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newElement = document.createElement('li');
    newElement.textContent = inputElement.value;

    itemsElement.appendChild(newElement);
}