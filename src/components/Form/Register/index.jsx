/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import SubmitButton from 'components/Button/ButtonOnClick';
import LoadingButton from 'components/Button/ButtonOnLoading';

function RegisInputContainer({ register, isLoading }) {
  const [user, setUser] = useState({
    username: '',
    name: '',
    password: '',
    role: '',
    region: '',
  });
  const [open, setOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      if (!/^\S*$/.test(value)) {
        return;
      }
      setUser({ ...user, [name]: value.replace(/\s/g, '') });
    }
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register(user);
  };

  const togglePassword = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white mt-8 p-6 drop-shadow-sm rounded w-full">
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col text-xs gap-y-2">
          <label htmlFor="username" className="text-[#464646] text-opacity-60 font-medium">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            value={user.username}
            onChange={handleInputChange}
            placeholder="ex: hatake24 *tidak mengandung spasi"
            className="rounded border-gray-400 text-xs"
          />
        </div>
        <div className="flex flex-col text-xs gap-y-2 mt-3">
          <label htmlFor="name" className="text-[#464646] text-opacity-60 font-medium">Nama lengkap</label>
          <input
            name="name"
            id="name"
            type="text"
            value={user.name}
            onChange={handleInputChange}
            placeholder="ex: Hatake Kakashi"
            className="rounded border-gray-400 text-xs"
          />
        </div>
        <div className="flex flex-col text-xs gap-y-2 mt-3">
          <label htmlFor="password" className="text-[#464646] text-opacity-60 font-medium">Password</label>
          <div className="flex items-center gap-x-2">
            <div className="w-full">
              <input
                name="password"
                id="password"
                type={(!open ? 'password' : 'text')}
                value={user.password}
                onChange={handleInputChange}
                className="rounded border-gray-400 w-full text-xs"
              />
            </div>
            <div className="text-2xl text-grey-light text-opacity-60 hover:text-opacity-80 cursor-pointer">
              {
                !open ? <AiFillEye onClick={togglePassword} /> : <AiFillEyeInvisible onClick={togglePassword} />
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xs gap-y-2 mt-3">
          <label htmlFor="role" className="text-[#464646] text-opacity-60 font-medium">Peran</label>
          <select
            name="role"
            id="role"
            value={user.role}
            onChange={handleInputChange}
            className="rounded border-gray-400 text-xs optional:text-xs"
          >
            <option value="">Pilih</option>
            <option value="BKMZ">BKMZ</option>
            <option value="Korwil">Korwil</option>
            <option value="Jamaah">Jamaah</option>
          </select>
        </div>
        {
          user.role === 'BKMZ' || user.role === 'Korwil' ? (
            <div className="flex flex-col text-xs gap-y-2 mt-3">
              <label htmlFor="region" className="text-[#464646] text-opacity-60 font-medium">Asal</label>
              <input
                name="region"
                id="region"
                type="text"
                value={user.region}
                onChange={handleInputChange}
                placeholder={user.role === 'BKMZ' ? 'Asal BKMZ ex: Jawa Timur 1' : 'Asal Korwil ex: Jawa Timur'}
                className="rounded border-gray-400 text-xs placeholder:text-xs"
              />
            </div>
          ) : null
        }
        <div className="mt-5 w-full">
          {
            isLoading ? <LoadingButton /> : <SubmitButton text="Register" bgColor="w-full bg-basic-blue hover:bg-blue-dark text-white text-sm" />
          }
        </div>
        <div className="text-xs text-basic-blue mt-3">
          <Link to="/">Sudah memiliki akun?</Link>
        </div>
      </form>
    </div>
  );
}

RegisInputContainer.propTypes = {
  register: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RegisInputContainer;
