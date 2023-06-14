export const countTotalFeedback = data => {
  const values = Object.values(data);
  const total = values.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue);
  }, 0);
  return total;
};

export const countPositiveFeedbackPercentage = (total, good) => {
  if (total === 0) return 0;
  const percent = (good / total) * 100;
  return Math.round(percent);
};
