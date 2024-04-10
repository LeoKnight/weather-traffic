"use client";

import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useLocations } from "@/app/hooks/useLocations";

export const Locations = () => {
  const [options] = useLocations();
  console.log(options);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
  };
  return (
    <div className="w-full h-full p-5 bg-blue-300">
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
