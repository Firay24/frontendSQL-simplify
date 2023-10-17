import React from 'react';
import PropTypes from 'prop-types';
import encryptMessage from 'utils/encrypt';

function HeaderTitle({ title, subheader }) {
  return (
    <div>
      <h1 className="font-semibold text-xl text-basic-grey">{title}</h1>
      <p className="text-grey-light text-xs font-light">{encryptMessage(subheader)}</p>
    </div>
  );
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
};

export default HeaderTitle;
