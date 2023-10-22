import React from 'react';
import Title from 'components/Header/HeaderTitle';
import BackButton from 'components/Button/ButtonOnClick';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Title title="Edit Data Kelas" subheader="data jamaah" />
      <div>
        <BackButton text="Kembali" goBack bgColor="bg-grey-light hover:bg-basic-grey text-white" />
      </div>
    </div>
  );
}

export default Header;
