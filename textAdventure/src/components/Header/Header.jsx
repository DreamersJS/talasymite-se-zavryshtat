import './Header.css'
import bag from '/img/bag.jpeg';
import { initialAdventureDiary as adventureDiary } from '../../data/adventureDiary';
import { itemsData } from '../../data/itemsData';
import React, { useEffect, useState } from 'react';
import { Inventory } from '../Inventory/Inventory';

export const Header = () => {
    /*
    Inventory- for player to see items and descriptions only not intended for trade
    */
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(prev => !prev);
    };

    return (
        <header>

            {!isModalVisible && (<div>
                {/* <button onClick={toggleModal}> */}
                <img src={bag} onClick={toggleModal} style={{ height: '40px' }} alt="Inventory" />
                {/* </button> */}
            </div>)}

            {isModalVisible && (
                <div className="modal" id="inventory-modal">
                    <div className="modal-overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        {adventureDiary.bagCarrier && (
                            <>
                                <div>
                                    <p>Bag Holder: <br />{adventureDiary.bagCarrier}</p>
                                </div>
                            </>
                        )}

                        {adventureDiary.secret.show && (
                            <>
                                <div>
                                    <h3>Secret</h3>
                                    <div >{adventureDiary.secret.text}</div>
                                </div>
                            </>
                        )}

                        <div className="">
                            <Inventory
                                title="Player Inventory"
                                inventory={adventureDiary}
                                onTrade={() => { }}
                                tradeAction="no"
                                prices={null}
                            />
                        </div>
                    </div>
                </div>
            )}


        </header>
    );
}