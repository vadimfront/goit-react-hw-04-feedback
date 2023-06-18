import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ btnClass, children, onClick, buttonType }) => {
  return (
    <button className={css[btnClass]} onClick={onClick} type={buttonType}>
      {children}
    </button>
  );
};

Button.propTypes = {
  btnClass: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  buttonType: PropTypes.string,
};
