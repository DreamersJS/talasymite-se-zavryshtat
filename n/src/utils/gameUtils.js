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

export { addItem, removeItem, hasItem }