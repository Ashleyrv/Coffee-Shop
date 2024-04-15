document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    let startIndex = 0;

    function showCards() {
        cards.forEach((card, index) => {
            if (index >= startIndex && index < startIndex + 2) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function nextCards() {
        if (startIndex + 2 < totalCards) {
            startIndex += 1;
            showCards();
        }
    }

    function previousCards() {
        if (startIndex > 0) {
            startIndex -= 1;
            showCards();
        }
    }

    document.querySelector('.proximo').addEventListener('click', nextCards);
    document.querySelector('.anterior').addEventListener('click', previousCards);

    // Mostra os primeiros dois cards ao carregar a página
    showCards();
});
