import './Header.css'
import bag from '../../img/bag.jpeg';
import mushroomYellow from '../../img/mushroomYellow.jpg';
import mushroomBlue from '../../img/mushroomBlue.jpg';
import mushroomRed from '../../img/mushroomRed.jpg';
import mushroomGreen from '../../img/mushroomGreen.jpg';
import mushroomBlack from '../../img/mushroomBlack.jpg';
import { adventureDiary } from '../adventureDiary';

export const Header = () => {
    // onClick for Inventory
    return (
        <header>

            <div>
                <img src={bag} style={{ height: '40px' }} alt="Inventory" />
            </div>

            {adventureDiary.bagCarrier && (
                <>
                    <div>
                        <p>Bag Holder: <br/>{adventureDiary.bagCarrier}</p>
                    </div>
                </>
            )}

            <div>
                <img src={mushroomYellow} alt="Yellow Mushroom" style={{ display: adventureDiary.mushroomProperties.yellow.show ? 'block' : 'none' }} />
                <img src={mushroomBlue} alt="Blue Mushroom" style={{ display: adventureDiary.mushroomProperties.blue.show ? 'block' : 'none' }} />
                <img src={mushroomRed} alt="Red Mushroom" style={{ display: adventureDiary.mushroomProperties.red.show ? 'block' : 'none' }} />
                <img src={mushroomGreen} alt="Green Mushroom" style={{ display: adventureDiary.mushroomProperties.green.show ? 'block' : 'none' }} />
                <img src={mushroomBlack} alt="Black Mushroom" style={{ display: adventureDiary.mushroomProperties.black.show ? 'block' : 'none' }} />
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