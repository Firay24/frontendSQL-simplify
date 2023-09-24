import React from 'react';
import Title from 'components/Header/HeaderTitle';
import BackButton from 'components/Button/ButtonOnClick';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Title title="Detail data catatan" subheader="Data MZ" />
      <div>
        <BackButton text="Kembali" goBack bgColor="bg-basic-blue hover:bg-blue-dark text-white text-xs" />
      </div>
    </div>
  );
}

export default Header;
