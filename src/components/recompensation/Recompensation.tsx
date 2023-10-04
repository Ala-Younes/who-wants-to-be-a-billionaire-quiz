import moneyPyramid from "../../data/MoneyPyramid";
import "./Recompensation.scss";

const Recompensation = () => {
  return (
    <div className="moneyPyramid">
      {[...moneyPyramid].reverse().map((earnedMoney) => (
        <div key={earnedMoney.id} className="moneyPyramid__gain">
          <span className="moneyPyramid__gain--number">{earnedMoney.id}</span>
          <span className="moneyPyramid__gain--amount">
            {earnedMoney.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Recompensation;
