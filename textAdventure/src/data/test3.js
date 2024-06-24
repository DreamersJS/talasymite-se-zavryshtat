export const bookData = {
    pages: {
        1: {
            text: 'You are in a dark forest. You see a fork in the road. Do you go left or right?',
            choices: [
                { text: 'Go left', nextPage: 2 },
                { text: 'Go right', nextPage: 5 },
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
            text: 'The bear catches you and eats you. You are dead.',
            choices: [],
            end: true,
        },
        4: {
            text: 'The bear sniffs you and walks away. You are alive.',
            choices: [
                { text: 'Continue walking down the road', nextPage: 5 },
            ],
        },
        5: {
            text: 'You see a rusty sword. Do you take it?',
            choices: [
                { text: 'Take', nextPage: 6, addToInventory: 'sword' }, 
                { text: 'Leave it', nextPage: 7 },
            ],
        },
        6: {
            text: 'You took the rusty sword',
            choices: [
                { text: 'Continue walking down the road', nextPage: 8 },
            ],
        },
        7: {
            text: 'You left the rusty sword behind. Who needs a rusty blade anyway?',
            choices: [
                { text: 'Continue walking down the road', nextPage: 8 },
            ],
        },
        8: {
            text: 'You see a wolf. Do you run, climb a tree, or attack?',
            choices: [
                { text: 'Run', nextPage: 9 },
                { text: 'Climb', nextPage: 10 },
                { text: 'Attack', nextPage: 11, requiresItem: 'sword' },  
            ].filter(choice => choice.nextPage !== null),  
        },
        9: {
            text: 'The wolf catches you and eats you. You are dead.',
            choices: [],
            end: true,
        },
        10: {
            text: 'The wolf is waiting for you. You have two choices: wait for someone to help you or fight.',
            choices: [
                { text: 'Wait for someone to pass by and help you', nextPage: 14 },
                { text: 'Go down and fight', nextPage: 11, requiresItem: 'sword' },  
            ].filter(choice => choice.nextPage !== null), 
        },
        11: {
            text: 'You are fighting the wolf.',
            choices: [
                { text: 'You survived', nextPage: 12 }, // to think of a battle system and auto-next page maybe????????
                { text: 'You died', nextPage: 1 }, // auto lose and reset button?????? // end: true, 
            ],
        },
        12: {
            text: 'You are hungry. You see some red berries. Are you going to eat them?',
            choices: [
                { text: 'Eat', nextPage: 12 }, // Example: Eating berries (health--)
                { text: 'Leave them', nextPage: 13 },
            ],
        },
        13: {
            text: 'You are starving. You see more berries, blue. Are you going to eat them?',
            choices: [
                { text: 'Eat', nextPage: 15 }, // Example: Eating berries (health++)
                { text: 'Leave them', nextPage: 15 }, // Example: Not eating berries (health--)
            ],
        },
        14: {
            text: 'It\'s night. The moon is rising, and wolves are swarming around you.',
            choices: [],
            end: true,
        },
        15: {
            text: 'It\'s night. The moon is rising, stars are shining, the forest is calm. You are alive.',
            choices: [],
        },
    },
};
