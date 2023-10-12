/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import convertToTitleCase from 'utils/convertToTitleCase';

function AddressContainer({
  onInputChange,
  prevFlock,
  buttonOnClick,
  province,
  selectedProvince,
  regency,
  selectedRegency,
  subdistrict,
  selectedSubdistrict,
  ward,
  isBoard,
}) {
  const [flock, setFlock] = useState({
    country: '',
    province: '',
    regency: '',
    subdistrict: '',
    ward: '',
    linkGmaps: '',
    details: '',
  });

  const handleOptionChange = (event) => {
    const newValue = event.target.value;
    setFlock({
      country: newValue,
    });
  };

  useEffect(() => {
    if (prevFlock !== null && prevFlock !== undefined) {
      setFlock({
        country: prevFlock.country,
        province: prevFlock.province,
        regency: prevFlock.regency,
        subdistrict: prevFlock.subdistrict,
        ward: prevFlock.ward,
        linkGmaps: prevFlock.linkGmaps,
        details: prevFlock.details,
      });
    }
  }, [prevFlock]);

  useEffect(() => {
    if (prevFlock !== null && prevFlock !== undefined && prevFlock.country === flock.country) {
      setFlock({
        country: flock.country,
        province: prevFlock.province,
        regency: prevFlock.regency,
        subdistrict: prevFlock.subdistrict,
        ward: prevFlock.ward,
        linkGmaps: prevFlock.linkGmaps,
        details: prevFlock.details,
      });
    }
  }, [flock.country]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFlock((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    selectedProvince(flock.province);
  }, [flock, selectedProvince]);

  useEffect(() => {
    selectedRegency(flock.regency);
  }, [flock, selectedRegency]);

  useEffect(() => {
    selectedSubdistrict(flock.subdistrict);
  }, [flock, selectedSubdistrict]);

  useEffect(() => {
    onInputChange(flock);
  }, [buttonOnClick, flock, onInputChange]);

  useEffect(() => {
    if (buttonOnClick) {
      setFlock({
        country: '',
        province: '',
        regency: '',
        subdistrict: '',
        ward: '',
        linkGmaps: '',
        details: '',
      });
    }
  }, [buttonOnClick]);

  return (
    <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey">
      <p className="text-sm font-medium text-basic-blue mb-5">{isBoard ? 'Alamat MZ' : 'Alamat tinggal'}</p>
      <div className={isBoard ? 'w-1/2' : ''}>
        <p>Pilih negara asal</p>
        <div className="grid grid-cols-2 mt-2 mb-3">
          <div className="flex items-center gap-x-2">
            <input
              name="country1"
              type="radio"
              value="indonesia"
              onChange={handleOptionChange}
              checked={flock.country === 'indonesia'}
              className="w-3 h-3 text-basic-blue outline-none focus:ring-0"
            />
            <label htmlFor="country1">Indonesia</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              name="country2"
              type="radio"
              value="malaysia"
              checked={flock.country === 'malaysia'}
              onChange={handleOptionChange}
              className="w-3 h-3 text-basic-blue outline-none focus:ring-0"
            />
            <label htmlFor="country2">Malaysia</label>
          </div>
        </div>
      </div>
      {
        flock.country ? (
          <form className="flex flex-col gap-y-2">
            { isBoard ? (
              <div className="grid grid-cols-2 gap-x-16">
                <div className="flex flex-col gap-y-2">
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="province">{flock.country === 'indonesia' ? 'Provinsi' : 'Negara bagian'}</label>
                    {
                      flock.address.country === 'indonesia' ? (
                        <select
                          name="province"
                          id="province"
                          value={flock.province}
                          onChange={handleInputChange}
                          className="rounded text-xs border-gray-400"
                        >
                          <option value="">Pilih</option>
                          {
                            province.data.map((item) => (
                              <option key={item.id} value={item.name}>{item.name ? convertToTitleCase(item.name) : ''}</option>
                            ))
                          }
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="province"
                          id="province"
                          value={flock.province ? convertToTitleCase(flock.province) : null}
                          onChange={handleInputChange}
                          autoComplete="new-password"
                          className="rounded text-xs border-gray-400"
                        />
                      )
                    }
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="regency">{flock.country === 'indonesia' ? 'Kabupaten' : 'Daerah'}</label>
                    {
                      flock.country === 'indonesia' ? (
                        <select
                          name="regency"
                          id="regency"
                          value={flock.regency}
                          onChange={handleInputChange}
                          className="rounded text-xs border-gray-400"
                        >
                          <option value="">Pilih</option>
                          {
                            regency.data.map((item) => (
                              <option key={item.id} value={item.name}>{item.name ? convertToTitleCase(item.name) : ''}</option>
                            ))
                          }
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="regency"
                          id="regency"
                          value={flock.regency ? convertToTitleCase(flock.regency) : null}
                          onChange={handleInputChange}
                          autoComplete="new-password"
                          className="rounded text-xs border-gray-400"
                        />
                      )
                    }
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="linkGmaps">Link Gmaps</label>
                    <input
                      type="url"
                      id="linkGmaps"
                      name="linkGmaps"
                      value={flock.linkGmaps}
                      onChange={handleInputChange}
                      autoComplete="new-password"
                      className="rounded text-xs border-gray-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="subdistrict">{flock.country === 'indonesia' ? 'Kecamatan' : 'Mukim'}</label>
                    {
                      flock.country === 'indonesia' ? (
                        <select
                          name="subdistrict"
                          id="subdistrict"
                          value={flock.subdistrict}
                          onChange={handleInputChange}
                          className="rounded text-xs border-gray-400"
                        >
                          <option value="">Pilih</option>
                          {
                            subdistrict.data.map((item) => (
                              <option key={item.id} value={item.name}>{item.name ? convertToTitleCase(item.name) : ''}</option>
                            ))
                          }
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="subdistrict"
                          id="subdistrict"
                          value={flock.subdistrict ? convertToTitleCase(flock.subdistrict) : null}
                          onChange={handleInputChange}
                          autoComplete="new-password"
                          className="rounded text-xs border-gray-400"
                        />
                      )
                    }
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="ward">{flock.country === 'indonesia' ? 'Kelurahan' : 'Kampung'}</label>
                    {
                      flock.country === 'indonesia' ? (
                        <select
                          name="ward"
                          id="ward"
                          value={flock.ward}
                          onChange={handleInputChange}
                          className="rounded text-xs border-gray-400"
                        >
                          <option value="">Pilih</option>
                          {
                            ward.data.map((item) => (
                              <option key={item.id} value={item.name}>{item.name ? convertToTitleCase(item.name) : ''}</option>
                            ))
                          }
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="ward"
                          id="ward"
                          value={flock.ward ? convertToTitleCase(flock.ward) : null}
                          onChange={handleInputChange}
                          autoComplete="new-password"
                          className="rounded text-xs border-gray-400"
                        />
                      )
                    }
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="details">Detail alamat</label>
                    <input
                      type="text"
                      id="details"
                      name="details"
                      value={flock.details}
                      onChange={handleInputChange}
                      autoComplete="new-password"
                      className="rounded text-xs border-gray-400"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-y-2">
                <div className="grid grid-cols-2 items-center">
                  <label htmlFor="province">{flock.country === 'indonesia' ? 'Provinsi' : 'Negara bagian'}</label>
                  {
                    flock.country === 'indonesia' ? (
                      <select
                        name="province"
                        id="province"
                        value={flock.province}
                        onChange={handleInputChange}
                        className="rounded text-xs border-gray-400"
                      >
                        <option value="">Pilih</option>
                        {
                          province.data.map((item) => (
                            <option key={item.id} value={item.name}>{item.name ? convertToTitleCase(item.name) : ''}</option>
                          ))
                        }
                      </select>
                    ) : (
                      <input
                        type="text"
                        name="province"
                        id="province"
                        value={flock.province ? convertToTitleCase(flock.province) : null}
                        onChange={handleInputChange}
                        autoComplete="new-password"
                        className="rounded text-xs border-gray-400"
                      />
                    )
                  }
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label htmlFor="regency">{flock.country === 'indonesia' ? 'Kabupaten' : 'Daerah'}</label>
                  {
                    flock.country === 'indonesia' ? (
                      <select
                        name="regency"
                        id="regency"
                        value={flock.regency}
                        onChange={handleInputChange}
                        className="rounded text-xs border-gray-400"
                      >
                        <option value="">Pilih</option>
                        {
                          regency.data.map((item) => (
                            <option key={item.id} value={item.name}>{item.name ? convertToTitleCase(item.name) : ''}</option>
                          ))
                        }
                      </select>
                    ) : (
                      <input
                        type="text"
                        name="regency"
                        id="regency"
                        value={flock.regency ? convertToTitleCase(flock.regency) : null}
                        onChange={handleInputChange}
                        autoComplete="new-password"
                        className="rounded text-xs border-gray-400"
                      />
                    )
                  }
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label htmlFor="subdistrict">{flock.country === 'indonesia' ? 'Kecamatan' : 'Mukim'}</label>
                  {
                    flock.country === 'indonesia' ? (
                      <select
                        name="subdistrict"
                        id="subdistrict"
                        value={flock.subdistrict}
                        onChange={handleInputChange}
                        className="rounded text-xs border-gray-400"
                      >
                        <option value="">Pilih</option>
                        {
                          subdistrict.data.map((item) => (
                            <option key={item.id} value={item.name}>{item.name ? convertToTitleCase(item.name) : ''}</option>
                          ))
                        }
                      </select>
                    ) : (
                      <input
                        type="text"
                        name="subdistrict"
                        id="subdistrict"
                        value={flock.subdistrict ? convertToTitleCase(flock.subdistrict) : null}
                        onChange={handleInputChange}
                        autoComplete="new-password"
                        className="rounded text-xs border-gray-400"
                      />
                    )
                  }
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label htmlFor="ward">{flock.country === 'indonesia' ? 'Kelurahan' : 'Kampung'}</label>
                  {
                    flock.country === 'indonesia' ? (
                      <select
                        name="ward"
                        id="ward"
                        value={flock.ward}
                        onChange={handleInputChange}
                        className="rounded text-xs border-gray-400"
                      >
                        <option value="">Pilih</option>
                        {
                          ward.data.map((item) => (
                            <option key={item.id} value={item.name}>{item.name ? convertToTitleCase(item.name) : ''}</option>
                          ))
                        }
                      </select>
                    ) : (
                      <input
                        type="text"
                        name="ward"
                        id="ward"
                        value={flock.ward ? convertToTitleCase(flock.ward) : null}
                        onChange={handleInputChange}
                        autoComplete="new-password"
                        className="rounded text-xs border-gray-400"
                      />
                    )
                  }
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label htmlFor="linkGmaps">Link Gmaps</label>
                  <input
                    type="url"
                    id="linkGmaps"
                    name="linkGmaps"
                    value={flock.linkGmaps}
                    onChange={handleInputChange}
                    autoComplete="new-password"
                    className="rounded text-xs border-gray-400"
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label htmlFor="details">Detail alamat</label>
                  <input
                    type="text"
                    id="details"
                    name="details"
                    value={flock.details}
                    onChange={handleInputChange}
                    autoComplete="new-password"
                    className="rounded text-xs border-gray-400"
                  />
                </div>
              </div>
            )}
          </form>
        ) : null
      }
    </div>
  );
}

AddressContainer.propTypes = {
  onInputChange: PropTypes.func,
  prevFlock: PropTypes.object,
  buttonOnClick: PropTypes.bool,
  province: PropTypes.object,
  selectedProvince: PropTypes.func,
  regency: PropTypes.object,
  selectedRegency: PropTypes.func,
  subdistrict: PropTypes.object,
  selectedSubdistrict: PropTypes.func,
  ward: PropTypes.object,
  isBoard: PropTypes.bool,
};

AddressContainer.defaultProps = {
  isBoard: false,
};

export default AddressContainer;
