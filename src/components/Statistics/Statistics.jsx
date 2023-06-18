import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title/Title';
import css from './Statistics.module.css';

export const Statistics = ({ options, positivePercentage, totalFeedbacks }) => {
  const { good, neutral, bad } = options;
  return (
    <>
      <Title level="h3">Statistics</Title>
      <ol className={css.list}>
        <li className={css.list__item}>Good: {good}</li>
        <li className={css.list__item}>Neutral: {neutral}</li>
        <li className={css.list__item}>Bad: {bad}</li>
        <li className={css.list__item}>Total: {totalFeedbacks}</li>
        <li className={css.list__item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ol>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.number,
  totalFeedbacks: PropTypes.number,
};
