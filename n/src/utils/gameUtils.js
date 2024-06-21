
  function hasItem(inventory, ...items) {
    return items.some(item => inventory.includes(item));
}

export { hasItem }