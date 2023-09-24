import React from 'react';
import Selected from 'components/Filter/Selected';
import SearchWithIcon from 'components/Filter/InputWithIcon';

function SearchField() {
  const kaji = [];

  return (
    <div className="bg-white mt-5 p-6 drop-shadow-sm rounded">
      <p className="text-sm text-basic-blue mb-3">Data Search Fields</p>
      <div className="flex flex-col gap-y-3">
        <div className="grid grid-cols-3 gap-5">
          <Selected text="Kaji" optionOfSelect={kaji} />
          <Selected text="Kabupaten" optionOfSelect={kaji} />
          <div className="relative text-xs">
            <SearchWithIcon />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 items-center">
          <Selected text="Fungsional" optionOfSelect={kaji} />
          <Selected text="Fungsional" optionOfSelect={kaji} />
          <Selected text="Fungsional" optionOfSelect={kaji} />
        </div>
      </div>
    </div>
  );
}

export default SearchField;
