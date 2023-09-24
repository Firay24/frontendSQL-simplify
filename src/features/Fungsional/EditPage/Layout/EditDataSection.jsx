/* eslint-disable no-underscore-dangle */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BiodataContainer from 'components/Form/Biodata';
import AddressContainer from 'components/Form/Address';
import FunctionalContainer from 'components/Form/Fungsional';
import SubmitButton from 'components/Button/ButtonOnClick';
import Loading from 'components/Loading';

function EditDataSection({
  flock, functional, classes, suluk, notes, updateNote, updateFlock, updateFunctional, updateClass, updateSuluk, updatePersonalData, province, selectedProvince, regency, selectedRegency, subdistrict, selectedSubdistrict, ward,
}) {
  const [dataComponent, setDataComponent] = useState({});
  const [dataFunctional, setDataFunctional] = useState({});
  const [dataClass, setDataClass] = useState({});
  const [dataSuluk, setDataSuluk] = useState({});
  const [dataNote, setDataNote] = useState({});
  const [buttonOnClick, setButtonOnClik] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const handleInputChange = useCallback((data) => {
    setDataComponent((prevState) => ({
      ...prevState,
      ...data,
    }));
  }, []);

  const handleInputChangeFunc = useCallback((data) => {
    setDataFunctional((prevState) => ({
      ...prevState,
      ...data,
    }));
  }, []);

  const handleSubmitButton = () => {
    updateFlock(dataComponent);
    if (functional.data !== null) {
      updateFunctional(dataFunctional);
    }
    updateClass(dataClass && dataClass);
    updateSuluk(dataSuluk && dataSuluk);
    updateNote(dataNote && dataNote);
    setButtonOnClik(true);
  };

  const handlerConfirmIsNullOnInput = (value) => {
    setIsDisabledButton(value);
  };

  useEffect(() => {
    setButtonOnClik(false);
  }, [dataComponent, dataFunctional]);

  useEffect(() => {
    const updatedAt = new Date();
    if (functional !== undefined) {
      setDataFunctional(() => ({
        ...functional,
        fathersName: dataComponent.fathersName,
        nik: dataComponent.nik,
        name: dataComponent.name,
        updatedAt,
      }));
    }
  }, [dataComponent]);

  useEffect(() => {
    const updatedAt = new Date();
    if (notes !== undefined) {
      setDataNote(() => ({
        ...notes,
        fathersName: dataComponent.fathersName,
        nik: dataComponent.nik,
        name: dataComponent.name,
        updatedAt,
      }));
    }
  }, [dataComponent]);

  useEffect(() => {
    const updatedAt = new Date();
    if (classes !== undefined) {
      setDataClass(() => ({
        ...classes,
        fathersName: dataComponent.fathersName,
        nik: dataComponent.nik,
        name: dataComponent.name,
        updatedAt,
      }));
    }
  }, [dataComponent]);

  useEffect(() => {
    const updatedAt = new Date();
    if (suluk !== undefined) {
      setDataSuluk(() => ({
        ...suluk,
        fathersName: dataComponent.fathersName,
        nik: dataComponent.nik,
        name: dataComponent.name,
        updatedAt,
      }));
    }
  }, [dataComponent]);

  useEffect(() => {
    if (flock !== undefined && flock !== null) {
      setIsLoading(false);
    }
  }, [flock]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-5 mt-5">
        <div>
          {
            isLoading ? <Loading />
              : (
                <BiodataContainer
                  isFunctional
                  prevFlock={flock && flock}
                  onInputChange={handleInputChange}
                  buttonOnClick={buttonOnClick}
                  updatePersonalData={updatePersonalData}
                  confirmInputIsNull={handlerConfirmIsNullOnInput}
                />
              )
          }
        </div>
        <div>
          {
            isLoading ? <Loading />
              : (
                <AddressContainer
                  onInputChange={handleInputChange}
                  prevFlock={flock && flock}
                  province={province && province}
                  selectedProvince={selectedProvince}
                  regency={regency && regency}
                  selectedRegency={selectedRegency}
                  subdistrict={subdistrict}
                  selectedSubdistrict={selectedSubdistrict}
                  ward={ward}
                />
              )
          }
        </div>
      </div>
      <div className="mt-5">
        {
          isLoading ? <Loading />
            : (
              <FunctionalContainer
                onInputChange={handleInputChangeFunc}
                prevFunctional={functional && functional}
              />
            )
        }
      </div>
      <div className="mt-8 mb-8 flex justify-end">
        <SubmitButton text="Submit" onClick={handleSubmitButton} handlerOnDisabled={isDisabledButton} bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
      </div>
    </div>
  );
}

EditDataSection.propTypes = {
  flock: PropTypes.object,
  functional: PropTypes.object,
  classes: PropTypes.object,
  suluk: PropTypes.object,
  updateFlock: PropTypes.func,
  updateFunctional: PropTypes.func,
  updateClass: PropTypes.func,
  updateSuluk: PropTypes.func,
  updatePersonalData: PropTypes.func,
  province: PropTypes.object,
  selectedProvince: PropTypes.func,
  regency: PropTypes.object,
  selectedRegency: PropTypes.func,
  subdistrict: PropTypes.object,
  selectedSubdistrict: PropTypes.func,
  ward: PropTypes.object,
  updateNote: PropTypes.func,
  notes: PropTypes.object,
};

export default EditDataSection;
