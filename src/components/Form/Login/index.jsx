/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import SubmitButton from '../../Button/ButtonOnClick';
import LoadingButton from '../../Button/ButtonOnLoading';

function LoginInputContainer({ login, isLoading }) {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [open, setOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login(user);
  };

  const togglePassword = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white mt-8 px-6 py-10 drop-shadow-sm rounded w-full">
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col text-xs gap-y-2 ">
          <label htmlFor="username" className="text-[#464646] text-opacity-60 font-medium">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            value={user.username}
            onChange={handleInputChange}
            placeholder="ex: hatake22"
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
                placeholder="********"
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
        <div className="mt-5 w-full">
          {
            isLoading ? <LoadingButton /> : <SubmitButton text="Login" bgColor="w-full bg-basic-blue hover:bg-blue-dark text-white text-sm" />
          }
        </div>
        <div className="text-xs text-basic-blue mt-3">
          <Link to="/register">Daftar disini</Link>
        </div>
      </form>
    </div>
  );
}

LoginInputContainer.propTypes = {
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoginInputContainer;
