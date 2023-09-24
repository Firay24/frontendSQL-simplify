import React from 'react';
import logo from '../../assets/logo.png';

function LogoBar() {
  return (
    <div>
      <div className="w-28 mt-5 ml-3 mb-9">
        <img src={logo} alt="logo-avatar" />
      </div>
    </div>
  );
}

export default LogoBar;
