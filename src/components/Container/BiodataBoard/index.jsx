/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function BiodataMZContainer({ board }) {
  return (
    <div className="grid grid-cols-2 text-xs text-grey-light mt-3 mb-5">
      <div className="mt-3 mb-5">
        <h3 className="text-sm text-grey-light font-normal">Informasi umum</h3>
        <div className="flex flex-col gap-y-1 mt-3">
          <p>Nama MZ</p>
          <p className="text-basic-grey text-sm font-medium">{board && board.name}</p>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <p>Asal Korwil</p>
          <p className="text-basic-grey text-sm font-medium">{board && board.regionProvince}</p>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <p>Nama Korwil</p>
          <p className="text-basic-grey text-sm font-medium">{board && board.coordinatorName}</p>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <p>Asal BKMZ</p>
          <p className="text-basic-grey text-sm font-medium">{board && board.regionBKMZ}</p>
        </div>
      </div>
      <div className="flex gap-x-5">
        <div className="h-full w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
        <div>
          <h3 className="text-sm text-grey-light font-normal">Informasi detail</h3>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Status MZ</p>
            <p className="text-basic-grey text-sm font-medium">{board && board.statusBoard}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Kategori SK 117</p>
            <p className="text-basic-grey text-sm font-medium">{board && board.SKCategory}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Status Tanah</p>
            <p className="text-basic-grey text-sm font-medium">{board && board.landStatus}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Status Bangunan</p>
            <p className="text-basic-grey text-sm font-medium">{board && board.buildingState}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

BiodataMZContainer.propTypes = {
  board: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default BiodataMZContainer;
