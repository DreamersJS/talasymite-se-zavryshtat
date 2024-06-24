import bag from '../../img/bag.png';
import mushroomYellow from '../../img/mushroomYellow.png';
import mushroomBlue from '../../img/mushroomBlue.png';
import mushroomRed from '../../img/mushroomRed.png';
import mushroomGreen from '../../img/mushroomGreen.png';
import mushroomBlack from '../../img/mushroomBlack.png';
import { adventureDiary } from '../adventureDiary';

export const Header = () => {

    return (
        <header>

            <h3>Inventory</h3>
            <div>
                <img src={bag} alt="Inventory" />
            </div>
            {adventureDiary.bagCarrier && (
                <>
                    <h3>BadHolder</h3>
                    <div>
                        <p>Bag Holder: {adventureDiary.bagCarrier}</p>
                    </div>
                </>
            )}

            <h3>Mushrooms</h3>
            <div>
                <img src={mushroomYellow} alt="Yellow Mushroom" style={{ display: adventureDiary.mushroomProperties.yellow.show ? 'block' : 'none' }} />
                <img src={mushroomBlue} alt="Blue Mushroom" style={{ display: adventureDiary.mushroomProperties.blue.show ? 'block' : 'none' }} />
                <img src={mushroomRed} alt="Red Mushroom" style={{ display: adventureDiary.mushroomProperties.red.show ? 'block' : 'none' }} />
                <img src={mushroomGreen} alt="Green Mushroom" style={{ display: adventureDiary.mushroomProperties.green.show ? 'block' : 'none' }} />
                <img src={mushroomBlack} alt="Black Mushroom" style={{ display: adventureDiary.mushroomProperties.black.show ? 'block' : 'none' }} />
            </div>

            {adventureDiary.secret.show && (
                <>
                    <h3>Secret</h3>
                    <div id="secretDiv">{adventureDiary.secret.text}</div>
                </>
            )}

        </header>
    );
}