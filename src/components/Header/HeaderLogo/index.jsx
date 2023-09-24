import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../assets/onlyLogo.png';

function HeaderLogo({ title }) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img className="h-12" src={Logo} alt="logo avatar" />
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold text-basic-grey">
          {title}
          {' '}
          <span className="font-bold text-basic-blue">simplify.</span>
        </h1>
      </div>
    </div>
  );
}

HeaderLogo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderLogo;
