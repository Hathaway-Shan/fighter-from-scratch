const box1 = document.getElementById('monster-box');
// import { getRandomItem } from '../utils.js';

export default function renderMonster(root) {
    const container = root;


    return ({ monsters }) => {
//clear out container
        container.innerHTML = '';
        box1.innerHTML = '';
        for (let monster of monsters) {
            let doge = { monster };
            let newDoge = Monster(doge);
            container.append(newDoge);
            
        }
    };
}

export function Monster({ monster }) {

    const monBox = document.createElement('div');
    let nameSpan = document.createElement('span');
    nameSpan.textContent = monster.name;

    let healthSpan = document.createElement('span');
    healthSpan.textContent = monster.health;

    monBox.append('Name: ', nameSpan, '- Health ', healthSpan);
    box1.append(monBox);

    if (monster.dead === false) {
//in order to be clickable we have to create the enemy image as an input
        const img = document.createElement('input');
        img.type = 'image';
        img.src = 'assets/' + monster.class + '.png';
        return img;
        // input.addEventListener('click', () => {
        //     handleAttack(player, monster)
        // });
    } 
    if (monster.dead === true) {
        const img = document.createElement('img');
        img.src = 'assets/' + 'dead-' + monster.class + '.png';
        return img;} 
}
