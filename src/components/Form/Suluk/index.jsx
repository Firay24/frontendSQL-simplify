/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from 'components/Button/ButtonOnClick';

function ContainerExtra({
  kaji, suluk, addSuluk, updateSuluk, flock,
}) {
  const [sulukInfo, setSuluk] = useState({
    nameSuluk: '',
    sulukTo: '',
    location: '',
    times: '',
    prevKaji: '',
    afterKaji: '',
    notes: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSuluk((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (addSuluk) {
      addSuluk(sulukInfo);
    } else if (updateSuluk) {
      updateSuluk(sulukInfo);
    }
  };

  useEffect(() => {
    if (flock && flock.suluks) {
      const maxSulukTo = Math.max(...flock.suluks.map((item) => item.sulukTo));
      setSuluk({
        sulukTo: maxSulukTo + 1,
      });
    }
  }, []);

  return (
    <div>
      <form>
        <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full mt-5 flex flex-col gap-y-5">
          <p className="text-sm font-medium text-basic-blue mb-2">Suluk</p>
          <div className="grid grid-cols-2 gap-x-14">
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="nameSuluk">Nama Suluk</label>
                <select
                  name="nameSuluk"
                  id="nameSuluk"
                  value={sulukInfo.nameSuluk}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">Pilih</option>
                  {
                    suluk.map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))
                  }
                </select>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="sulukTo">Suluk ke-</label>
                <input
                  name="sulukTo"
                  id="sulukTo"
                  type="number"
                  value={sulukInfo.sulukTo}
                  onChange={handleInputChange}
                  required
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="location">Lokasi</label>
                <input
                  name="location"
                  id="location"
                  type="text"
                  value={sulukInfo.location}
                  onChange={handleInputChange}
                  required
                  className="rounded text-xs border-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="times">Waktu</label>
                <input
                  name="times"
                  id="times"
                  type="date"
                  value={sulukInfo.times}
                  onChange={handleInputChange}
                  required
                  className="rounded text-xs border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="prevKaji">Kaji sebelum</label>
                <select
                  name="prevKaji"
                  id="prevKaji"
                  value={sulukInfo.prevKaji}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">Pilih</option>
                  {flock.gender === 'Laki-laki' && kaji.male.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                  {flock.gender === 'Perempuan' && kaji.female.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="afterKaji">Kaji sesudah</label>
                <select
                  name="afterKaji"
                  id="afterKaji"
                  value={sulukInfo.afterKaji}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">Pilih</option>
                  {flock.gender === 'Laki-laki' && kaji.male.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                  {flock.gender === 'Perempuan' && kaji.female.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 items-start">
                <label htmlFor="notes">Catatan</label>
                <textarea
                  name="notes"
                  id="notes"
                  value={sulukInfo.notes}
                  onChange={handleInputChange}
                  rows="3"
                  className="rounded text-xs border-gray-400 resize-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-8 justify-end">
          <SubmitButton text="Submit" bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
        </div>
      </form>
    </div>
  );
}

ContainerExtra.prototype = {
  kaji: PropTypes.object,
  suluk: PropTypes.array,
  flock: PropTypes.object,
  addSuluk: PropTypes.func,
  updateSuluk: PropTypes.func,
};

export default ContainerExtra;
