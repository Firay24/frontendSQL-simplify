/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';

function ButtonOnLink({
  text, path, addButton, styleButton, goHome,
}) {
  return (
    <Link to={path} className={`${styleButton} ${goHome ? 'bg-grey-light hover:bg-basic-grey' : 'bg-basic-blue hover:bg-blue-dark'} flex justify-center items-center text-white text-xs p-2 rounded gap-x-1`}>
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
};

ButtonOnLink.defaultProps = {
  addButton: false,
  styleButton: '',
  goHome: false,
};

export default ButtonOnLink;
