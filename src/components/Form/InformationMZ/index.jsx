/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import convertToTitleCase from 'utils/convertToTitleCase';

function InformationMZ({
  onInputChange, buttonOnClick, prevFlock,
}) {
  const [informationTN, setInformationTN] = useState({
    mzOrigin: '',
    yearEnteredTN: '',
  });

  useEffect(() => {
    if (prevFlock !== null && prevFlock !== undefined) {
      setInformationTN({
        mzOrigin: prevFlock.mzOrigin,
        yearEnteredTN: prevFlock.yearEnteredTN,
      });
    }
  }, [prevFlock]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInformationTN((prevInformationTN) => ({
      ...prevInformationTN,
      [name]: value,
    }));
  };

  useEffect(() => {
    onInputChange(informationTN);
  }, [informationTN]);

  useEffect(() => {
    if (buttonOnClick) {
      setInformationTN({
        mzOrigin: '',
        yearEnteredTN: '',
      });
    }
  }, [buttonOnClick]);

  return (
    <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
      <p className="text-sm font-medium text-basic-blue mb-5">Informasi MZ</p>
      <form>
        <div className="grid grid-cols-2 gap-x-14">
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="mzOrigin">Asal MZ</label>
            <input
              type="text"
              id="mzOrigin"
              name="mzOrigin"
              value={convertToTitleCase(informationTN.mzOrigin)}
              onChange={handleInputChange}
              autoComplete="new-password"
              className="rounded text-xs border-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="yearEnteredTN">Tahun masuk TN</label>
            <input
              type="number"
              id="yearEnteredTN"
              name="yearEnteredTN"
              value={informationTN.yearEnteredTN}
              onChange={handleInputChange}
              autoComplete="new-password"
              className="rounded text-xs border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

InformationMZ.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  buttonOnClick: PropTypes.bool.isRequired,
  prevFlock: PropTypes.object,
};

export default InformationMZ;
