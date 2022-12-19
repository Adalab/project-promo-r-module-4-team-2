import image from '../images/title.png';
import '../styles/components/HeaderCreate.scss';
import { Link } from 'react-router-dom';
const HeaderCreate = () => {
    return (
        <header className="headerCreate">
            <Link to="/">
                <img
                    src={image}
                    className="headerCreate__img"
                    alt="Logo Awesome profile-cards"
                />
            </Link>
        </header>
    )
};

export default HeaderCreate;