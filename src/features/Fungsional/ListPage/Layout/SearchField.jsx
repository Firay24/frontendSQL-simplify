import React from 'react';
import Selected from 'components/Filter/Selected';
import SelectedOnSearch from 'components/Filter/SelectedOnSearch';
import ButtonOfSearch from 'components/Button/ButtonOnClick';

function SearchField() {
  const kaji = [];
  return (
    <div className="bg-white mt-5 p-6 drop-shadow-sm rounded">
      <p className="text-sm text-basic-blue mb-3">Data Search Fields</p>
      <div className="flex flex-col gap-y-3">
        <div className="grid grid-cols-3 gap-5">
          <Selected text="Kaji" optionOfSelect={kaji} />
          <Selected text="Kabupaten" optionOfSelect={kaji} />
        </div>
        <div className="grid grid-cols-3 gap-5 items-center">
          <Selected text="Fungsional" optionOfSelect={kaji} />
          <SelectedOnSearch text="Pilih" category={kaji} />
          <div>
            <ButtonOfSearch text="Cari" bgColor="w-full py-[5px] text-basic-grey bg-gray-200 rounded hover:bg-gray-300 border-[1.5px] border-neutral-300 hover:border-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchField;
