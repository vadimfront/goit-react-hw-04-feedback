import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { Button } from 'components/Button/Button';

export const FeedbackOptions = ({ stateOptions, onLeaveFeedback }) => {
  return (
    <div className={css.btn__container}>
      {stateOptions.map(option => (
        <Button
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
