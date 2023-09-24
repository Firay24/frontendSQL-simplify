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
    address: {
      country: '',
      province: '',
      regency: '',
      subdistrict: '',
      ward: '',
      linkGmaps: '',
      details: '',
    },
  });

  const handleOptionChange = (event) => {
    const newValue = event.target.value;
    setFlock({
      address: {
        country: newValue,
      },
    });
  };

  useEffect(() => {
    if (prevFlock !== null && prevFlock !== undefined) {
      setFlock({
        address: {
          country: prevFlock.address.country,
          province: prevFlock.address.province,
          regency: prevFlock.address.regency,
          subdistrict: prevFlock.address.subdistrict,
          ward: prevFlock.address.ward,
          linkGmaps: prevFlock.address.linkGmaps,
          details: prevFlock.address.details,
        },
      });
    }
  }, [prevFlock]);

  useEffect(() => {
    if (prevFlock !== null && prevFlock !== undefined && prevFlock.address.country === flock.address.country) {
      setFlock({
        address: {
          country: flock.address.country,
          province: prevFlock.address.province,
          regency: prevFlock.address.regency,
          subdistrict: prevFlock.address.subdistrict,
          ward: prevFlock.address.ward,
          linkGmaps: prevFlock.address.linkGmaps,
          details: prevFlock.address.details,
        },
      });
    }
  }, [flock.address.country]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFlock((prevState) => ({
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  useEffect(() => {
    selectedProvince(flock.address.province);
  }, [flock, selectedProvince]);

  useEffect(() => {
    selectedRegency(flock.address.regency);
  }, [flock, selectedRegency]);

  useEffect(() => {
    selectedSubdistrict(flock.address.subdistrict);
  }, [flock, selectedSubdistrict]);

  useEffect(() => {
    onInputChange(flock);
  }, [buttonOnClick, flock, onInputChange]);

  useEffect(() => {
    if (buttonOnClick) {
      setFlock({
        address: {
          province: '',
          regency: '',
          subdistrict: '',
          ward: '',
          linkGmaps: '',
          details: '',
        },
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
              checked={flock.address.country === 'indonesia'}
              className="w-3 h-3 text-basic-blue outline-none focus:ring-0"
            />
            <label htmlFor="country1">Indonesia</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              name="country2"
              type="radio"
              value="malaysia"
              checked={flock.address.country === 'malaysia'}
              onChange={handleOptionChange}
              className="w-3 h-3 text-basic-blue outline-none focus:ring-0"
            />
            <label htmlFor="country2">Malaysia</label>
          </div>
        </div>
      </div>
      {
        flock.address.country ? (
          <form className="flex flex-col gap-y-2">
            { isBoard ? (
              <div className="grid grid-cols-2 gap-x-16">
                <div className="flex flex-col gap-y-2">
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="province">{flock.address.country === 'indonesia' ? 'Provinsi' : 'Negara bagian'}</label>
                    {
                      flock.address.country === 'indonesia' ? (
                        <select
                          name="province"
                          id="province"
                          value={flock.address.province}
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
                          value={flock.address.province ? convertToTitleCase(flock.address.province) : null}
                          onChange={handleInputChange}
                          autoComplete="new-password"
                          className="rounded text-xs border-gray-400"
                        />
                      )
                    }
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="regency">{flock.address.country === 'indonesia' ? 'Kabupaten' : 'Daerah'}</label>
                    {
                      flock.address.country === 'indonesia' ? (
                        <select
                          name="regency"
                          id="regency"
                          value={flock.address.regency}
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
                          value={flock.address.regency ? convertToTitleCase(flock.address.regency) : null}
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
                      value={flock.address.linkGmaps}
                      onChange={handleInputChange}
                      autoComplete="new-password"
                      className="rounded text-xs border-gray-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="subdistrict">{flock.address.country === 'indonesia' ? 'Kecamatan' : 'Mukim'}</label>
                    {
                      flock.address.country === 'indonesia' ? (
                        <select
                          name="subdistrict"
                          id="subdistrict"
                          value={flock.address.subdistrict}
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
                          value={flock.address.subdistrict ? convertToTitleCase(flock.address.subdistrict) : null}
                          onChange={handleInputChange}
                          autoComplete="new-password"
                          className="rounded text-xs border-gray-400"
                        />
                      )
                    }
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label htmlFor="ward">{flock.address.country === 'indonesia' ? 'Kelurahan' : 'Kampung'}</label>
                    {
                      flock.address.country === 'indonesia' ? (
                        <select
                          name="ward"
                          id="ward"
                          value={flock.address.ward}
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
                          value={flock.address.ward ? convertToTitleCase(flock.address.ward) : null}
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
                      value={flock.address.details}
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
                  <label htmlFor="province">{flock.address.country === 'indonesia' ? 'Provinsi' : 'Negara bagian'}</label>
                  {
                    flock.address.country === 'indonesia' ? (
                      <select
                        name="province"
                        id="province"
                        value={flock.address.province}
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
                        value={flock.address.province ? convertToTitleCase(flock.address.province) : null}
                        onChange={handleInputChange}
                        autoComplete="new-password"
                        className="rounded text-xs border-gray-400"
                      />
                    )
                  }
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label htmlFor="regency">{flock.address.country === 'indonesia' ? 'Kabupaten' : 'Daerah'}</label>
                  {
                    flock.address.country === 'indonesia' ? (
                      <select
                        name="regency"
                        id="regency"
                        value={flock.address.regency}
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
                        value={flock.address.regency ? convertToTitleCase(flock.address.regency) : null}
                        onChange={handleInputChange}
                        autoComplete="new-password"
                        className="rounded text-xs border-gray-400"
                      />
                    )
                  }
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label htmlFor="subdistrict">{flock.address.country === 'indonesia' ? 'Kecamatan' : 'Mukim'}</label>
                  {
                    flock.address.country === 'indonesia' ? (
                      <select
                        name="subdistrict"
                        id="subdistrict"
                        value={flock.address.subdistrict}
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
                        value={flock.address.subdistrict ? convertToTitleCase(flock.address.subdistrict) : null}
                        onChange={handleInputChange}
                        autoComplete="new-password"
                        className="rounded text-xs border-gray-400"
                      />
                    )
                  }
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label htmlFor="ward">{flock.address.country === 'indonesia' ? 'Kelurahan' : 'Kampung'}</label>
                  {
                    flock.address.country === 'indonesia' ? (
                      <select
                        name="ward"
                        id="ward"
                        value={flock.address.ward}
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
                        value={flock.address.ward ? convertToTitleCase(flock.address.ward) : null}
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
                    value={flock.address.linkGmaps}
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
                    value={flock.address.details}
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
