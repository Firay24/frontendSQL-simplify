/* eslint-disable no-underscore-dangle */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FunctionalContainer({
  onInputChange, buttonOnClick, personalData, prevFunctional,
}) {
  const [functional, setFunctional] = useState({
    petoto: {
      status: '',
      time: '',
      timeLifted: '',
      location: '',
      notes: '',
    },
    pentawajuh: {
      status: '',
      time: '',
      timeLifted: '',
      location: '',
      notes: '',
    },
    pentarekat: {
      status: '',
      time: '',
      timeLifted: '',
      location: '',
      notes: '',
    },
    pz: {
      status: '',
      time: '',
      timeLifted: '',
      location: '',
      notes: '',
    },
  });

  useEffect(() => {
    if (prevFunctional && prevFunctional.petoto) {
      setFunctional({
        id: prevFunctional._id,
        petoto: {
          status: prevFunctional.petoto.status,
          time: prevFunctional.petoto.time,
          timeLifted: prevFunctional.petoto.timeLifted,
          location: prevFunctional.petoto.location,
          notes: prevFunctional.petoto.notes,
        },
        pentawajuh: {
          status: prevFunctional.pentawajuh.status,
          time: prevFunctional.pentawajuh.time,
          timeLifted: prevFunctional.pentawajuh.timeLifted,
          location: prevFunctional.pentawajuh.location,
          notes: prevFunctional.pentawajuh.notes,
        },
        pentarekat: {
          status: prevFunctional.pentarekat.status,
          time: prevFunctional.pentarekat.time,
          timeLifted: prevFunctional.pentarekat.timeLifted,
          location: prevFunctional.pentarekat.location,
          notes: prevFunctional.pentarekat.notes,
        },
        pz: {
          status: prevFunctional.pz.status,
          time: prevFunctional.pz.time,
          timeLifted: prevFunctional.pz.timeLifted,
          location: prevFunctional.pz.location,
          notes: prevFunctional.pz.notes,
        },
      });
    }
  }, [prevFunctional]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [section, property] = name.split('.');

    setFunctional((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [property]: value,
      },

    }));
  };

  useEffect(() => {
    if (personalData && personalData.name !== '' && personalData.nik !== '' && personalData.fathersName !== '') {
      const dataToSubmit = {
        ...personalData,
        ...functional,
      };
      onInputChange(dataToSubmit);
    } else {
      onInputChange(functional);
    }
  }, [buttonOnClick, functional, onInputChange, personalData]);

  useEffect(() => {
    if (buttonOnClick) {
      setFunctional({
        petoto: {
          status: '',
          time: '',
          timeLifted: '',
          location: '',
          notes: '',
        },
        pentawajuh: {
          status: '',
          time: '',
          timeLifted: '',
          location: '',
          notes: '',
        },
        pentarekat: {
          status: '',
          time: '',
          timeLifted: '',
          location: '',
          notes: '',
        },
        pz: {
          status: '',
          time: '',
          timeLifted: '',
          location: '',
          notes: '',
        },
      });
    }
  }, [buttonOnClick]);

  return (
    <div>
      <h1 className="font-semibold text-xl text-basic-grey">Tambah Data</h1>
      <p className="text-grey-light text-xs font-light">BKMZ Jawa Timur</p>
      <form>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
            <p className="text-sm font-medium text-basic-blue mb-5">Petoto</p>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="statusPtt">Status</label>
                <select
                  name="petoto.status"
                  id="statusPtt"
                  onChange={handleInputChange}
                  value={functional.petoto.status}
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">Pilih</option>
                  <option value="aktif">Aktif</option>
                  <option value="non-aktif">Non-Aktif</option>
                </select>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="timePtt">Waktu</label>
                <input
                  type="date"
                  id="timePtt"
                  name="petoto.time"
                  value={functional.petoto.time}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="timeLiftedPtt">Waktu diangkat</label>
                <input
                  type="date"
                  id="timeLiftedPtt"
                  name="petoto.timeLifted"
                  value={functional.petoto.timeLifted}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="locationPtt">Tempat</label>
                <input
                  type="text"
                  id="locationPtt"
                  name="petoto.location"
                  value={functional.petoto.location}
                  onChange={handleInputChange}
                  placeholder="Mayang"
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="notesPtt">Catatan</label>
                <input
                  type="text"
                  id="notesPtt"
                  name="petoto.notes"
                  value={functional.petoto.notes}
                  onChange={handleInputChange}
                  placeholder="baik dari segi ..."
                  className="rounded text-xs border-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
            <p className="text-sm font-medium text-basic-blue mb-5">Pentawajjuh</p>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="statusPtw">Status</label>
                <select
                  name="pentawajuh.status"
                  id="statusPtw"
                  value={functional.pentawajuh.status}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">pilih</option>
                  <option value="aktif">Aktif</option>
                  <option selected value="non-aktif">Non-aktif</option>
                </select>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="timePtw">Waktu</label>
                <input
                  type="date"
                  id="timePtw"
                  name="pentawajuh.time"
                  value={functional.pentawajuh.time}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="timeLiftedPtw">Waktu diangkat</label>
                <input
                  type="date"
                  id="timeLiftedPtw"
                  name="pentawajuh.timeLifted"
                  value={functional.pentawajuh.timeLifted}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="locationPtw">Tempat</label>
                <input
                  type="text"
                  id="locationPtw"
                  name="pentawajuh.location"
                  value={functional.pentawajuh.location}
                  onChange={handleInputChange}
                  placeholder="Mayang"
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="notesPtw">Catatan</label>
                <input
                  type="text"
                  id="notesPtw"
                  name="pentawajuh.notes"
                  value={functional.pentawajuh.notes}
                  onChange={handleInputChange}
                  placeholder="baik dari segi ..."
                  className="rounded text-xs border-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
            <p className="text-sm font-medium text-basic-blue mb-5">Pentareqat</p>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="statusPtq">Status</label>
                <select
                  name="pentarekat.status"
                  id="statusPtq"
                  value={functional.pentarekat.status}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">pilih</option>
                  <option value="aktif">Aktif</option>
                  <option selected value="non-aktif">Non-aktif</option>
                </select>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="timePtq">Waktu</label>
                <input
                  type="date"
                  id="timePtq"
                  name="pentarekat.time"
                  value={functional.pentarekat.time}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="timeLiftedPtq">Waktu diangkat</label>
                <input
                  type="date"
                  id="timeLiftedPtq"
                  name="pentarekat.timeLifted"
                  value={functional.pentarekat.timeLifted}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="locationPtq">Tempat</label>
                <input
                  type="text"
                  id="locationPtq"
                  name="pentarekat.location"
                  value={functional.pentarekat.location}
                  onChange={handleInputChange}
                  placeholder="Mayang"
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="notesPtq">Catatan</label>
                <input
                  type="text"
                  id="notesPtq"
                  name="pentarekat.notes"
                  value={functional.pentarekat.notes}
                  onChange={handleInputChange}
                  placeholder="Baik dari segi ..."
                  className="rounded text-xs border-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
            <p className="text-sm font-medium text-basic-blue mb-5">PZ</p>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="statusPZ">Status</label>
                <select
                  name="pz.status"
                  id="statusPZ"
                  value={functional.pz.status}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">pilih</option>
                  <option value="aktif">Aktif</option>
                  <option value="non-aktif">Non-aktif</option>
                </select>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="timePZ">Waktu</label>
                <input
                  type="date"
                  id="timePZ"
                  name="pz.time"
                  value={functional.pz.time}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="timeLiftedPZ">Waktu diangkat</label>
                <input
                  type="date"
                  id="timeLiftedPZ"
                  name="pz.timeLifted"
                  value={functional.pz.timeLifted}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="locationPZ">Tempat</label>
                <input
                  type="text"
                  id="locationPZ"
                  name="pz.location"
                  value={functional.pz.location}
                  onChange={handleInputChange}
                  placeholder="Mayang"
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="notesPZ">Catatan</label>
                <input
                  type="text"
                  id="notesPZ"
                  name="pz.notes"
                  value={functional.pz.notes}
                  onChange={handleInputChange}
                  placeholder="Baik dari segi ..."
                  className="rounded text-xs border-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

FunctionalContainer.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  buttonOnClick: PropTypes.bool.isRequired,
  personalData: PropTypes.object.isRequired,
  prevFunctional: PropTypes.object,
};

export default FunctionalContainer;
