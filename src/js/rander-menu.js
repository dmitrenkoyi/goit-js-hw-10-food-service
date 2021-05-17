export function markupMenuCard(menu, menuCardTpl) {
    const ulElMenu = document.querySelector('.js-menu');
    
    const cardsMarkup = createMenuCard(menu)
    
    function createMenuCard(card) {
        // return card.map(menuCardTpl).join(' ');
        return menuCardTpl(card);
    }
    

    ulElMenu.insertAdjacentHTML('beforeend', cardsMarkup);
}

