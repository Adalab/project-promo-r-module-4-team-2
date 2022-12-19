import image from '../images/title.png';
import '../styles/components/HeaderLanding.scss';
const HeaderLanding = () => {
  return (
    <header className="header">
      <a href="./index.html">
        <img
          src={image}
          className="header__img"
          alt="Logo Awesome profile-cards"
        />
      </a>
    </header>
  );
};

export default HeaderLanding;
