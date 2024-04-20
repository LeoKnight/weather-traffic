import { CurrentUserRanking } from "./CurrentUserRanking";
import { AllUserRanking } from "./AllUserRanking";

export const Ranking = () => {
  return (
    <div>
      <h3>Ranking</h3>
      <div className="flex flex-col sm:flex-row">
        <CurrentUserRanking />
        <AllUserRanking />
      </div>
    </div>
  );
};
