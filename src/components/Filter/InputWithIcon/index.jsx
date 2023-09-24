import React from 'react';
import { BsSearch } from 'react-icons/bs';

function InputWithIcon() {
  return (
    <div>
      <input type="text" placeholder="cari" className="w-full rounded px-4 py-2 text-xs outline-none focus:border-blue-500 border-[1px] border-gray-400" />
      <div className="absolute right-0 top-0 mt-3 mr-4">
        <BsSearch />
      </div>
    </div>
  );
}

export default InputWithIcon;
