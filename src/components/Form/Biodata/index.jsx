/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import convertToTitleCase from 'utils/convertToTitleCase';

function BiodataContainer({
  onInputChange, updatePersonalData, buttonOnClick, sendGender, prevFlock, confirmInputIsNull, formData, isFunctional,
}) {
  const [flock, setFlock] = useState({
    name: '',
    placesBirth: '',
    datesBirth: '',
    nik: '',
    fathersName: '',
    gender: '',
    job: '',
    numberPhone: '',
    mzOrigin: '',
    yearEnteredTN: '',
    kaji: '',
    suluk: '',
  });
  const [onInputIsNull, setOnInputIsNull] = useState(true);
  const [isInputTouched, setIsInputTouched] = useState({
    name: false,
    nik: false,
    fathersName: false,
  });

  useEffect(() => {
    if (formData !== null && formData !== undefined) {
      setFlock({
        name: '',
        nik: formData.nik,
        fathersName: formData.fathersName,
      });
    }
  }, [formData]);

  useEffect(() => {
    if (prevFlock !== null && prevFlock !== undefined) {
      setFlock({
        id: prevFlock._id,
        name: convertToTitleCase(prevFlock.name),
        placesBirth: convertToTitleCase(prevFlock.placesBirth),
        datesBirth: prevFlock.datesBirth.substr(0, 10),
        nik: prevFlock.nik,
        fathersName: convertToTitleCase(prevFlock.fathersName),
        gender: prevFlock.gender,
        job: convertToTitleCase(prevFlock.job),
        numberPhone: prevFlock.numberPhone,
        mzOrigin: prevFlock.mzOrigin,
      });
    }
  }, [prevFlock]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nik') {
      if (!/^\S*$/.test(value)) {
        return;
      }
      setFlock((prevState) => ({
        ...prevState,
        [name]: value.replace(/\s/g, ''),
      }));
    }
    setFlock((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (updatePersonalData) {
      updatePersonalData(
        name === 'name' ? value : flock.name,
        name === 'nik' ? value : flock.nik,
        name === 'fathersName' ? value : flock.fathersName,
      );
    }
  };

  const handleInputBlur = (inputName) => {
    setIsInputTouched((prevState) => ({
      ...prevState,
      [inputName]: true,
    }));
  };

  useEffect(() => {
    onInputChange(flock);
  }, [buttonOnClick, flock, onInputChange]);

  useEffect(() => {
    if (sendGender) {
      sendGender(flock.gender);
    }
  }, [flock, sendGender]);

  useEffect(() => {
    if (buttonOnClick) {
      setFlock({
        name: '',
        nik: '',
        fathersName: '',
        placesBirth: '',
        datesBirth: '',
        gender: '',
        job: '',
        numberPhone: '',
        mzOrigin: '',
        yearEnteredTN: '',
        kaji: '',
        suluk: '',
      });
    }
  }, [buttonOnClick]);

  useEffect(() => {
    if (flock.name !== '' && flock.fathersName !== '' && flock.nik !== '') {
      setOnInputIsNull(false);
    } else {
      setOnInputIsNull(true);
    }
  }, [flock]);

  useEffect(() => {
    if (confirmInputIsNull) {
      confirmInputIsNull(onInputIsNull);
    }
  }, [onInputIsNull]);

  return (
    <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
      <p className="text-sm font-medium text-basic-blue mb-5">Identitas Pribadi</p>
      <form className="flex flex-col gap-y-2">
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            name="name"
            value={flock.name && convertToTitleCase(flock.name)}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur('name')}
            autoComplete="new-password"
            className={`rounded text-xs border-gray-400 ${isInputTouched.name && (flock.name === '') ? 'border-red-400' : ''}`}
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="nik">NIK</label>
          <input
            type="number"
            id="nik"
            name="nik"
            value={flock.nik}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur('nik')}
            autoComplete="new-password"
            className={`rounded text-xs border-gray-400 ${isInputTouched.nik && flock.nik === '' ? 'border-red-400' : ''} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="fathersName">Nama bapak kandung</label>
          <input
            type="text"
            id="fathersName"
            name="fathersName"
            value={flock.fathersName && convertToTitleCase(flock.fathersName)}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur('fathersName')}
            autoComplete="new-password"
            className={`rounded text-xs border-gray-400 ${isInputTouched.fathersName && flock.fathersName === '' ? 'border-red-400' : ''}`}
          />
        </div>
        {
          !isFunctional ? (
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="gender">Jenis kelamin</label>
              <select
                name="gender"
                id="gender"
                value={flock.gender}
                onChange={handleInputChange}
                className="rounded text-xs border-gray-400"
              >
                <option value="" disabled>Pilih</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
          ) : null
        }
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="placesBirth">Tempat lahir</label>
          <input
            type="text"
            id="placesBirth"
            name="placesBirth"
            value={flock.placesBirth && convertToTitleCase(flock.placesBirth)}
            onChange={handleInputChange}
            autoComplete="new-password"
            className="rounded text-xs border-gray-400"
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="datesBirth">Tanggal lahir</label>
          <input
            type="date"
            id="datesBirth"
            name="datesBirth"
            value={flock.datesBirth}
            onChange={handleInputChange}
            className="rounded text-xs border-gray-400"
          />
        </div>
        {
          !isFunctional ? (
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="job">Pekerjaan</label>
              <input
                type="text"
                id="job"
                name="job"
                value={flock.job && convertToTitleCase(flock.job)}
                onChange={handleInputChange}
                autoComplete="new-password"
                className="rounded text-xs border-gray-400"
              />
            </div>
          ) : null
        }
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="numberPhone">Nomer HP</label>
          <input
            type="number"
            id="numberPhone"
            name="numberPhone"
            value={flock.numberPhone}
            onChange={handleInputChange}
            autoComplete="new-password"
            className="rounded text-xs border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        {
          isFunctional ? (
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="numberPhone">Asal MZ</label>
              <input
                type="text"
                id="mzOrigin"
                name="mzOrigin"
                value={flock.mzOrigin}
                onChange={handleInputChange}
                autoComplete="new-password"
                className="rounded text-xs border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          ) : null
        }
      </form>
    </div>
  );
}

BiodataContainer.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  updatePersonalData: PropTypes.func,
  buttonOnClick: PropTypes.bool,
  sendGender: PropTypes.func,
  prevFlock: PropTypes.object,
  confirmInputIsNull: PropTypes.func,
  formData: PropTypes.object,
  isFunctional: PropTypes.bool,
};

BiodataContainer.defaultProps = {
  isFunctional: false,
};

export default BiodataContainer;
