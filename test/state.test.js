

import state, {
    initialize,
    addMonster,
    // import dispatch functions
    // mortalKombat,
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

// test('runs damage and message displays', (expect) => {
//what is the initial state


// });
test('adds a monster', (expect) => {
    expect.equal(state.monsters.length, 2);
    addMonster('Heathcliff');
    expect.equal(state.monsters.length, 3);
});

