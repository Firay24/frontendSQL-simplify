/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { LuUser } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function ProfilBar({ user }) {
  return (
    <div className="flex ml-3 items-center gap-x-3">
      <div className="bg-slate-500 rounded-full p-2 text-white">
        <LuUser />
      </div>
      <div className="text-xs text-[#5F6D7E]">
        <Link to="/profil">
          <p className="font-semibold">{user.role === 'Jamaah' ? user.role : user.region}</p>
        </Link>
        <Link to="/profil">
          <p>{user.name}</p>
        </Link>
      </div>
    </div>
  );
}

ProfilBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfilBar;
