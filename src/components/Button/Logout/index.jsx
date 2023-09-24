import React from 'react';
import PropTypes from 'prop-types';
import { FaPowerOff } from 'react-icons/fa';

function ButtonLogout({ onLogout }) {
  return (
    <button type="submit" onClick={onLogout} className="flex items-center text-red-600 gap-x-2 hover:bg-red-100 p-2 rounded text-base">
      <FaPowerOff />
      Keluar
    </button>
  );
}

ButtonLogout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default ButtonLogout;
