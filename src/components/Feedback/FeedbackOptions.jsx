import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className={css.btn__container}>
        <Button
          onClick={onLeaveFeedback}
          btnClass="draw-border"
          buttonVariant="good"
          buttonType="button"
        >
          Good
        </Button>
        <Button
          onClick={onLeaveFeedback}
          btnClass="draw-border"
          buttonVariant="neutral"
          buttonType="button"
        >
          Neutral
        </Button>
        <Button
          onClick={onLeaveFeedback}
          btnClass="draw-border"
          buttonVariant="bad"
          buttonType="button"
        >
          Bad
        </Button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
