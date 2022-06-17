// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    state.playerHealth = 10;
    state.death = 0;
    state.monsterKills = 0;
    state.message = [];
    state.type = ['monster', 'monster2', 'monster3'];
    state.damage = [0, 0, 0, 1, 1, 1, 2, 2, 3];
    state.monsters = [
        { name: 'Heathcliff', health: 4, },
        { name: 'Lloyd', health: 4, },
        { name: 'Gilgamesh', health: 5, },
    ];
    
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state

export function setMessage(message) {
    state.message = message;
}

export function addMonster(monster) {
    state.monsters.push(monster);
}

export function removeMonster(monster) {
    const index = state.monsters.indexOf(monster);
    if (index !== -1) {
        state.mushrooms.splice(index, 1);
    }
}

