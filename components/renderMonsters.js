

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

// export function Monster({ monster }) {
//     if (monster.dead === false) {
//         const img = document.createElement('img');
//         img.src = 'assets/' + monster.name + '.png';
//         return img;} 
//     if (monster.dead === true) {
//         const img = document.createElement('img');
//         img.src = 'assets/' + 'dead-' + monster.name + '.png';
//         return img;} 
// }

export function Monster({ monster }) {
    if (monster.dead === false) {
        const img = document.createElement('input');
        img.type = 'image';
        img.src = 'assets/' + monster.name + '.png';
        return img;} 
    if (monster.dead === true) {
        const img = document.createElement('img');
        img.src = 'assets/' + 'dead-' + monster.name + '.png';
        return img;} 
}
