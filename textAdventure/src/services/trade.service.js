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
