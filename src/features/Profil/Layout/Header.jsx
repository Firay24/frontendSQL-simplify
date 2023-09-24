import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Header/HeaderTitle';
import ButtonLogout from 'components/Button/Logout';

function Header({ name, role, onLogout }) {
  return (
    <div className="flex items-center justify-between">
      <Title title={name} subheader={role} />
      <div>
        <ButtonLogout onLogout={onLogout} />
      </div>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
