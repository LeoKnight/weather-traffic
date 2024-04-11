"use client";

import { DateFilter } from "./features/filter/DateFilter";
import { Forcast } from "./components/Forcast";
import { Locations } from "./components/Locations";
import { store } from "./store";
import { Provider } from "react-redux";
import { ScreenShot } from "./components/ScreenShot";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="px-12 py-8 md:p-10">
        <section className="min-h-16 flex  flex-row mb-5">
          {/* Date filter */}
          <div className=" basis-full  sm:basis-3/4 border-2">
            <DateFilter />
          </div>
        </section>

        <section className="flex gap-2 items-stretch justify-between flex-col  min-h-64 mb-3 sm:flex-row">
          {/* List of locations */}
          <div className="basis-3/4">
            <Locations />
          </div>
          <div className="basis-1/5">
            <Forcast />
          </div>
        </section>
        <section className=" flex ">
          <div className="p-5 min-h-64 basis-full sm:basis-3/4 border-2">
            <ScreenShot />
          </div>
        </section>
      </main>
    </Provider>
  );
}
