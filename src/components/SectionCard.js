import '../styles/components/SectionCard.scss';
import Profile from './Profile';
import Reset from './Reset';

const SectionCard = (props) => {
  return (
    <section className="mainCreate__card card">
      {/* Reset */}
      <Reset event={props.event}></Reset>
      <article
        className={`js_card_article card__article palette${props.valuePalette}`}
      >
        <div className="header-card card__article--data">
          <h2 className="name js_card_name">
            {props.valueName === '' ? 'Nombre Apellidos' : props.valueName}
          </h2>
          <h3 className="text js_card_job">
            {props.valueJob === '' ? 'Front-end Developer' : props.valueJob}
          </h3>
        </div>
        <Profile avatar={props.avatar} />
        <nav className="card__article--links">
          <a className="js_card_phone" href={`tel:${props.valuePhone}`}>
            <i className="fa-solid fa-mobile-screen-button icon"></i>
          </a>
          <a className="js_card_email" href={`mailto:${props.valueEmail}`}>
            <i className="fa-regular fa-envelope icon"></i>
          </a>
          <a
            className="js_card_linkedin"
            href={`www.linkedin.com/in/${props.valueLinkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in icon"></i>
          </a>
          <a
            className="js_card_github"
            href={`https://github.com/${props.valueGithub}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github-alt icon"></i>
          </a>
        </nav>
      </article>
    </section>
  );
};

export default SectionCard;
