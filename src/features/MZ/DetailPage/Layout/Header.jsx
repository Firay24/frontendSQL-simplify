import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Header/HeaderTitle';
import BackButton from 'components/Button/ButtonOnLink';

function Header({ name, regency }) {
  return (
    <div className="flex items-center justify-between">
      <Title title={name} subheader={regency} />
      <BackButton text="Kembali" goHome path="/mz/listData" />
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  regency: PropTypes.string.isRequired,
};

export default Header;
