import React from 'react';
import AddButton from 'components/Button/ButtonOnLink';
import Title from 'components/Header/HeaderTitle';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Title title="Data MZ" subheader="Data MZ" />
      <div>
        <AddButton text="Data MZ" path="/mz/addData" addButton />
      </div>
    </div>
  );
}

export default Header;
