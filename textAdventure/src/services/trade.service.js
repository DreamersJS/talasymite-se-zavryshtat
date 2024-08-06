
/**
 * 
 * @param {*} inventory trader/player inventory
 * @param {*} type buy/sell
 * @returns boolean inventory.gold >= cost
 */
export function canAfford(inventory, item, quantity, type, prices) {
  const cost = prices[item] ? prices[item][type] * quantity : 0;
  return inventory.gold >= cost;
}
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
export function calculateCost(prices, item, quantity, type) {
  return prices[item][type] * quantity;
}
