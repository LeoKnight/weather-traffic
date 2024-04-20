"use client";

import type { RadioChangeEvent } from "antd";
import { Radio, Space } from "antd";
import { useLocations } from "@/app/hooks/useLocations";
import { useDispatch } from "react-redux";
import {
  setCurrentLocation,
  setCurrentForecast,
  setCurrentCoordinates,
} from "@/app/features/filter/filterSlice";
import { Suspense } from "react";

export const Locations = () => {
  const dispatch = useDispatch();

  const { options, loading } = useLocations();

  const onChange = (e: RadioChangeEvent) => {
    dispatch(setCurrentLocation(e.target.value.name));
    dispatch(setCurrentCoordinates(e.target.value.point.coordinates));
    dispatch(setCurrentForecast(e.target.value.forecast));
  };
  return (
    <div className="w-full h-full p-5 border-2">
      <h2 className="mb-2">locations:</h2>
      <div className="h-5/6 overflow-x-scroll">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Radio.Group onChange={onChange}>
            <Space direction="vertical">
              {options.map((option: any) => (
                <Radio key={option.name} value={option}>
                  {option?.name.replaceAll("_", " ")}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        )}
      </div>
    </div>
  );
};
