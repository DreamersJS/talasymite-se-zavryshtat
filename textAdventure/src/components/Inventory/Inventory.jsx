import { useEffect, useState } from 'react';
import './Inventory.css';

export const Inventory = ({ title, inventory, onTrade, tradeAction, prices }) => {
  const [quantities, setQuantities] = useState({});
  // console.log({inventory});

  const minusOne = (item) => {
    setQuantities(prevQuantities => {
      const current = prevQuantities[item] || 1;
      return {
        ...prevQuantities,
        [item]: current > 1 ? current - 1 : 1
      };
    });
  };

  const plusOne = (item) => {
    const max = inventory.bag[item].quantity;
    setQuantities(prevQuantities => {
      const current = prevQuantities[item] || 1;
      return {
        ...prevQuantities,
        [item]: current < max ? current + 1 : max
      };
    });
  };
    
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        <div>
          Gold: {inventory.gold}
        </div>
        {Object.keys(inventory.bag).filter(e=> e !=="mushrooms" && e !=='straightTrinket' && e !=='bottleOfSolvent' && e !=='bottleOfWater' && e !=='herb').map(item => (
          <li key={item}>
            {item} 
            <button className='quantity-minus' onClick={() => minusOne(item)}></button> 
            (x{quantities[item] || 1})  
            <button className='quantity-plus' onClick={() => plusOne(item)}></button>  
            Price: {tradeAction === 'Buy' ? prices[item]?.buy * (quantities[item] || 1) : prices[item]?.sell * (quantities[item] || 1)}
            <button className='trade-action' onClick={() => onTrade(item, quantities[item] || 1)}>{tradeAction}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
