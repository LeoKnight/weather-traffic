"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import request from "@/app/request";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { IWeather } from "../interface";

export function useLocations() {
  const [options, setOptions] = useState<IWeather[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const date = useSelector((state: RootState) => state.filter.date);
  const time = useSelector((state: RootState) => state.filter.time);
  // date && time && fetchData();
  const fetchData = async () => {
    setLoading(true);
    const combined = `${date}T${time}`;
    const res = await request.get("/api/weather", {
      params: {
        date_time: combined,
      },
    });
    setLoading(false);
    setOptions(res.data);
  };
  useEffect(() => {
    if (date && time) {
      fetchData();
    }
    return () => {
      setOptions([]);
    };
  }, [date, time]);

  return { options, loading };
}
