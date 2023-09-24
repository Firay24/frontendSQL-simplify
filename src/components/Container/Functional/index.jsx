/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ParseDateFunc from 'utils/parseDateFunc';

function FunctionalItemContainer({ functional, functionalLevel }) {
  return (
    <div className="flex gap-x-6 mt-3 mb-5">
      {
        functionalLevel === 'Pentawajuh' || functionalLevel === 'PZ' ? (
          <div className="w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
        ) : null
      }
      <div>
        <h3 className="text-sm text-grey-light font-normal">{functionalLevel}</h3>
        <div className="text-xs text-grey-light mt-3 mb-5">
          <div className="flex flex-col gap-y-1">
            <p>Status</p>
            <p className="text-basic-grey text-sm font-medium">{functional && functional.status}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Waktu</p>
            <p className="text-basic-grey text-sm font-medium">{functional && ParseDateFunc(functional.time)}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Waktu diangkat</p>
            <p className="text-basic-grey text-sm font-medium">{functional && ParseDateFunc(functional.timeLifted)}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Tempat</p>
            <p className="text-basic-grey text-sm font-medium">{functional && functional.location}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Catatan</p>
            <p className="text-basic-grey text-sm font-medium">{functional && functional.notes ? functional.notes : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

FunctionalItemContainer.propTypes = {
  functional: PropTypes.object.isRequired,
  functionalLevel: PropTypes.string.isRequired,
};

export default FunctionalItemContainer;
