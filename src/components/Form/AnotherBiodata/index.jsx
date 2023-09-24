/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function AnotherBiodata({ onInputChange, buttonOnClick }) {
  const [flock, setFlock] = useState({
    gender: '',
    job: '',
    yearEnteredTN: '',
    suluk: '',
    kaji: '',
  });

  const kaji = ['Ismuzat', 'Lataif', 'Wukuf', 'Muraqabah Itlaq', 'D1', 'Petoto', 'Pentawajjuh', 'Pentareqat', 'PZ'];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFlock((prevFlock) => ({
      ...prevFlock,
      [name]: value,
    }));
  };

  useEffect(() => {
    onInputChange(flock);
  }, [buttonOnClick, flock, onInputChange]);

  useEffect(() => {
    if (buttonOnClick) {
      setFlock({
        gender: '',
        job: '',
        yearEnteredTN: '',
        suluk: '',
        kaji: '',
      });
    }
  }, [buttonOnClick]);

  return (
    <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
      <p className="text-sm font-medium text-basic-blue mb-5">Identitas Pribadi</p>
      <form action="">
        <div className="grid grid-cols-2 gap-x-14">
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="gender">Jenis Kelamin</label>
              <select
                name="gender"
                id="gender"
                value={flock.gender}
                onChange={handleInputChange}
                className="rounded text-xs border-gray-400"
              >
                <option value="">pilih</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="job">Pekerjaan</label>
              <input
                type="text"
                id="job"
                name="job"
                value={flock.job}
                onChange={handleInputChange}
                placeholder="Frelancer"
                className="rounded text-xs border-gray-400"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="yearEnteredTN">Tahun masuk TN</label>
              <input
                type="number"
                id="yearEnteredTN"
                name="yearEnteredTN"
                value={flock.yearEnteredTN}
                onChange={handleInputChange}
                placeholder="1996"
                className="rounded text-xs border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="suluk">Suluk ke</label>
              <input
                type="number"
                id="suluk"
                name="suluk"
                value={flock.suluk}
                onChange={handleInputChange}
                placeholder="2"
                className="rounded text-xs border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="kaji">Kaji</label>
              <select name="kaji" id="kaji" value={flock.kaji} onChange={handleInputChange} className="rounded text-xs border-gray-400">
                <option value="" selected>Pilih</option>
                {
                                    flock.gender === 'perempuan' ? (
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

AnotherBiodata.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  buttonOnClick: PropTypes.bool.isRequired,
};

export default AnotherBiodata;
