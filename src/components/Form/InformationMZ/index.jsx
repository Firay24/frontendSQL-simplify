/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import convertToTitleCase from 'utils/convertToTitleCase';

function InformationMZ({
  onInputChange, buttonOnClick, receiveGender, prevFlock,
}) {
  const [informationTN, setInformationTN] = useState({
    mzOrigin: '',
    yearEnteredTN: '',
    suluk: '',
    kaji: '',
  });

  const kaji = ['Ismuzat', 'Lataif', 'Wukuf', 'Muraqabah Itlaq', 'D1', 'Petoto', 'Pentawajjuh', 'Pentareqat', 'PZ'];

  useEffect(() => {
    if (prevFlock !== null && prevFlock !== undefined) {
      setInformationTN({
        mzOrigin: prevFlock.mzOrigin,
        yearEnteredTN: prevFlock.yearEnteredTN,
        suluk: prevFlock.suluk,
        kaji: prevFlock.kaji,
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
        suluk: '',
        kaji: '',
      });
    }
  }, [buttonOnClick]);

  return (
    <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
      <p className="text-sm font-medium text-basic-blue mb-5">Informasi MZ</p>
      <form>
        <div className="grid grid-cols-2 gap-x-14">
          <div className="flex flex-col gap-y-2">
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
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="suluk">Suluk</label>
              <input
                type="number"
                id="suluk"
                name="suluk"
                value={informationTN.suluk}
                onChange={handleInputChange}
                autoComplete="new-password"
                className="rounded text-xs border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="kaji">Kaji</label>
              <select
                name="kaji"
                id="kaji"
                value={informationTN.kaji}
                onChange={handleInputChange}
                className="rounded text-xs border-gray-400"
              >
                <option value="">Pilih</option>
                {
                                    receiveGender === 'perempuan' ? (
                                      kaji.slice(0, 5).map((itemKaji, index) => (
                                        <option key={index} value={itemKaji}>{itemKaji}</option>
                                      ))
                                    ) : (
                                      kaji.map((itemKaji, index) => (
                                        <option key={index} value={itemKaji}>{itemKaji}</option>
                                      ))
                                    )
                                }
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

InformationMZ.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  buttonOnClick: PropTypes.bool.isRequired,
  receiveGender: PropTypes.string.isRequired,
  prevFlock: PropTypes.object,
};

export default InformationMZ;
