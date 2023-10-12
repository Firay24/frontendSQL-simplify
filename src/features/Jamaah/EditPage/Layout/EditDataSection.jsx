/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BiodataContainer from 'components/Form/Biodata';
import AddressContainer from 'components/Form/Address';
import InformationMZ from 'components/Form/InformationMZ';
import SubmitButton from 'components/Button/ButtonOnClick';
import Loading from 'components/Loading';

function EditDataSection({
  flock, updateFlock, province, selectedProvince, regency, selectedRegency, subdistrict, selectedSubdistrict, ward, isFunctional,
}) {
  const [dataComponent, setDataComponent] = useState({});
  const [buttonOnClick, setButtonOnClik] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const handleInputChange = useCallback((data) => {
    setDataComponent((prevState) => ({
      ...prevState,
      ...data,
    }));
  }, []);

  const handleSubmitButton = () => {
    updateFlock(dataComponent);
    setButtonOnClik(true);
  };

  const handlerSelectedGender = (value) => {
    setSelectedGender(value);
  };

  const handlerConfirmIsNullOnInput = (value) => {
    setIsDisabledButton(value);
  };

  useEffect(() => {
    setButtonOnClik(false);
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
                  prevFlock={flock && flock}
                  onInputChange={handleInputChange}
                  buttonOnClick={buttonOnClick}
                  sendGender={handlerSelectedGender}
                  confirmInputIsNull={handlerConfirmIsNullOnInput}
                  isFunctional={isFunctional}
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
              <InformationMZ
                prevFlock={flock && flock}
                receiveGender={selectedGender}
                onInputChange={handleInputChange}
                buttonOnClick={buttonOnClick}
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
  updateFlock: PropTypes.func,
  province: PropTypes.object,
  selectedProvince: PropTypes.func,
  regency: PropTypes.object,
  selectedRegency: PropTypes.func,
  subdistrict: PropTypes.object,
  selectedSubdistrict: PropTypes.func,
  ward: PropTypes.object,
  isFunctional: PropTypes.bool,
};

export default EditDataSection;
