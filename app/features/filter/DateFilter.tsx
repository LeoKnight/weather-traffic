"use client";

import { DatePicker, DatePickerProps, TimePicker } from "antd";
import type { RootState } from "@/app/store";
import dayjs from "dayjs";
import { setDate, setTime } from "./filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { dateFormat, timeFormat } from "@/app/const";

export const DateFilter = () => {
  const date = useSelector((state: RootState) => state.filter.date);
  const time = useSelector((state: RootState) => state.filter.time);
  const dispatch = useDispatch();

  const handleDateChange = (date: DatePickerProps["value"]) => {
    dispatch(setDate(date?.format(dateFormat) ?? ""));
  };
  const handleTimeChange = (time: DatePickerProps["value"]) => {
    dispatch(setTime(time?.format(timeFormat) ?? ""));
  };
  const disabledDate: DatePickerProps["disabledDate"] = (current) => {
    return current && current > dayjs().endOf("day");
  };
  console.log(date, time);
  return (
    <div className="flex justify-around h-full items-center justify-items-center gap-15">
      <div>
        <DatePicker
          value={date ? dayjs(date, dateFormat) : null}
          disabledDate={disabledDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <TimePicker
          value={time ? dayjs(time, timeFormat) : null}
          disabledDate={disabledDate}
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
};
