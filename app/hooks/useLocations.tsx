"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import request from "@/app/request";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export function useLocations() {
  const [options, setOptions] = useState([]);

  const date = useSelector((state: RootState) => state.filter.date);
  const time = useSelector((state: RootState) => state.filter.time);
  // date && time && fetchData();
  const fetchData = async () => {
    const combined = dayjs(`${date}T${time}`).valueOf();

    const res = await request.get("/api/weather/1712586564739");
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

  useEffect(() => {});

  return [options];
}
