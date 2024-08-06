# Text-adventure game

### Description

The Game Adventure project is a SPA, interactive text-based adventure game implemented using React. Players navigate through a storyline by making choices, managing an inventory, trading with NPCs, and experiencing various in-game events.

### Key Technologies:

React: For building the user interface and managing state, using React's useState and useEffect hooks.

JavaScript: For implementing game logic and functionality.

CSS: For styling the game interface.

### Core Features:

Dynamic Page Navigation:

    Players can navigate through the game by making choices that affect the storyline.
    The current page updates based on player decisions, and specific events are triggered accordingly.

Inventory Management:

    Players have an inventory system that allows them to collect, remove, and manage items.
    Items can be added or removed based on the current page or player actions.

Conditional Choices:

    Choices can have requirements such as specific items, conditions, bag carriers, or visited pages.
    Only available choices are displayed to the player, ensuring a tailored gameplay experience.

Trading System:

    Players can trade items with NPCs through a modal interface.
    Buying and selling items involve gold transactions, with prices defined for each item.
    Inventory updates reflect the changes post-trade, ensuring accurate tracking of resources.

Event Handling:

    Page transitions can trigger various in-game events like inventory updates or condition changes.
    Randomized events are implemented via a dice roll mechanism to add unpredictability.

Game Reset and Replayability:

    Players can reset the game and start over, allowing for multiple playthroughs with different choices.