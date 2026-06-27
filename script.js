document.addEventListener('DOMContentLoaded', () => {
    const pasteis = [
        'Pastel de Carne',
        'Pastel de Queijo',
        'Pastel de Frango',
        'Pastel de Frango com Palmito',
        'Pastel de Carne com Queijo',
        'Pastel de Frango com Queijo',
        'Pastel de Frango com Catupiry',
        'Pastel de Calabresa com Queijo',
        'Pastel de Bacon com Queijo',
        'Pastel de Presunto e Queijo',
        'PIZZA (Queijo, presunto, orégano e azeitona)',
        'BAURU (Queijo, presunto, tomate, orégano)',
        'ESPECIAL DA CASA (Calabresa, catupiry, alho frito e manjericão)',
        'ESPECIAL DA CASA 2 (Calabresa, catupiry, milho e orégano)',
        'ESPECIAL DA CASA 3 (Frango, palmito e catupiry)',
        'ESPECIAL DA CASA 4 (Frango, queijo e bacon)',
        'COWBOY CARNE (Carne, bacon e cheddar)',
        'COWBOY FRANGO (Frango, bacon e cheddar)',
        'CAPIXABA (Carne, ovo e azeitona)',
        'CAPIXABA 2 (Carne, ovo e azeitona e catupiry)',
        'CAPIXABA 3 (Carne, ovo e azeitona e cheddar)',
        'CAPIXABA 4 (Carne, ovo e azeitona e queijo)',
        'MODINHA (Toscana, vinagrete e milho)',
    ];

    const pasteisEsp = [
        'CAIPIRA (Frango, catupiry, milho e ovo)',
        'CAIPIRA 2 (Frango, queijo, milho, tomate, ovo e orégano)',
        'VEGETARIANO (Palmito, queijo, milho, azeitona e orégano)',
        'PORTUGUESA (Presunto, queijo, ovo, tomate e azeitona)',
        'A MODA CARNE (Carne, bacon, queijo, calabresa, milho e azeitona)',
        'A MODA FRANGO (Frango, bacon, queijo, calabresa, milho e azeitona)',
    ];

    pasteis.forEach(pastel => createListItem(pastel, 'pasteis'));
    pasteisEsp.forEach(pastelEsp => createListItem(pastelEsp, 'pasteisEsp'));
    REFRIGERANTES.forEach(refri => createListItem(refri, 'refrigerantes'));

    document.getElementById('whatsapp-link').addEventListener('click', (event) => {
        event.preventDefault();
        const selectedItems = [];

        document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            const quantity = checkbox.nextElementSibling.value;
            selectedItems.push(`${checkbox.value} - Quantidade: ${quantity}`);
        });

        if (selectedItems.length === 0) {
            alert('Por favor, selecione ao menos um item para fazer o pedido.');
            return;
        }

        const message = `Olá, gostaria de fazer um pedido de Pastel:\n\n${selectedItems.join('\n')}\n\nObrigado!`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });
});
