import React from 'react';
import { BsTable } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuBar({ data, pathRead, pathAdd }) {
  const location = useLocation();
  const locationPath = location.pathname;

  return (
    <div className="w-full text-xs mb-3">
      <div className="py-2 px-3 cursor-default">
        <p className="font-semibold">{data}</p>
      </div>
      <div className="text-[#5F6D7E] mt-1">
        <div className={`flex items-center cursor-pointer gap-x-3 py-2 px-3 hover:bg-[#E6E9EC] hover:border-l-2 hover:border-gray-600 ${locationPath === pathRead ? 'bg-[#E6E9EC] border-l-2 border-gray-600' : ''}`}>
          <BsTable />
          <NavLink to={pathRead}>
            <p>Lihat data</p>
          </NavLink>
        </div>
        <div className={`flex items-center cursor-pointer gap-x-3 py-2 px-3 hover:bg-[#E6E9EC] hover:border-l-2 hover:border-gray-600 ${locationPath === pathAdd ? 'bg-[#E6E9EC] border-l-2 border-gray-600' : ''}`}>
          <IoMdPersonAdd />
          <NavLink to={pathAdd}>
            <p>Tambah data</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

MenuBar.propTypes = {
  data: PropTypes.string.isRequired,
  pathAdd: PropTypes.string.isRequired,
  pathRead: PropTypes.string.isRequired,
};

export default MenuBar;
