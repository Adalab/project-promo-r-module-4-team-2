//services
import { useState } from 'react';
import localCard from '../services/api';
import ls from '../services/localstorage';
//components
import scrollDown from '../images/ico-scroll-down.svg';
import HeaderCreate from './HeaderCreate';
import FieldsetRellena from './FieldsetRellena';
import SectionCard from './SectionCard';
import Comparte from './Comparte';
import Design from './Design';

const Card = () => {
  //Avatar
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar)
    setUser({ ...user, photo: avatar });
    ls.set('obj', { ...user, photo: avatar });

  }
  //fin Avatar
  const [user, setUser] = useState(
    ls.get('obj', {
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    })
  );

  const [designIsOpen, setDesignIsOpen] = useState(true);
  const [fillIsOpen, setFillIsOpen] = useState(false);
  const [shareIsOpen, setShareIsOpen] = useState(false);
  const [arrowRotateDesign, setArrowRotateDesign] = useState('arrowRotate');
  const [arrowRotateFill, setArrowRotateFill] = useState('');
  const [arrowRotateShare, setArrowRotateShare] = useState('');
  const [fetchResponse, setFetchResponse] = useState('');
  const [hiddenShare, setHiddenShare] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInput = (inputValue, inputName) => {
    setUser({ ...user, [inputName]: inputValue });
    ls.set('obj', { ...user, [inputName]: inputValue });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setUser({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
    ls.clear();
  };
  const handleClickCreate = () => {
    setHiddenShare(false);
    localCard(user).then((response) => {
      setFetchResponse(response);
    });
  };

  const handleToggleDesign = () => {
    if (designIsOpen === false) {
      setDesignIsOpen(!designIsOpen);
      setFillIsOpen(false);
      setShareIsOpen(false);
      setArrowRotateDesign('arrowRotate');
      setArrowRotateFill('');
      setArrowRotateShare('');
    }
  };

  const handleToggleFill = () => {
    if (fillIsOpen === false) {
      setFillIsOpen(!fillIsOpen);
      setShareIsOpen(false);
      setDesignIsOpen(false);
      setArrowRotateFill('arrowRotate');
      setArrowRotateDesign('');
      setArrowRotateShare('');
    }
  };

  const handleToggleShare = () => {
    // if (shareIsOpen === false) {
    setShareIsOpen(!shareIsOpen);
    setFillIsOpen(false);
    setDesignIsOpen(false);
    setArrowRotateShare('arrowRotate');
    setArrowRotateFill('');
    setArrowRotateDesign('');
    // }
  };
  return (
    <>
      {/* HEADER */}
      <HeaderCreate></HeaderCreate>
      <main className="mainCreate">
        {/* TARJETA */}
        <SectionCard
          event={handleReset}
          valueName={user.name}
          valueJob={user.job}
          valuePalette={user.palette}
          valuePhone={user.phone}
          valueEmail={user.email}
          valueLinkedin={user.linkedin}
          valueGithub={user.github}
          avatar={user.photo}
          updateAvatar={updateAvatar}
        ></SectionCard>

        {/* CUESTIONARIO */}
        <form className="mainCreate__design" onSubmit={handleSubmit}>
          {/* DISEÑA */}
          <Design
            handleToggleDesign={handleToggleDesign}
            designIsOpen={designIsOpen}
            userpalette={user.palette}
            scrollDown={scrollDown}
            arrowRotateDesign={arrowRotateDesign}
            handleInput={handleInput}
          ></Design>

          {/* RELLENA */}

          <FieldsetRellena
            fillState={fillIsOpen}
            valueName={user.name}
            valueJob={user.job}
            valueEmail={user.email}
            valuePhone={user.phone}
            valueLinkedin={user.linkedin}
            valueGithub={user.github}
            handleInput={handleInput}
            eventClick={handleToggleFill}
            src={scrollDown}
            arrowState={arrowRotateFill}
            reponse={fetchResponse}
            avatar={user.photo}
            updateAvatar={updateAvatar}
          />

          {/* COMPARTE */}
          <Comparte
            src={scrollDown}
            handleToggleShare={handleToggleShare}
            arrowRotateShare={arrowRotateShare}
            shareIsOpen={shareIsOpen}
            handleClickCreate={handleClickCreate}
            fetchResponse={fetchResponse}
            hiddenShare={hiddenShare}
          />
        </form>
      </main>
    </>
  );
};

export default Card;
