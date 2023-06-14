import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title/Title';
import css from './Section.module.css';
import Container from 'components/Container/Container';

export default class Section extends Component {
  render() {
    return (
      <section className={css.statistics}>
        <Container>
          <Title level="h2">{this.props.title}</Title>
          {this.props.children}
        </Container>
      </section>
    );
  }
}

Section.propTypes = {
  children: PropTypes.node,
};
