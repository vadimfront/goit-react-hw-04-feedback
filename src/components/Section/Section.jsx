import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title/Title';
import css from './Section.module.css';
import { Container } from 'components/Container/Container';

export const Section = ({ title, children }) => {
  return (
    <section className={css.statistics}>
      <Container>
        <Title level="h2">{title}</Title>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
