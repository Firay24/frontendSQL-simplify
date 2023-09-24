/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import BiodataContainer from 'components/Form/BiodataMZ';
import AddressContainer from 'components/Form/Address';
import HeadofBoardContainer from 'components/Form/HeadOfBoard';
import SubmitButton from 'components/Button/ButtonOnClick';
import HeaderHead from './HeaderHead';

function EditDataSection({
  board, updateBoard, province, selectedProvince, regency, selectedRegency, subdistrict, selectedSubdistrict, ward,
}) {
  const [dataComponent, setDataComponent] = useState({});
  const [buttonOnClick, setButtonOnClik] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = useCallback((data) => {
    setDataComponent((prevState) => ({
      ...prevState,
      ...data,
    }));
  }, []);

  const handleSubmit = () => {
    updateBoard(dataComponent);
    setButtonOnClik(true);
  };

  useEffect(() => {
    setButtonOnClik(false);
  }, [dataComponent]);

  useEffect(() => {
    if (board !== undefined && board !== null) {
      setIsLoading(false);
    }
  }, [board]);

  return (
    <div>
      <div className="gap-x-5 mt-5">
        {
          isLoading ? <Loading />
            : (
              <BiodataContainer
                prevBoard={board}
                onInputChange={handleInputChange}
                buttonOnClick={buttonOnClick}
              />
            )
        }
      </div>
      <div className="mt-5">
        {
          isLoading ? <Loading />
            : (
              <AddressContainer
                isBoard
                prevFlock={board}
                buttonOnClick={buttonOnClick}
                onInputChange={handleInputChange}
                province={province}
                selectedProvince={selectedProvince}
                regency={regency}
                selectedRegency={selectedRegency}
                subdistrict={subdistrict}
                selectedSubdistrict={selectedSubdistrict}
                ward={ward}
              />
            )
        }
      </div>
      <div className="mt-8">
        <HeaderHead />
      </div>
      <div>
        {
          isLoading ? <Loading />
            : (
              <HeadofBoardContainer
                onInputChange={handleInputChange}
                buttonOnClick={buttonOnClick}
                prevBoard={board}
              />
            )
        }
      </div>
      <div className="mt-8 mb-8 flex justify-end">
        <SubmitButton text="Submit" onClick={handleSubmit} bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
      </div>
    </div>
  );
}

EditDataSection.propTypes = {
  board: PropTypes.object,
  updateBoard: PropTypes.func,
  province: PropTypes.object,
  selectedProvince: PropTypes.func,
  regency: PropTypes.object,
  selectedRegency: PropTypes.func,
  subdistrict: PropTypes.object,
  selectedSubdistrict: PropTypes.func,
  ward: PropTypes.object,
};

export default EditDataSection;
