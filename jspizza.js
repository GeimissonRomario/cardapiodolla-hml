document.addEventListener('DOMContentLoaded', () => {
    const pizzasTradicionais = [
        'A MODA (mussarela, presunto, calabresa, bacon, milho, cebola, azeitona, cheddar, molho de tomate e orégano)',
        'PORTUGUESA (mussarela, presunto, calabresa, milho, ovo, azeitona, cebola, pimentão, molho de tomate e orégano)',
        'PRESUNTO (mussarela, presunto, milho, tomate, cebola, azeitona, molho de tomate e orégano)',
        'CALABRESA (mussarela, calabresa, azeitona, cebola, molho de tomate e orégano)',
        'CALABRESA COM BACON (mussarela, calabresa, bacon, azeitona, cebola, molho de tomate e orégano)',
        'FRANGO COM CATUPIRY (mussarela, frango, milho, azeitona, catupiry, molho de tomate e orégano)',
        'BACON (mussarela, presunto, bacon, molho de tomate e orégano)',
        'MUSSARELA (mussarela, tomate, milho, azeitona, molho de tomate e orégano)',
        'MINEIRA (mussarela, calabresa, catupiry, milho, molho de tomate e orégano)',
        'XERETA (mussarela, bacon, catupiry, milho, molho de tomate e orégano)',
        'KIRIDAN (mussarela, palmito, tomate, cebola, azeitona, molho de tomate e orégano)',
        'BANANA (mussarela, banana, açúcar e canela)',
    ];

    const tamanhos = [
        'P - 4 PEDAÇOS - R$31,99',
        'M - 6 PEDAÇOS - R$41,99',
        'G - 8 PEDAÇOS - R$51,99',
    ];

    pizzasTradicionais.forEach(pizza => createListItem(pizza, 'pizzas-tradicionais'));
    tamanhos.forEach(tamanho => createListItem(tamanho, 'tamanhos-pizza', true));
    REFRIGERANTES.forEach(refri => createListItem(refri, 'refrigerantes'));

    document.getElementById('whatsapp-link').addEventListener('click', (event) => {
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
            alert('Por favor, selecione pelo menos uma pizza.');
            return;
        }

        if (selectedSizes.length === 0) {
            alert('Por favor, selecione um tamanho.');
            return;
        }

        const message =
`Olá, gostaria de fazer um pedido de Pizza:

*Tamanho(s):*
${selectedSizes.join('\n')}

*Pizzas:*
${selectedItems.join('\n')}

Obrigado!`;

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });
});
