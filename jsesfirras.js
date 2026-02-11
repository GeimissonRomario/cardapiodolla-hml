document.addEventListener('DOMContentLoaded', () => {

    const esfirrasSalgadas = [
        'Carne',
        'Carne e Queijo',
        'Queijo e Presunto',
        'Queijo Frango e Catupiry',
        'Queijo e Calabresa',
        'Queijo e Bacon',
        'Queijo e Palmito'
    ];

    const esfirrasDoces = [
        'Romeu e Julieta',
        'Chocolate com Morango',
        'Doce de Leite com Banana'
    ];

    // --- LISTA DE REFRIGERANTES (MESMO PADRÃO DO PASTEL E PIZZA) ---
    const refrigerantes = [
         'Juninho Sabores R$4,00' , 
        'Lata Sabores 350ml R$6,50',
        'Lata Coca-Cola 350ml R$6,80',
        'Guaraná 600ml R$7,50',
        'CoCa-Cola 600ml R$8,50',
        'Guaraná 1,5L R$11,00',
        'Coca-Cola 1,5L R$13,00',
    ];

    // --- FUNÇÃO PARA CRIAR ITENS DE LISTA ---
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

    // --- CARREGA ESFIrras salgadas ---
    esfirrasSalgadas.forEach(item => createListItem(item, 'esfirras-salgadas'));

    // --- CARREGA ESFIrras doces ---
    esfirrasDoces.forEach(item => createListItem(item, 'esfirras-doces'));

    // --- CARREGA REFRIGERANTES ---
    refrigerantes.forEach(refri => createListItem(refri, 'refrigerantes'));

    // --- BOTÃO DO WHATSAPP ---
    const whatsappLink = document.getElementById('whatsapp-link');
    const whatsappNumber = 5527988039857;

    whatsappLink.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedItems = [];

        document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            const quantity = checkbox.nextElementSibling.value;
            selectedItems.push(`${checkbox.value} - Quantidade: ${quantity}`);
        });

        if (selectedItems.length > 0) {
            const whatsappMessage =
                `Olá, gostaria de fazer um pedido de Esfirra:\n\n${selectedItems.join('\n')}\n\nObrigado!`;

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappURL, '_blank');
        } else {
            alert("Por favor, selecione pelo menos um item para fazer o pedido.");
        }
    });
});
