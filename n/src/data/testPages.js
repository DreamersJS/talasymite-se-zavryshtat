const inventory = []; // try 'axe'

const bookData = {
    pages: {
        1: {
            text: 'You are in a dark forest. You see a fork in the road. Do you go left or right?',
            choices: [
                { text: 'Go left', nextPage: 2 },
                { text: 'Go right', nextPage: 3 },
            ],
        },
        2: {
            text: 'You see a bear. Do you run or play dead?',
            choices: [
                { text: 'Run', nextPage: 3 },
                { text: 'Play dead', nextPage: 4 },
            ],
        },
        3: {
            text: 'The bear catches you and eats you. You are dead.', // add a restart button
            choices: [],
        },
        4: {
            text: 'The bear sniffs you and walks away. You are alive.',
            choices: [ { text: 'Continue walking down the road', nextPage: 5 },],
        },
        5: {
            text: 'You see a rusty sword. Do you take it?',
            choices: [
                { text: 'Take', effect: addItem('sword'), nextPage: 6 }, // add to inventory
                { text: 'Leave it', nextPage: 7 },
            ],
        },
        6: {
            text: 'You took the rusty sword',
            choices: [ { text: 'Continue walking down the road', nextPage: 8 },],
        },
        7: {
            text: 'You left the rusty sword behind. How needs a rusty blade anyway?',
            choices: [ { text: 'Continue walking down the road', nextPage: 8 },],
        },
        8: {
            text: 'You see a wolf. Do you run, climb a three or attack?',
            choices: [
                { text: 'Run', nextPage: 9 },
                { text: 'Climb', nextPage: 10 },
                { text: 'Attack', nextPage: hasItem(inventory, 'sword','axe' ) ? 11 : null }, // do you have a weapon? // if(inventory.sword:true), else if(inventory.axe:true) else()
            ].filter(choice => choice.nextPage !== null),
        },
        9: {
            text: 'The wolf catches you and eats you. You are dead.',
            choices: [],
        },
        10: {
            text: 'The wolf is waiting for you, you have two choices: wait for someone to help you or fight.',
            choices: [ 
            { text: 'Wait for someone to pass by and help you', nextPage: 14 }, // night, more wolves
            { text: 'Go down and fight',  nextPage: hasItem(inventory, 'sword','axe' ) ? 11 : null  }, // do you have a weapon?
        ].filter(choice => choice.nextPage !== null),
        },
        11: {
            text: 'You are fighting the wolf.', //think of a battle system
            choices: [
                { text: 'You survived', nextPage: 12 }, // reduce health depending on the damage taken
                { text: 'You died', nextPage: 1 }, // ask if they want to restart
            ],
        },
        
        12: {
            text: 'You are hungry. You see some red berries Are you going to eat them?',
            choices: [
                { text: 'Eat', nextPage: 12 }, // reduce health
                { text: 'Leave them', nextPage: 13 },
            ],
        },
        13: {
            text: 'You are starving. You see more berries, blue. Are you going to eat them?',
            choices: [
                { text: 'Eat', nextPage: 15 }, // health++
                { text: 'Leave them', nextPage: 15 }, // health--
            ],
        },
        14: {
            text: 'It\'s night. Moon is rising, and wolves are swarming around you', 
            choices: [],
        },
        15: {
            text: 'It\'s night. Moon is rising, stars are shining, forest is calm. You are alive.', 
            choices: [],
        },
    },
}

function addItem(item) {
    if (!inventory.includes(item)) {
        inventory.push(item);
    }
}

function removeItem(item) {
    const index = inventory.indexOf(item);
    if (index > -1) {
        inventory.splice(index, 1);
    }
}

// function hasItem(inventory, ...item) {
//     return inventory.includes(item);
//   }

  function hasItem(inventory, ...items) {
    return items.some(item => inventory.includes(item));
}

export { bookData, inventory, addItem, removeItem, hasItem }