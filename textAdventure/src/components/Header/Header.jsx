import './Header.css'
import bag from '/img/bag.jpeg';
import { initialAdventureDiary as adventureDiary } from '../../data/adventureDiary';
import React, { useState } from 'react';
import { Inventory } from '../Inventory/Inventory';

export const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(prev => !prev);
    };

    return (
        <header>
            {!isModalVisible && (
                <div>
                    <img src={bag} onClick={toggleModal} style={{ height: '40px' }} alt="Inventory" />
                </div>)}

            {isModalVisible && (
                <div className="modal-overlay"  onClick={toggleModal}>
                    <div className="modal-content">
                        {adventureDiary.bagCarrier && (
                            <div>
                                <p>Bag Holder: <br />{adventureDiary.bagCarrier}</p>
                            </div>
                        )}
                        {adventureDiary.secret.show && (
                            <div>
                                <h3>Secret</h3>
                                <div >{adventureDiary.secret.text}</div>
                            </div>
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