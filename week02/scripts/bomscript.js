document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#favchap');
    const addButton = document.querySelector('#addButton');
    const list = document.querySelector('#list');

    addButton.addEventListener('click', function() {
        const inputValue = input.value.trim();

        if (inputValue !== '') {
            createListItem(inputValue);
            input.value = '';
            input.focus();
        } else {
            alert('Please enter a chapter name.');
            input.focus();
        }
    });

    function createListItem(text) {
        const newListItem = document.createElement('li');
        newListItem.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            list.removeChild(newListItem);
            input.focus();
        });

        newListItem.appendChild(deleteButton);
        list.appendChild(newListItem);
    }
});
