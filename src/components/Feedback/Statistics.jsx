import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import Title from 'components/Title/Title';
import React, { Component } from 'react';
import css from './Statistics.module.css';

export default class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { good, neutral, bad, positivePercentage, totalFeedbacks } =
      this.props;

    return (
      <>
        <Title level="h3">Statistics</Title>
        {totalFeedbacks ? (
          <>
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
        ) : (
          <Notification message="here is no feedback" />
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.number,
  totalFeedbacks: PropTypes.number,
};
