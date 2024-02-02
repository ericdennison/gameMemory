const grid = document.querySelector('.grid');

const characteres = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;

}

let firstCard = '';
let secondCard = '';

const revealCard = ({target})=>{

    if(target.parentNode.className.includes('reveal-card')){
        return;

    }

    if(firstCard == ''){

        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;


    }else if(secondCard == ''){

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        
    }

   

    
}

const createCard = (character) =>{


    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('/images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)

    return card


}

const loadGame = () => {

    const duplicateCharacters = [...characteres, ...characteres]

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    
    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card)

    });
}

loadGame()