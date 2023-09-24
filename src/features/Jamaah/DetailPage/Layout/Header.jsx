/* eslint-disable import/no-duplicates */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Header/HeaderTitle';
import AddButton from 'components/Button/ButtonOnLink';
import BackButton from 'components/Button/ButtonOnLink';

function Header({ name, nik, isFunctional }) {
  return (
    <div className="flex items-center justify-between">
      <Title title={name} subheader={nik} />
      <div className="flex gap-x-2">
        <BackButton text="Kembali" goHome path="/jamaah/listData" />
        {
          isFunctional ? <AddButton text="Data fungsional" path="/fungsional/addData" addButton /> : null
        }
      </div>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  nik: PropTypes.string.isRequired,
  isFunctional: PropTypes.bool.isRequired,
};

export default Header;
