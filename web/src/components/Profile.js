import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/image.png';
// import '../styles/components/Profile.scss';

function Profile(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div
      className="card__article--photo js_card_img js__profile-image"
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
