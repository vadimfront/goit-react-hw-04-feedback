import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import {
  countPositivePercentage,
  countTotalFeedback,
} from 'utils/feedbackUtils';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, seNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'Good') {
      setGood(prevState => prevState + 1);
    } else if (option === 'Neutral') {
      seNeutral(prevState => prevState + 1);
    } else if (option === 'Bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const feedbackOptions = ['Good', 'Neutral', 'Bad'];
  const totalFeedback = countTotalFeedback({ good, neutral, bad });
  const positivePercentage = countPositivePercentage(totalFeedback, good);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        feedbackOptions={feedbackOptions}
        onLeaveFeedback={onLeaveFeedback}
      />
      {totalFeedback ? (
        <Statistics
          options={{ good, neutral, bad }}
          positivePercentage={positivePercentage}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification message="here is no feedback" />
      )}
    </Section>
  );
};

export default App;
