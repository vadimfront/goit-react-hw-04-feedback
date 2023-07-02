import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { Button } from 'components/Button/Button';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ feedbackOptions, onLeaveFeedback }) => {
  return (
    <div className={css.btn__container}>
      {feedbackOptions.map(option => (
        <Button
          key={nanoid()}
          onClick={() => onLeaveFeedback(option)}
          btnClass="draw-border"
          buttonType="button"
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
