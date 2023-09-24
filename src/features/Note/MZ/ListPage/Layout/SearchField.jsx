import React from 'react';
import InputOnDate from 'components/Filter/InputDate';
import InputWithIcon from 'components/Filter/InputWithIcon';
import ButtonOnSearch from 'components/Button/ButtonOnClick';

function SearchField() {
  return (
    <div className="bg-white mt-5 p-6 drop-shadow-sm rounded">
      <p className="text-sm text-basic-blue mb-3">Data Search Fields</p>
      <div className="flex flex-col gap-y-3">
        <div className="grid grid-cols-3 gap-5 items-center">
          <div className="relative">
            <InputOnDate />
          </div>
          <div className="relative text-xs">
            <InputWithIcon />
          </div>
          <div className="relative">
            <ButtonOnSearch text="Cari" bgColor="w-full text-basic-grey bg-gray-200 hover:bg-gray-300 border-[1.5px] border-neutral-300 hover:border-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchField;
