/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function InformationMZ({ flock }) {
  return (
    <div>
      <h2 className="text-base text-basic-blue font-medium">Informasi MZ</h2>
      <div className="grid grid-cols-2 mt-5">
        <div className="text-xs text-grey-light mb-3">
          <div className="flex flex-col gap-y-1">
            <p>Asal Korwil</p>
            <p className="text-basic-grey text-sm font-medium">Jawa Timur</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Asal BKMZ</p>
            <p className="text-basic-grey text-sm font-medium">Jatim 1</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Asal MZ</p>
            <p className="text-basic-grey text-sm font-medium">{flock && flock.mzOrigin}</p>
          </div>
        </div>
        <div className="flex text-xs gap-x-6 text-grey-light">
          <div className="h-4/5 w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
          <div>
            <div className="flex flex-col gap-y-1">
              <p>Tahun masuk TN</p>
              <p className="text-basic-grey text-sm font-medium">{flock && flock.yearEnteredTN}</p>
            </div>
            <div className="flex flex-col gap-y-1 mt-3">
              <p>Suluk ke-</p>
              <p className="text-basic-grey text-sm font-medium">{flock && flock.suluk}</p>
            </div>
            <div className="flex flex-col gap-y-1 mt-3">
              <p>Kaji</p>
              <p className="text-basic-grey text-sm font-medium">{flock && flock.kaji}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

InformationMZ.propTypes = {
  flock: PropTypes.object.isRequired,
};

export default InformationMZ;
