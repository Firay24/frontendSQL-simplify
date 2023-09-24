/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function ProfilSection({ user }) {
  console.log(user);
  return (
    <div className="bg-white mt-5 p-6 drop-shadow-sm rounded">
      <h2 className="text-lg text-basic-blue font-medium">Detail Profil</h2>
      <div className="text-sm text-grey-light mt-4 mb-5">
        <div className="flex flex-col gap-y-1">
          <p>Username</p>
          <div className="border border-gray-300 py-2 px-3 rounded mt-2">
            <p className="text-basic-grey text-sm font-medium">{user.username}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 mt-4">
          <p>Nama lengkap</p>
          <div className="border border-gray-300 py-2 px-3 rounded mt-2">
            <p className="text-basic-grey text-sm font-medium">{user.name}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 mt-4">
          <p>Role</p>
          <div className="border border-gray-300 py-2 px-3 rounded mt-2">
            <p className="text-basic-grey text-sm font-medium">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfilSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfilSection;
