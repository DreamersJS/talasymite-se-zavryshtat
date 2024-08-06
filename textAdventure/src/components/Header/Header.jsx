import './Header.css'
import bag from '../../img/bag.jpeg';
import mushroomYellow from '../../img/mushroomYellow.jpg';
import mushroomBlue from '../../img/mushroomBlue.jpg';
import mushroomRed from '../../img/mushroomRed.jpg';
import mushroomGreen from '../../img/mushroomGreen.jpg';
import mushroomBlack from '../../img/mushroomBlack.jpg';
import { adventureDiary } from '../../adventureDiary';

export const Header = () => {
    // onClick for Inventory-> modal pop up with some ugly pics of items, on hover names of items? // Sacred or Dragon Age: Origins?
    // relation tables for items, which pic answers to which item?
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
                <div>
                    {adventureDiary.mushroomProperties.yellow.show && (
                        <>
                            <img src={mushroomYellow} alt="Yellow Mushroom" style={{ height: '40px' }} />
                            <p> {adventureDiary.mushroomProperties.yellow.show}</p>
                        </>
                    )
                    }
                </div>
                <div>
                    {adventureDiary.mushroomProperties.yellow.show && (
                        <>
                            <img src={mushroomBlue} alt="Blue Mushroom" style={{ height: '40px' }} />
                            <p> {adventureDiary.mushroomProperties.blue.show}</p>
                        </>
                    )
                    }
                </div>
                <div>
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