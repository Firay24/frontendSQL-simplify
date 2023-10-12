/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from 'components/Button/ButtonOnClick';

function ContainerExtra({ kaji, suluk, gender }) {
  return (
    <div>
      <form>
        <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full mt-5 flex flex-col gap-y-5">
          <p className="text-sm font-medium text-basic-blue mb-2">Suluk</p>
          <div className="grid grid-cols-2 gap-x-14">
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="name">Nama Suluk</label>
                <select
                  name="name"
                  id="id"
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
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">Pilih</option>
                  {gender === 'Laki-laki' && kaji.male.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                  {gender === 'Perempuan' && kaji.female.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="afterKaji">Kaji sesudah</label>
                <select
                  name="afterKaji"
                  id="afterKaji"
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">Pilih</option>
                  {gender === 'Laki-laki' && kaji.male.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                  {gender === 'Perempuan' && kaji.female.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 items-start">
                <label htmlFor="notes">Catatan</label>
                <textarea
                  name="notes"
                  id="notes"
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
  gender: PropTypes.string,
};

export default ContainerExtra;
