import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Header/HeaderTitle';
import BackButton from 'components/Button/ButtonOnLink';

function Header({ id }) {
  return (
    <div className="flex items-center justify-between">
      <Title title="Edit data catatan" subheader="Data jamaah" />
      <BackButton text="Kembali" goHome path={`/jamaah/catatan/listData/${id}`} />
    </div>
  );
}

Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
