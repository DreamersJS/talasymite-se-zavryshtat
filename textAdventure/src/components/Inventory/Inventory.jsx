import { useEffect, useState } from 'react';
import './Inventory.css';
import { incrementQuantity, decrementQuantity } from '../../services/trade.service';
import { itemsData } from '../../data/itemsData';

export const Inventory = ({ title, inventory, onTrade, tradeAction, prices }) => {
  const [quantities, setQuantities] = useState({});

  const plusOne = (item) => {
    setQuantities(prev => incrementQuantity(item, prev, inventory.bag));
  };

  const minusOne = (item) => {
    setQuantities(prev => decrementQuantity(item, prev));
  };

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        <div>
          Gold: {inventory.gold}
        </div>
        {Object.keys(inventory.bag).map(item => {
          const itemData = inventory.bag[item];
          const isComposite = item === 'mushrooms';

          if (isComposite) {
            return (
              <li key={item}>
                <strong>{itemData.displayName}</strong>
                {itemData.sellable == false && <span className="unsellable-note">(Not sellable)</span>}
                <ul>
                  {Object.entries(itemData).map(([key, subItem]) => {
                    if (
                      ['quantity', 'displayName', 'sellable'].includes(key) ||
                      typeof subItem !== 'object'
                    ) return null;

                    return (
                      <li key={key} className="tooltip-wrapper">
                        <p>
                          <span><img src={subItem.picture} alt="Mushrooms" style={{ height: '25px' }} /></span>
                          {subItem.displayName}
                          {subItem.description && subItem.showDescription && (
                            <span className="tooltip-text">{subItem.description}</span>
                          )}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }

          return (
            <div>
              <li key={item}>
                <div className="tooltip-wrapper">
                  <strong>
                    {itemsData[item].displayName}
                  </strong>
                  {
                    itemsData[item].description && itemsData[item]?.showDescription !== false && (
                      <span className='tooltip-text'>
                        {itemsData[item].description}
                      </span>
                    )
                  }
                  {/* sellable */}
                  <>
                    {tradeAction && prices && prices[item] && itemsData[item]?.sellable !== false ? (
                      <>
                        {/* +- quantity buttons */}
                        <button className='quantity-minus' onClick={() => minusOne(item)} disabled={(quantities[item] || 1) <= 1}></button>
                        (x{quantities[item] || 1})
                        <button className='quantity-plus' onClick={() => plusOne(item)} disabled={(quantities[item] || 1) >= inventory.bag[item].quantity}></button>

                        {/* buy sell actions */}
                        Price: {
                          tradeAction === 'Buy'
                            ? prices[item]?.buy * (quantities[item] || 1)
                            : prices[item]?.sell * (quantities[item] || 1)
                        }
                        <button
                          className="trade-action"
                          onClick={() => onTrade(item, quantities[item] || 1)}
                          disabled={itemsData[item]?.sellable === false}
                        >
                          {tradeAction}
                        </button>
                      </>
                    ) : tradeAction !== "no" ?
                      // Not sellable items in trading 
                      <span className="unsellable-note">(Not sellable)</span> :
                      // Inventory items quantity(no trading)
                      <span> x{inventory.bag[item].quantity}</span>
                    }
                  </>
                </div>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  );
};
