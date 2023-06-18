import React, { Component } from 'react';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from 'utils/feedbackUtils';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    const totalFeedbacks = countTotalFeedback(this.state);
    const percentage = countPositiveFeedbackPercentage(
      totalFeedbacks,
      this.state.good
    );
    const stateOptions = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          stateOptions={stateOptions}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {totalFeedbacks ? (
          <Statistics
            options={this.state}
            positivePercentage={percentage}
            totalFeedbacks={totalFeedbacks}
          />
        ) : (
          <Notification message="here is no feedback" />
        )}
      </Section>
    );
  }
}

export default App;
