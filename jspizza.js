document.addEventListener('DOMContentLoaded', () => {

    const pizzasTradicionais = [
        "A MODA (mussarela, presunto, calabresa, bacon, milho, cebola, azeitona, cheddar, molho de tomate e orégano)",
        "PORTUGUESA (mussarela, presunto, calabresa, milho, ovo, azeitona, cebola, pimentão, molho de tomate e orégano)",
        "PRESUNTO (mussarela, presunto, milho, tomate, cebola, azeitona, molho de tomate e orégano)",
        "CALABRESA (mussarela, calabresa, azeitona, cebola, molho de tomate e orégano)",
        "CALABRESA COM BACON (mussarela, calabresa, bacon, azeitona, cebola, molho de tomate e orégano)",
        "FRANGO COM CATUPIRY (mussarela, frango, milho, azeitona, catupiry, molho de tomate e orégano)",
        "BACON (mussarela, presunto, bacon, molho de tomate e orégano)",
        "MUSSARELA (mussarela, tomate, milho, azeitona, molho de tomate e orégano)",
        "MINEIRA (mussarela, calabresa, catupiry, milho, molho de tomate e orégano)",
        "XERETA (mussarela, bacon, catupiry, milho, molho de tomate e orégano)",
        "KIRIDAN (mussarela, palmito, tomate, cebola, azeitona, molho de tomate e orégano)",
        "BANANA (mussarela, banana, açúcar e canela)"
    ];

    const tamanhos = [
        "P - 4 PEDAÇOS - R$31,99",
        "M - 6 PEDAÇOS - R$41,99",
        "G - 8 PEDAÇOS - R$51,99"
    ];

    // 🔥 Refrigerantes adicionados (mesma lista do pastel)
    const refrigerantes = [
         'Juninho Sabores R$4,00' , 
        'Lata Sabores 350ml R$6,50',
        'Lata Coca-Cola 350ml R$6,80',
        'Guaraná 600ml R$7,50',
        'CoCa-Cola 600ml R$8,50',
        'Guaraná 1,5L R$11,00',
        'Coca-Cola 1,5L R$13,00',
    ];

    // Cria item com checkbox + quantidade
    const createListItem = (text, listId, noQuantity = false) => {
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
    };

    // Pizzas
    pizzasTradicionais.forEach(pizza => {
        createListItem(pizza, 'pizzas-tradicionais');
    });

    // Tamanhos (sem quantidade)
    tamanhos.forEach(tamanho => {
        createListItem(tamanho, 'tamanhos-pizza', true);
    });

    // Refrigerantes
    refrigerantes.forEach(refri => {
        createListItem(refri, 'refrigerantes');
    });


    // WhatsApp
    const whatsappLink = document.getElementById('whatsapp-link');
    const whatsappNumber = 5527988039857;

    whatsappLink.addEventListener('click', (event) => {
        event.preventDefault();
        
        const selectedItems = [];
        const selectedSizes = [];

        document.querySelectorAll('#pizzas-tradicionais input[type="checkbox"]:checked')
            .forEach(cb => {
                const quantity = cb.parentNode.querySelector('input[type="number"]').value;
                selectedItems.push(`${cb.value} - Quantidade: ${quantity}`);
            });

        document.querySelectorAll('#tamanhos-pizza input[type="checkbox"]:checked')
            .forEach(cb => selectedSizes.push(cb.value));

        document.querySelectorAll('#refrigerantes input[type="checkbox"]:checked')
            .forEach(cb => {
                const quantity = cb.parentNode.querySelector('input[type="number"]').value;
                selectedSizes.push(`Refrigerante: ${cb.value} - Quantidade: ${quantity}`);
            });

        if (selectedItems.length === 0) {
            alert("Por favor, selecione pelo menos uma pizza.");
            return;
        }

        if (selectedSizes.length === 0) {
            alert("Por favor, selecione um tamanho.");
            return;
        }

        const message = 
`Olá, gostaria de fazer um pedido de Pizza:

*Tamanho(s):*
${selectedSizes.join("\n")}

*Pizzas:*
${selectedItems.join("\n")}

Obrigado!`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});
