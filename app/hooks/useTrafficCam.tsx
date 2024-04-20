"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import request from "@/app/request";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { ITrafficeCam } from "../interface";

export function useTrafficCam() {
  const [screenShots, setScreenShots] = useState<ITrafficeCam[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const date = useSelector((state: RootState) => state.filter.date);
  const time = useSelector((state: RootState) => state.filter.time);
  const location = useSelector(
    (state: RootState) => state.filter.currentLocation
  );
  const coordinates = useSelector(
    (state: RootState) => state.filter.currentCoordinates
  );

  // date && time && fetchData();
  const fetchData = async () => {
    if (!coordinates) {
      return;
    }
    setLoading(true);
    const date_time = `${date}T${time}`;

    const res = await request.get(`/api/traffic`, {
      params: {
        location,
        date_time,
        longitude: coordinates[0],
        latitude: coordinates[1],
      },
    });
    setLoading(false);
    setScreenShots(res.data);
  };
  useEffect(() => {
    if (date && time && coordinates && location) {
      fetchData();
    }
    return () => {
      setScreenShots([]);
    };
  }, [date, time, coordinates, location]);

  return { screenShots, loading };
}
