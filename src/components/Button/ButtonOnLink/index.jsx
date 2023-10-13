/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';

function ButtonOnLink({
  text, path, addButton, styleButton, goHome, fontStyle,
}) {
  return (
    <Link to={path} className={`${styleButton} ${goHome ? 'bg-grey-light hover:bg-basic-grey' : 'bg-basic-blue hover:bg-blue-dark'} ${fontStyle} flex justify-center items-center text-xs rounded gap-x-1`}>
      {addButton ? <AiOutlinePlus /> : goHome ? <BiChevronLeft /> : null}
      {text}
    </Link>
  );
}

ButtonOnLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  addButton: PropTypes.bool,
  styleButton: PropTypes.string,
  goHome: PropTypes.bool,
  fontStyle: PropTypes.string,
};

ButtonOnLink.defaultProps = {
  addButton: false,
  styleButton: '',
  goHome: false,
  fontStyle: 'text-white p-2',
};

export default ButtonOnLink;
