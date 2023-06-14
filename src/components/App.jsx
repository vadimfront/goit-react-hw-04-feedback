import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from 'utils/feedbackUtils';
import Statistics from './Feedback/Statistics';
import Section from './Section/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onLeaveFeedback = e => {
    const type = e.target.dataset.type;
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = countTotalFeedback(this.state);
    const percentage = countPositiveFeedbackPercentage(totalFeedbacks, good);
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          positivePercentage={percentage}
          totalFeedbacks={totalFeedbacks}
        />
      </Section>
    );
  }
}

export default App;
