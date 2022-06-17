// set state to an empty object
const state = {};

state.message = [];
state.player = [];
state.monsters = [];
state.damage = [];
state.health = [];

// initialize state, also used in test
export function initialize() {
    // What should state look like on load?
    state.player = [{
        name: 'Sir Cid',
        health: 10,
        dead: false,
        kills: 0,
    }];
    state.monsters = [{
        name: 'Lloyd',
        health: 4,
        enemy: true,
        dead: false,
    },
    {
        name: 'Gilgamesh',
        health: 5,
        enemy: true,
        dead: false,
    }];
    
    state.message = ['click enemies to defend yourself!'];
    state.damage = [0, 0, 1, 1, 1, 2, 2];
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

