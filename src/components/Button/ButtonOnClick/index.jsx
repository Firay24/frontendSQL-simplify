/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { BiChevronLeft } from 'react-icons/bi';

function buttonOnClick({
  onClick, text, bgColor, addButton = false, goBack = false, guideFileButton = false, handlerOnDisabled,
}) {
  const navigation = useNavigate();
  const goBackFunc = () => {
    navigation(-1);
  };

  return (
    <button type="submit" onClick={goBack ? goBackFunc : onClick} disabled={handlerOnDisabled} className={`flex items-center justify-center ${guideFileButton ? 'text-base' : 'text-xs'} p-2 rounded gap-x-1 ${bgColor} ${handlerOnDisabled ? 'cursor-not-allowed bg-blue-300 hover:bg-blue-300' : ''}`}>
      { addButton ? <AiOutlinePlus /> : guideFileButton ? <BsFillFileEarmarkTextFill /> : goBack ? <BiChevronLeft /> : null }
      { text }
    </button>
  );
}

buttonOnClick.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  addButton: PropTypes.bool,
  goBack: PropTypes.bool,
  guideFileButton: PropTypes.bool,
  handlerOnDisabled: PropTypes.bool,
};

export default buttonOnClick;
