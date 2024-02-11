import React from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const HomePagePart = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>Hello there! Welcome to our page.</p>
      <p className={css.subtitle}>
        <Link className={css.link} to="/login">
          Have an account? Click on me!
        </Link>
      </p>
      <p className={css.subtitle}>
        Don't have one? Please{' '}
        <Link className={css.link} to="/register">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default HomePagePart;
