"use client";

import { DateFilter } from "./features/filter/DateFilter";
import { Forcast } from "./components/Forcast";
import { Locations } from "./components/Locations";
import { store } from "./store";
import { Provider } from "react-redux";
import { TrafficCamList } from "./components/TrafficCamList";
import { Ranking } from "./components/Ranking";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="px-4 py-4 sm:px-12 sm:py-8">
        <section className="min-h-16 flex flex-row mb-2 sm:mb-5">
          {/* Date filter */}
          <div className=" basis-full shadow-md border-2 sm:basis-3/4 ">
            <DateFilter />
          </div>
        </section>

        <section className="h-96 flex gap-2 overflow-hidden items-stretch justify-between flex-col mb-3  sm:flex-row ">
          {/* List of locations */}
          <div className="shadow-md basis-2/3 h-2/3 sm:h-full grow sm:grow-0 sm:basis-3/4">
            <Locations />
          </div>
          <div className="shadow-md basis-1/3 sm:basis-1/5">
            <Forcast />
          </div>
        </section>

        <section className="flex">
          <div className="p-2 sm:p-5 min-h-64 shadow-md basis-full sm:basis-3/4 border-2">
            <TrafficCamList />
          </div>
        </section>
        <section className="shadow-md p-5 mt-2">
          <Ranking />
        </section>
      </main>
    </Provider>
  );
}
