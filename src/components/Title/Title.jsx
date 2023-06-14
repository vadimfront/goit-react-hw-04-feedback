import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Title.module.css';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }

  selectTitle = (level, children) => {
    switch (level) {
      case 'h1':
        return <h1 className={css.title_h1}>{children}</h1>;

      case 'h2':
        return <h2 className={css.title_h2}>{children}</h2>;

      case 'h3':
        return <h3 className={css.title_h3}>{children}</h3>;

      case 'h4':
        return <h4 className={css.title_h4}>{children}</h4>;

      case 'h5':
        return <h5 className={css.title_h5}>{children}</h5>;

      case 'h6':
        return <h6 className={css.title_h6}>{children}</h6>;

      default:
        return <h3>{children}</h3>;
    }
  };

  render() {
    const { level, children } = this.props;
    const title = children && this.selectTitle(level, children);

    return title;
  }
}

Title.propTypes = {
  level: PropTypes.string,
  children: PropTypes.string.isRequired,
};
