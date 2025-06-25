import './Header.css'
import bag from '/img/bag.jpeg';
import { initialAdventureDiary as adventureDiary  } from '../../data/adventureDiary';
import { itemsData } from '../../data/itemsData';
import React, { useEffect, useState } from 'react';

export const Header = () => {
    /*
    Inventory- DragonAgeOrigins type: list of items(pic,quantity,name), on hover description
    */
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [itemsList, setItemsList] = useState([]);
    const [filteredItemsList, setFilteredItemsList] = useState([]);

    // useEffect(() => {
    //     if (isModalVisible) {
    //       setIsMemberPickerVisible(false);
    //       setChosenFriends([]);
    //     }
    //   }, [isModalVisible]);
    // useEffect(() => {
    //     const unsubscribe = getMessages(id, setMessages, setLoadingMessages);
    //     return () => {
    //       unsubscribe();
    //     };
    //   }, [id]);
     
//get items
// since I need pic,quantity,name,show,description should I get them as obj and after map them for list?
// since i usually display so much info only for user and i do it wit recoil or conrextAPI im puzzled what to ddo now 
// arr of objs?

const getItems = ()=>{
    setItemsList(Object.keys(adventureDiary.bag))
}
  const toggleModal = () => {
    setIsModalVisible(prev => !prev);
  };

    return (
        <header>

            <div>
                <img src={bag} style={{ height: '40px' }} alt="Inventory" />
            </div>

            {adventureDiary.bagCarrier && (
                <>
                    <div>
                        <p>Bag Holder: <br />{adventureDiary.bagCarrier}</p>
                    </div>
                </>
            )}

            <div>
                    {/*itemsData е като датабазаза initial state и всички тия show неща ще идват актуални само от adventureDiary,по-добре да ползвам adventureDiary, обаче през bag или mushroomProperties? ако няма гъби в инвентара няма да има и съответните свойства на гъбите  */}
                {/* <div>
                    {adventureDiary.mushroomProperties.yellow.show && (
                        <>
                            <img src={itemsData.mushroomSet.yellow.picture} alt="Yellow Mushroom" style={{ height: '40px' }} />
                            <p> {adventureDiary.mushroomProperties.yellow.show && ( <p>{itemsData.mushroomSet.yellow.description}</p>)}</p>
                        </>
                    )
                    }
                </div> */}
                {/* <div>
                    {adventureDiary.mushroomProperties.blue.show && (
                        <>
                            <img src={itemsData.mushroomSet.blue.picture} alt="Blue Mushroom" style={{ height: '40px' }} />
                            <p> {adventureDiary.mushroomProperties.blue.show}</p>
                        </>
                    )
                    }
                </div> */}
                {/* <div>
                    {adventureDiary.mushroomProperties.red.show && (
                        <>
                            <img src={mushroomRed} alt="Red Mushroom" style={{ height: '40px' }} />
                            <p> {adventureDiary.mushroomProperties.red.show}</p>
                        </>
                    )
                    }
                </div>
                <div>
                    {adventureDiary.mushroomProperties.green.show && (
                        <>
                            <img src={mushroomGreen} alt="Yellow Mushroom" style={{ height: '40px' }} />
                            <p> {adventureDiary.mushroomProperties.green.show}</p>
                        </>
                    )
                    }
                </div>
                <div>
                    {adventureDiary.mushroomProperties.black.show && (
                        <>
                            <img src={mushroomBlack} alt="Black Mushroom" style={{ height: '40px' }} />
                            <p> {adventureDiary.mushroomProperties.black.show}</p>
                        </>
                    )
                    }
                </div> */}
            </div>
{/* Single item */}
<div>
    <span><img src={itemsData.mushroomSet.yellow.picture} alt="Yellow Mushroom" style={{ height: '25px' }} /></span>
    <span>x{itemsData.mushroomSet.yellow.quantity}</span>
    <span>{itemsData.mushroomSet.yellow.displayName}</span>
    {/* on hover - description */}
    <div className='hidden'>
    {adventureDiary.mushroomProperties.yellow.show && (<p>{itemsData.mushroomSet.yellow.description}</p> )}
    </div>
</div>

            {adventureDiary.secret.show && (
                <>
                    <div>
                        <h3>Secret</h3>
                        <div id="secretDiv">{adventureDiary.secret.text}</div>
                    </div>
                </>
            )}

        </header>
    );
}