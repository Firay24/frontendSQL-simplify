/* eslint-disable import/no-duplicates */
import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Header/HeaderTitle';
import AddButton from 'components/Button/ButtonOnLink';
import BackButton from 'components/Button/ButtonOnLink';

function Header({ id }) {
  return (
    <div className="flex items-center justify-between">
      <Title />
      <div className="flex gap-x-2">
        <BackButton text="Kembali" goHome path="/mz/listData" />
        <AddButton text="Tambah catatan" addButton path={`/mz/catatan/addData/${id}`} />
      </div>
    </div>
  );
}

Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
