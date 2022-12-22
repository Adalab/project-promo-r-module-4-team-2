import '../styles/components/Footer.scss';
import logo from'../images/logo-adalab.png';


const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__small">Awesome profile-cards &copy; 2022</small>
      <img src={logo} className="footer__img" alt="Logo Adalab" />
    </footer>
  )
};
export default Footer;
