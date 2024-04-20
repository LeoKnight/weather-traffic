import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Forcast = () => {
  const currentForecast = useSelector(
    (state: RootState) => state.filter.currentForecast
  );

  return (
    <div className="h-full w-full p-5 border-2	">
      <h4 className="mb-2">Forcast:</h4>
      <div>{currentForecast}</div>
    </div>
  );
};
