export const Statistic = (props) => {
  const { valueBad, valueGood, valueNeutral, valueTotal, valuePercentage } =
    props;

  return (
    <>
      <ul>
        <li>
          Good: <span>{valueGood}</span>
        </li>
        <li>
          Neutral: <span>{valueNeutral}</span>
        </li>
        <li>
          Bad: <span>{valueBad}</span>
        </li>
        <li>
          Total: <span>{valueTotal}</span>
        </li>
        <li>
          positive Feedback: <span>{valuePercentage}%</span>
        </li>
      </ul>
    </>
  );
};
