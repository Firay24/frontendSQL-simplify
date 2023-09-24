/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import convertToTitleCase from 'utils/convertToTitleCase';

function BiodataContainer({
  onInputChange, buttonOnClick, prevBoard,
}) {
  const [board, setBoard] = useState({
    name: '',
    regionProvince: '',
    coordinatorName: '',
    regionBKMZ: '',
    statusBoard: '',
    SKCategory: '',
    landStatus: '',
    buildingState: '',
  });
  const statusMZ = ['aktif', 'non-aktif'];
  const categorySK = ['kategori 1', 'kategori 2', 'kategori 3'];
  const ownStatus = ['milik jamaah', 'sewa'];

  useEffect(() => {
    if (prevBoard !== null && prevBoard !== undefined) {
      setBoard({
        id: prevBoard._id,
        name: prevBoard.name,
        regionProvince: prevBoard.regionProvince,
        coordinatorName: prevBoard.coordinatorName,
        regionBKMZ: prevBoard.regionBKMZ,
        statusBoard: prevBoard.statusBoard,
        SKCategory: prevBoard.SKCategory,
        landStatus: prevBoard.landStatus,
        buildingState: prevBoard.buildingState,
      });
    }
  }, [prevBoard]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBoard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (buttonOnClick) {
      setBoard({
        nama: '',
        regionProvince: '',
        coordinatorName: '',
        regionBKMZ: '',
        statusBoard: '',
        SKCategory: '',
        landStatus: '',
        buildingState: '',
      });
    }
  }, [buttonOnClick]);

  useEffect(() => {
    onInputChange(board);
  }, [buttonOnClick, board, onInputChange]);

  return (
    <div className="grid grid-cols-2 gap-x-5">
      <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
        <p className="text-sm font-medium text-basic-blue mb-5">Informasi Umum</p>
        <form className="flex flex-col gap-y-2">
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="name">Nama MZ</label>
            <input
              type="text"
              id="name"
              name="name"
              value={board.name ? convertToTitleCase(board.name) : ''}
              onChange={handleInputChange}
              autoComplete="new-password"
              className="rounded text-xs border-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="regionProvince">Asal Korwil</label>
            <input
              type="text"
              id="regionProvince"
              name="regionProvince"
              value={board.regionProvince ? convertToTitleCase(board.regionProvince) : ''}
              onChange={handleInputChange}
              autoComplete="new-password"
              className="rounded text-xs border-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="coordinatorName">Nama Korwil</label>
            <input
              type="text"
              id="coordinatorName"
              name="coordinatorName"
              value={board.coordinatorName ? convertToTitleCase(board.coordinatorName) : ''}
              onChange={handleInputChange}
              autoComplete="new-password"
              className="rounded text-xs border-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="regionBKMZ">Asal BKMZ</label>
            <input
              type="text"
              id="regionBKMZ"
              name="regionBKMZ"
              value={board.regionBKMZ ? convertToTitleCase(board.regionBKMZ) : ''}
              onChange={handleInputChange}
              autoComplete="new-password"
              className="rounded text-xs border-gray-400"
            />
          </div>
        </form>
      </div>
      <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
        <p className="text-sm font-medium text-basic-blue mb-5">Informasi Detail</p>
        <form className="flex flex-col gap-y-2">
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="statusBoard">Status MZ</label>
            <select
              name="statusBoard"
              id="statusBoard"
              className="rounded text-xs border-gray-400"
              value={board.statusBoard}
              onChange={handleInputChange}
            >
              <option value="">Pilih</option>
              {
                statusMZ.map((item, index) => (
                  <option key={index} value={item}>{item ? convertToTitleCase(item) : ''}</option>
                ))
              }
            </select>
          </div>
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="SKCategory">Kategori SK 117</label>
            <select
              name="SKCategory"
              id="SKCategory"
              className="rounded text-xs border-gray-400"
              value={board.SKCategory}
              onChange={handleInputChange}
            >
              <option value="">Pilih</option>
              {
                categorySK.map((item, index) => (
                  <option key={index} value={item}>{item ? convertToTitleCase(item) : ''}</option>
                ))
              }
            </select>
          </div>
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="landStatus">Status tanah</label>
            <select
              name="landStatus"
              id="landStatus"
              className="rounded text-xs border-gray-400"
              value={board.landStatus}
              onChange={handleInputChange}
            >
              <option value="">Pilih</option>
              {
                ownStatus.map((item, index) => (
                  <option key={index} value={item}>{item ? convertToTitleCase(item) : ''}</option>
                ))
              }
            </select>
          </div>
          <div className="grid grid-cols-2 items-center">
            <label htmlFor="buildingState">Status bangunan</label>
            <select
              name="buildingState"
              id="buildingState"
              className="rounded text-xs border-gray-400"
              value={board.buildingState}
              onChange={handleInputChange}
            >
              <option value="">Pilih</option>
              {
                ownStatus.map((item, index) => (
                  <option key={index} value={item}>{item ? convertToTitleCase(item) : ''}</option>
                ))
              }
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

BiodataContainer.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  buttonOnClick: PropTypes.bool.isRequired,
  prevBoard: PropTypes.object,
};

export default BiodataContainer;
