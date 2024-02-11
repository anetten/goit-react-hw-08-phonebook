import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/authSlice.operations';
import { selectAuthIsLoading } from '../../redux/auth/authSlice.selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const handleLogOut = () => dispatch(apiLogoutUser());

  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={handleLogOut}
        disabled={isLoading}
        type="button"
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
