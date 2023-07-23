import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.value_options}>
      <span className={css.feedback_value}>Good: {good}</span>
      <span className={css.feedback_value}>Neutral: {neutral}</span>
      <span className={css.feedback_value}>Bad: {bad}</span>
      <span className={css.feedback_value}>Total: {total}</span>
      <span className={css.feedback_value}>
        Positive feedback: {positivePercentage}%
      </span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
