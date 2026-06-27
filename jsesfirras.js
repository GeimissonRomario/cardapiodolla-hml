document.addEventListener('DOMContentLoaded', () => {
    const esfirrasSalgadas = [
        'Carne',
        'Carne e Queijo',
        'Queijo e Presunto',
        'Queijo Frango e Catupiry',
        'Queijo e Calabresa',
        'Queijo e Bacon',
        'Queijo e Palmito',
    ];

    const esfirrasDoces = [
        'Romeu e Julieta',
        'Chocolate com Morango',
        'Doce de Leite com Banana',
    ];

    esfirrasSalgadas.forEach(item => createListItem(item, 'esfirras-salgadas'));
    esfirrasDoces.forEach(item => createListItem(item, 'esfirras-doces'));
    REFRIGERANTES.forEach(refri => createListItem(refri, 'refrigerantes'));

    document.getElementById('whatsapp-link').addEventListener('click', (event) => {
        event.preventDefault();
        const selectedItems = [];

        document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            const quantity = checkbox.nextElementSibling.value;
            selectedItems.push(`${checkbox.value} - Quantidade: ${quantity}`);
        });

        if (selectedItems.length === 0) {
            alert('Por favor, selecione pelo menos um item para fazer o pedido.');
            return;
        }

        const message = `Olá, gostaria de fazer um pedido de Esfirra:\n\n${selectedItems.join('\n')}\n\nObrigado!`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });
});
