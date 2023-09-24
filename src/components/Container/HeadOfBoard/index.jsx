/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function HeadOfBoardContainer({ board, headLevel }) {
  return (
    <div className="mt-3 mb-5">
      <h3 className="text-sm text-grey-light font-normal">{headLevel}</h3>
      <div className="text-xs text-grey-light mt-3 mb-5">
        <div className="flex flex-col gap-y-1">
          <p>Nama</p>
          <p className="text-basic-grey text-sm font-medium">{board && board.nameHead}</p>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <p>Nomor HP</p>
          <p className="text-basic-grey text-sm font-medium">{board && board.phoneNumber}</p>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <p>Nomor SK</p>
          <p className="text-basic-grey text-sm font-medium">{board && board.SKNumber}</p>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <p>Tahun SK</p>
          <p className="text-basic-grey text-sm font-medium">{board && board.SKYear}</p>
        </div>
      </div>
    </div>
  );
}

HeadOfBoardContainer.propTypes = {
  board: PropTypes.object.isRequired,
  headLevel: PropTypes.string.isRequired,
};

export default HeadOfBoardContainer;
