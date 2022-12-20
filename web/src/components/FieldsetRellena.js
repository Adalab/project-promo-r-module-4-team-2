import '../styles/components/FieldsetRellena.scss';
import { useState } from 'react';
import GetAvatar from './GetAvatar';

const FieldsetRellena = (props) => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const validateInput = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    props.handleInput(inputValue, inputName);

    if (inputName === 'phone') {
      const regExPhone = /[6-9]{1}[0-9]{8}/; //Se añade una comprobación para que vea si el valor del teléfono cumple con la expresión regular dada
      if (regExPhone.test(inputValue) || inputValue === '') {
        setErrorPhone(false);
      } else {
        //Si el valor no cumple con la expresión regular es visible el siguiente mensaje
        setErrorPhone(true);
      }
    } else if (inputName === 'email') {
      const regExEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; //Se añade una comprobación para que vea si el valor del teléfono cumple con la expresión regular dada
      if (regExEmail.test(inputValue) || inputValue === '') {
        setErrorEmail(false);
      } else {
        //Si el valor no cumple con la expresión regular es visible el siguiente mensaje
        setErrorEmail(true);
      }
    }
  };

  const errorPhoneText = (errorMsg) => {
    if (errorPhone) {
      return errorMsg;
    }
  };

  const errorEmailText = (errorMsg) => {
    if (errorEmail) {
      return errorMsg;
    }
  };

  const renderFill = (props) => {
    if (props.fillState === true) {
      return (
        <div action="" className="fill js-fill">
          <label htmlFor="full_name" className="fill__infoLabel">
            Nombre completo
          </label>
          <input
            type="text"
            id="full_name"
            name="name"
            className="fill__infoInput js_input_name js_inputReset"
            placeholder="Nombre Apellido"
            required
            autoComplete="name"
            value={props.valueName}
            onInput={validateInput}
          />

          <label htmlFor="job" className="fill__infoLabel">
            Puesto
          </label>
          <input
            type="text"
            id="job"
            name="job"
            className="fill__infoInput js_input_job js_inputReset"
            placeholder="Full stack developer"
            required
            value={props.valueJob}
            onInput={validateInput}
          />
          <label htmlFor="imageForm" className="fill__infoLabel">
            Imagen de perfil
          </label>

          <GetAvatar
            handleInput={props.handleInput}
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
          />
          <label htmlFor="email" className="fill__infoLabel">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="fill__infoInput js_input_email js_inputReset"
            placeholder="ejemplo@dominio.tld"
            autoComplete="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={props.valueEmail}
            onInput={validateInput}
          />
          <small className="fill__small js-small-text">
            {' '}
            {errorEmailText('El email que has introducido no es correcto.')}
          </small>

          <label htmlFor="phone" className="fill__infoLabel">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="fill__infoInput js_input_phone js_inputReset"
            placeholder="XXXXXXXXX"
            autoComplete="tel"
            required
            pattern="[6-9]{1}[0-9]{8}"
            value={props.valuePhone}
            onInput={validateInput}
          />
          <small className="fill__small js-small-text">
            {' '}
            {errorPhoneText('El teléfono que has introducido no es correcto.')}
          </small>

          <label htmlFor="linkedin" className="fill__infoLabel">
            Linkedin
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            className="fill__infoInput js_input_linkedin js_inputReset"
            placeholder="usuario"
            autoComplete="url"
            value={props.valueLinkedin}
            onInput={validateInput}
          />

          <label htmlFor="github" className="fill__infoLabel">
            Github
          </label>
          <input
            type="text"
            id="github"
            name="github"
            className="fill__infoInput js_input_github js_inputReset"
            placeholder="usuario"
            autoComplete="url"
            value={props.valueGithub}
            onInput={validateInput}
          />
        </div>
      );
    }
  };

  return (
    <fieldset>
      <div className="buttonFill js-fillClick" onClick={props.eventClick}>
        <legend className="buttonFill__title">
          <i className="fa-regular fa-keyboard"></i>Rellena
        </legend>
        <img
          src={props.src}
          className={`buttonFill__arrow js-arrow-fill ${props.arrowState}`}
          alt=""
        />
      </div>
      {renderFill(props)}
    </fieldset>
  );
};

export default FieldsetRellena;
