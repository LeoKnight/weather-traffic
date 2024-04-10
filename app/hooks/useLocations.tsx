"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export function useLocations() {
  const [options, setOptions] = useState([]);

  const date = useSelector((state: RootState) => state.filter.date);
  const time = useSelector((state: RootState) => state.filter.time);
  // date && time && fetchData();
  const fetchData = async () => {
    const combined = dayjs(`${date}T${time}`).valueOf();

    const res = await axios.get("/api/weather/1712586564739");
    console.log(res);
    setOptions(res.data);
  };
  useEffect(() => {
    if (date && time) {
      fetchData();
    }
  }, [date, time]);

  useEffect(() => {});

  return [options];
}
