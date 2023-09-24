/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from 'components/Button/ButtonOnClick';

function ConfirmAddData({
  selectedOptionFunctional, onOptionChangeFunctional, onSubmit, isFunctional,
}) {
  const [visible, setVisible] = useState('');
  const [formData, setFormData] = useState({
    nik: '',
    fathersName: '',
  });

  const handleOptionChange = (event) => {
    const newValue = event.target.value;
    onOptionChangeFunctional(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nik') {
      if (!/^\S*$/.test(value)) {
        return;
      }
      setFormData({ ...formData, [name]: value.replace(/\s/g, '') });
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);

    setFormData({
      nik: '',
      fathersName: '',
    });
  };

  return (
    <div>
      {
        !isFunctional ? (
          <div className="grid grid-cols-2 bg-white mt-5 p-6 drop-shadow-sm rounded text-xs text-basic-grey">
            <div>
              <p className="text-basic-blue text-sm font-medium mb-3">Konfirmasi</p>
              <p>Apakah Anda adalah petugas fungsional?</p>
              <div className="flex gap-x-5">
                <div className="flex items-center mt-5">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="functional"
                    checked={selectedOptionFunctional === 'functional'}
                    onChange={handleOptionChange}
                    name="default-radio"
                    onClick={() => setVisible(true)}
                    className="w-3 h-3 text-basic-blue outline-none focus:ring-0"
                  />
                  <label htmlFor="default-radio-1" className="ml-2">Ya, Saya petugas fungsional</label>
                </div>
                <div className="flex items-center mt-5">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="non-functional"
                    checked={selectedOptionFunctional === 'non-functional'}
                    onChange={handleOptionChange}
                    name="default-radio"
                    onClick={() => setVisible(false)}
                    className="w-3 h-3 text-basic-blue outline-none focus:ring-0"
                  />
                  <label htmlFor="default-radio-1" className="ml-2">Tidak, Saya bukan fungsional</label>
                </div>
              </div>
            </div>
            {
                visible
                && (
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <div className="grid grid-cols-2 gap-x-5 text-basic-grey">
                      <div className="flex flex-col">
                        <label htmlFor="nik">NIK</label>
                        <input
                          type="number"
                          id="nik"
                          name="nik"
                          value={formData.nik}
                          onChange={handleInputChange}
                          required
                          className="rounded text-xs border-gray-400 mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="fathersName">Nama bapak kandung</label>
                        <input
                          type="text"
                          id="fathersName"
                          name="fathersName"
                          value={formData.fathersName}
                          onChange={handleInputChange}
                          required
                          className="rounded text-xs border-gray-400 mt-2"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-3">
                      <SubmitButton text="Submit" bgColor="w-1/4 bg-slate-300 hover:bg-slate-400" />
                    </div>
                  </div>
                </form>
                )
            }
          </div>
        ) : (
          <div className="bg-white mt-5 p-6 drop-shadow-sm rounded text-xs text-basic-grey">
            <p className="text-basic-blue text-sm font-medium mb-3">Konfirmasi</p>
            <p>Isi data tersebut untuk melakukan cek apakah Anda terdaftar sebagai data jamaah atau belum</p>
            <form className="grid grid-cols-2 gap-x-5 justify-between mt-3" onSubmit={handleSubmit}>
              <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                  <label htmlFor="nik">NIK</label>
                  <input
                    type="number"
                    id="nik"
                    name="nik"
                    value={formData.nik}
                    onChange={handleInputChange}
                    required
                    className="rounded text-xs border-gray-400 mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <label htmlFor="fathersName">Nama bapak kandung</label>
                  <input
                    type="text"
                    id="fathersName"
                    name="fathersName"
                    value={formData.fathersName}
                    onChange={handleInputChange}
                    required
                    className="rounded text-xs border-gray-400 mt-2"
                  />
                </div>
              </div>
              <div className="flex mt-3 items-end">
                <SubmitButton text="Submit" bgColor="w-1/2 bg-slate-300 hover:bg-slate-400" />
              </div>
            </form>
          </div>
        )
      }
    </div>
  );
}

ConfirmAddData.propTypes = {
  selectedOptionFunctional: PropTypes.string,
  onOptionChangeFunctional: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  isFunctional: PropTypes.bool,
};

ConfirmAddData.defaultProps = {
  isFunctional: false,
};

export default ConfirmAddData;
