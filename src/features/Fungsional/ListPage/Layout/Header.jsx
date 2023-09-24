import React from 'react';
import AddButton from 'components/Button/ButtonOnLink';
import Title from 'components/Header/HeaderTitle';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Title title="Data Fungsional" subheader="data fungsional" />
      <div>
        <AddButton text="Data fungsional" path="/fungsional/addData" addButton />
      </div>
    </div>
  );
}

export default Header;
