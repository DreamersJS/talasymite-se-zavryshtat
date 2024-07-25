import { addItem } from "./gameUtils";

/**
 * 
 * @param {*} inventory trader/player inventory
 * @param {*} type buy/sell
 * @returns boolean inventory.gold >= cost
 */
function canAfford(inventory, item, quantity, type, prices) {
  const cost = prices[item] ? prices[item][type] * quantity : 0;
  return inventory.gold >= cost;
}
