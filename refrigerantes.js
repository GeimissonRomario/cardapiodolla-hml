document.addEventListener('DOMContentLoaded', () => {
    const refrigerantes = [
        'Juninho Sabores R$4,00' , 
        'Lata Sabores 350ml R$6,80',
        'Lata Coca-Cola 350ml R$6,50',
        'Guaraná 600ml R$8,50',
        'CoCa-Cola 600ml R$8,50',
        'Guaraná 1,5L R$11,00',
        'Coca-Cola 1,5L R$13,00',
    ];

    const createListItem = (item, listId) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item;
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = 1;
        quantityInput.value = 1;
        quantityInput.style.marginLeft = '10px';
        quantityInput.style.width = '50px';

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(item));
        li.appendChild(quantityInput);
        document.getElementById(listId).appendChild(li);
    };

    refrigerantes.forEach(refrigerante => createListItem(refrigerante, 'refrigerantes'));
});
