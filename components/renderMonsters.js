

export default function renderMonster(root) {
    const container = root;

    return ({ monsters }) => {
//clear out container
        container.innerHTML = '';
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


    const box1 = document.getElementById('monster-box');
    monBox.append(nameSpan, healthSpan);
    box1.append(monBox);

    if (monster.dead === false) {
//in order to be clickable we have to create the enemy image as an input
        const img = document.createElement('input');
        img.type = 'image';
        img.src = 'assets/' + monster.class + '.png';
        return img;} 
    if (monster.dead === true) {
        const img = document.createElement('img');
        img.src = 'assets/' + 'dead-' + monster.class + '.png';
        return img;} 
}
