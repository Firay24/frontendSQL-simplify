/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import BiodataContainer from 'components/Form/BiodataMZ';
import AddressContainer from 'components/Form/Address';
import HeadofBoardContainer from 'components/Form/HeadOfBoard';
import SubmitButton from 'components/Button/ButtonOnClick';
import HeaderHead from './HeaderHead';

function InputDataSection({
  addBoard,
  province,
  selectedProvince,
  regency,
  selectedRegency,
  subdistrict,
  selectedSubdistrict,
  ward,
}) {
  const [dataComponent, setDataComponent] = useState({});
  const [buttonOnClik, setButtonOnClik] = useState(false);

  const handleInputChangeBoard = useCallback((data) => {
    setDataComponent((prevState) => ({
      ...prevState,
      ...data,
    }));
  }, []);

  const handleSubmitBoard = () => {
    addBoard(dataComponent);
    setButtonOnClik(true);
  };

  return (
    <div>
      <div className="gap-x-5 mt-5">
        <BiodataContainer
          onInputChange={handleInputChangeBoard}
          buttonOnClick={buttonOnClik}
        />
      </div>
      <div className="mt-5">
        <AddressContainer
          isBoard
          buttonOnClick={buttonOnClik}
          onInputChange={handleInputChangeBoard}
          province={province}
          selectedProvince={selectedProvince}
          regency={regency}
          selectedRegency={selectedRegency}
          subdistrict={subdistrict}
          selectedSubdistrict={selectedSubdistrict}
          ward={ward}
        />
      </div>
      <div className="mt-8">
        <HeaderHead />
      </div>
      <div>
        <HeadofBoardContainer
          onInputChange={handleInputChangeBoard}
          buttonOnClick={buttonOnClik}
        />
      </div>
      <div className="mt-8 mb-8 flex justify-end">
        <SubmitButton text="Submit" onClick={handleSubmitBoard} bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
      </div>
    </div>
  );
}

InputDataSection.propTypes = {
  addBoard: PropTypes.func,
  province: PropTypes.object,
  selectedProvince: PropTypes.func,
  regency: PropTypes.object,
  selectedRegency: PropTypes.func,
  subdistrict: PropTypes.object,
  selectedSubdistrict: PropTypes.func,
  ward: PropTypes.object,
};

export default InputDataSection;
