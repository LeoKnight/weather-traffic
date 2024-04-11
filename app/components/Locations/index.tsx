"use client";

import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useLocations } from "@/app/hooks/useLocations";
import { useDispatch } from "react-redux";
import {
  setCurrentLocation,
  setCurrentForecast,
} from "@/app/features/filter/filterSlice";

export const Locations = () => {
  const dispatch = useDispatch();

  const [options] = useLocations();

  const onChange = (e: RadioChangeEvent) => {
    dispatch(setCurrentLocation(e.target.value.point.coordinates));
    dispatch(setCurrentForecast(e.target.value.forecast));
  };
  return (
    <div className="w-full h-full p-5 border-2	">
      <h2>locations:</h2>
      <Radio.Group onChange={onChange}>
        {options.map((option: any) => (
          <Radio key={option.name} value={option}>
            {option?.name}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};
