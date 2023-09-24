/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import convertToTitleCase from 'utils/convertToTitleCase';

function InputHeadOfBoard({
  headData, onInputChange, headLevel, headKey,
}) {
  const handleChange = (event, field) => {
    onInputChange(headKey, field, event.target.value);
  };

  return (
    <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
      <p className="text-sm font-medium text-basic-blue mb-5">{headLevel}</p>
      <form className="flex flex-col gap-y-2">
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="nameHead">Nama Lengkap</label>
          <input
            type="text"
            id="nameHead"
            name="nameHead"
            value={convertToTitleCase(headData.nameHead)}
            onChange={(event) => handleChange(event, 'nameHead')}
            autoComplete="new-password"
            className="rounded text-xs border-gray-400"
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="phoneNumber">Nomor HP</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={convertToTitleCase(headData.phoneNumber)}
            onChange={(event) => handleChange(event, 'phoneNumber')}
            autoComplete="new-password"
            className="rounded text-xs border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="SKNumber">Nomor SK</label>
          <input
            type="number"
            id="SKNumber"
            name="SKNumber"
            value={convertToTitleCase(headData.SKNumber)}
            onChange={(event) => handleChange(event, 'SKNumber')}
            autoComplete="new-password"
            className="rounded text-xs border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="SKYear">Tahun SK</label>
          <input
            type="number"
            id="SKYear"
            name="SKYear"
            value={headData.SKYear}
            onChange={(event) => handleChange(event, 'SKYear')}
            autoComplete="new-password"
            className="rounded text-xs border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
      </form>
    </div>
  );
}

InputHeadOfBoard.propTypes = {
  headData: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  headLevel: PropTypes.string.isRequired,
  headKey: PropTypes.string.isRequired,
};

export default InputHeadOfBoard;
