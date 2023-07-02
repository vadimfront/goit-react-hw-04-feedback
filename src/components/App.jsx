import React, { useEffect, useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, seNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedbacks, setTotalFeedbacks] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    if (!totalFeedbacks) return;
    setPositivePercentage(Math.round((good / totalFeedbacks) * 100));
  }, [totalFeedbacks, good]);

  const onLeaveFeedback = option => {
    if (option === 'Good') {
      setGood(prevState => prevState + 1);
    } else if (option === 'Neutral') {
      seNeutral(prevState => prevState + 1);
    } else if (option === 'Bad') {
      setBad(prevState => prevState + 1);
    }
    setTotalFeedbacks(prevState => prevState + 1);
  };

  const feedbackOptions = ['Good', 'Neutral', 'Bad'];

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        feedbackOptions={feedbackOptions}
        onLeaveFeedback={onLeaveFeedback}
      />
      {totalFeedbacks ? (
        <Statistics
          options={{ good, neutral, bad }}
          positivePercentage={positivePercentage}
          totalFeedbacks={totalFeedbacks}
        />
      ) : (
        <Notification message="here is no feedback" />
      )}
    </Section>
  );
};

export default App;
