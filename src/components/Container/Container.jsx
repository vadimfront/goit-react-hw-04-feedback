import React from 'react';
import PropTypes from 'prop-types';
import css from './Container.module.css';

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

Container.propsType = {
  children: PropTypes.node,
};
