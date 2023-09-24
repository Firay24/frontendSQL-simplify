import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Header/HeaderTitle';
import BackButton from 'components/Button/ButtonOnLink';

function Header({ id }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Title title="Tambah catatan" subheader="Data MZ" />
        <BackButton text="Kembali" goHome path={`/mz/catatan/listData/${id}`} />
      </div>
    </div>
  );
}

Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
