import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Forcast = () => {
  const currentForecast = useSelector(
    (state: RootState) => state.filter.currentForecast
  );

  return (
    <div className="p-2 w-full border-2 h-full sm:p-5">
      <h4 className="mb-2">Forcast:</h4>
      <div>{currentForecast}</div>
    </div>
  );
};
