/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from 'components/Button/ButtonOnClick';

function ContainerClass({
  addClass, classData, updateClass, classInformation,
}) {
  const [classInfo, setClassInfo] = useState({
    id: '',
    nameClass: '',
    time: '',
    location: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClassInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (addClass) {
      addClass(classInfo);
    } else if (updateClass) {
      updateClass(classInfo);
    }
    setClassInfo({
      id: '',
      nameClass: '',
      time: '',
      location: '',
    });
  };

  useEffect(() => {
    if (classInformation !== null && classInformation !== undefined) {
      const date = new Date(classInformation.time);
      date.setDate(date.getDate());
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formattedTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      setClassInfo({
        id: classInformation.idclasses,
        nameClass: classInformation.nameClass,
        location: classInformation.location,
        time: formattedTime,
      });
    }
  }, [classInformation]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full mt-5 flex flex-col gap-y-5">
          <p className="text-sm font-medium text-basic-blue mb-2">Suluk</p>
          <div className="grid grid-cols-2 gap-x-14">
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="nameClass">Nama Suluk</label>
                <select
                  name="nameClass"
                  id="nameClass"
                  value={classInfo.nameClass}
                  onChange={handleInputChange}
                  className="rounded text-xs border-gray-400"
                >
                  <option value="">Pilih</option>
                  {
                      classData.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))
                    }
                </select>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="location">Lokasi</label>
                <input
                  name="location"
                  id="location"
                  type="text"
                  value={classInfo.location}
                  onChange={handleInputChange}
                  required
                  className="rounded text-xs border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 items-center">
                <label htmlFor="time">Waktu</label>
                <input
                  name="time"
                  id="time"
                  type="date"
                  value={classInfo.time}
                  onChange={handleInputChange}
                  required
                  className="rounded text-xs border-gray-400"
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

ContainerClass.prototype = {
  addClass: PropTypes.func,
  classData: PropTypes.array,
  updateClass: PropTypes.func,
  flock: PropTypes.object,
};

export default ContainerClass;
