/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BiodataContainer from 'components/Form/Biodata';
import AddressContainer from 'components/Form/Address';
import FunctionalContainer from 'components/Form/Fungsional';
import SubmitButton from 'components/Button/ButtonOnClick';

function InputDataSection({
  isAvailable,
  flock,
  addFlock,
  addFunctional,
  updatePersonalData,
  personalData,
  province,
  selectedProvince,
  regency,
  selectedRegency,
  subdistrict,
  selectedSubdistrict,
  ward,
  formData,
}) {
  const [dataComponent, setDataComponent] = useState({});
  const [dataFunctional, setDataFunctional] = useState({});
  const [dataFunctionalFull, setDataFungctionalFull] = useState({});
  const [buttonOnClick, setButtonOnClik] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const handleInputChangeFlock = useCallback((data) => {
    setDataComponent((prevState) => ({
      ...prevState,
      ...data,
    }));
  }, []);

  const handleInputChangeFunc = useCallback((data) => {
    setDataFunctional(data);
  }, []);

  const handlerConfirmIsNullOnInput = (value) => {
    setIsDisabledButton(value);
  };

  const handleSubmit = () => {
    addFlock(dataComponent);
    addFunctional(dataFunctionalFull);
    setButtonOnClik(true);
  };

  const handleSubmitFunc = () => {
    addFunctional(dataFunctionalFull);
    setButtonOnClik(true);
  };

  useEffect(() => {
    if (flock && dataFunctional) {
      setDataFungctionalFull({
        name: flock.name,
        nik: flock.nik,
        fathersName: flock.fathersName,
        ...dataFunctional,
      });
    }
  }, [dataFunctional, flock]);

  useEffect(() => {
    setButtonOnClik(false);
  }, [dataComponent, dataFunctional]);

  return (
    <div>
      {
        isAvailable === '' ? (
          <div>
            <div className="grid grid-cols-2 gap-x-5 mt-5">
              <div>
                <BiodataContainer
                  isFunctional
                  updatePersonalData={updatePersonalData}
                  onInputChange={handleInputChangeFlock}
                  buttonOnClick={buttonOnClick}
                  formData={formData}
                  confirmInputIsNull={handlerConfirmIsNullOnInput}
                />
              </div>
              <div>
                <AddressContainer
                  onInputChange={handleInputChangeFlock}
                  buttonOnClick={buttonOnClick}
                  province={province}
                  selectedProvince={selectedProvince}
                  regency={regency}
                  selectedRegency={selectedRegency}
                  subdistrict={subdistrict}
                  selectedSubdistrict={selectedSubdistrict}
                  ward={ward}
                />
              </div>
            </div>
            <div className="mt-5">
              <FunctionalContainer personalData={personalData} onInputChange={handleInputChangeFunc} buttonOnClick={buttonOnClick} />
            </div>
            <div className="mt-8 mb-8 flex justify-end">
              <SubmitButton text="Submit" onClick={handleSubmit} handlerOnDisabled={isDisabledButton} bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <FunctionalContainer personalData={personalData} onInputChange={handleInputChangeFunc} buttonOnClick={buttonOnClick} />
            </div>
            <div className="mt-8 mb-8 flex justify-end">
              <SubmitButton text="Submit" onClick={handleSubmitFunc} bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
            </div>
          </div>
        )
      }
    </div>
  );
}

InputDataSection.propTypes = {
  isAvailable: PropTypes.string,
  addFlock: PropTypes.func,
  addFunctional: PropTypes.func,
  updatePersonalData: PropTypes.func,
  personalData: PropTypes.object,
  province: PropTypes.object,
  selectedProvince: PropTypes.func,
  regency: PropTypes.object,
  selectedRegency: PropTypes.func,
  subdistrict: PropTypes.object,
  selectedSubdistrict: PropTypes.func,
  ward: PropTypes.object,
  formData: PropTypes.object,
  flock: PropTypes.object,
};

export default InputDataSection;
