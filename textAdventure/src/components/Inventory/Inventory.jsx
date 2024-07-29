import { Item } from "./Item";

export const Inventory = ({ title, inventory, onTrade, tradeAction, prices }) => {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        <li>
          Gold: {inventory.gold}
        </li>
        {Object.keys(inventory.bag).map(item => (
          <li key={item}>
            {item} (x{inventory.bag[item]}) - Price: {tradeAction === 'Buy' ? prices[item].buy : prices[item].sell}
            <button onClick={() => onTrade(item)}>{tradeAction}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
