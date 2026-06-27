const WHATSAPP_NUMBER = 5527988039857;

const REFRIGERANTES = [
    'Juninho Sabores R$4,00',
    'Lata Sabores 350ml R$6,50',
    'Lata Coca-Cola 350ml R$6,80',
    'Guaraná 600ml R$7,50',
    'CoCa-Cola 600ml R$8,50',
    'Guaraná 1,5L R$11,00',
    'Coca-Cola 1,5L R$13,00',
];

function createListItem(text, listId, noQuantity = false) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = text;
    checkbox.style.marginRight = '10px';

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(text));

    if (!noQuantity) {
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = 1;
        quantityInput.value = 1;
        quantityInput.style.marginLeft = '10px';
        quantityInput.style.width = '50px';
        li.appendChild(quantityInput);
    }

    document.getElementById(listId).appendChild(li);
}
