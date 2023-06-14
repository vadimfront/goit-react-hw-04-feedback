import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { btnClass, children, onClick, buttonVariant, buttonType } =
      this.props;
    return (
      <button
        className={css[btnClass]}
        onClick={onClick}
        data-type={buttonVariant}
        type={buttonType}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  btnClass: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  buttonType: PropTypes.string,
};
