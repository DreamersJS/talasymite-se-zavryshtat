export function addGold(inventory, amount) {
  inventory.gold += amount;
}
export function removeGold(inventory, amount) {
  if (inventory.gold - amount < 0) {
    console.log("Not enough gold");
    return;
  }
  inventory.gold -= amount;
}

export const incrementQuantity = (item, quantities, inventoryBag) => {
  const current = quantities[item] || 1;
  const max = inventoryBag[item]?.quantity || 1;
  return {
    ...quantities,
    [item]: Math.min(current + 1, max),
  };
};

export const decrementQuantity = (item, quantities) => {
  const current = quantities[item] || 1;
  return {
    ...quantities,
    [item]: Math.max(current - 1, 1),
  };
};

