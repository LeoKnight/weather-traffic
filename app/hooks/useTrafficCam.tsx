"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import request from "@/app/request";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export function useTrafficCam() {
  const [screenShots, setScreenShots] = useState([]);

  const date = useSelector((state: RootState) => state.filter.date);
  const time = useSelector((state: RootState) => state.filter.time);
  const currentLocation = useSelector(
    (state: RootState) => state.filter.currentLocation
  );
  // date && time && fetchData();
  const fetchData = async () => {
    if (!currentLocation) return;
    const combined = dayjs(`${date}T${time}`).valueOf();

    const res = await request.get(`/api/fraffic/${combined}`, {
      params: {
        longitude: currentLocation[0],
        latitude: currentLocation[1],
      },
    });
    setScreenShots(res.data);
  };
  useEffect(() => {
    if (date && time && currentLocation) {
      fetchData();
    }
    return () => {
      setScreenShots([]);
    };
  }, [date, time, currentLocation]);

  return [screenShots];
}
