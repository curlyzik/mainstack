import { useGetGraphDataQuery } from "@/services/graphApi";
import React from "react";
import TopLocationChart from "./Charts/TopLocationChart";
import { GB, NG, DE, GH, FI } from "country-flag-icons/react/3x2";

const TopLocations = () => {
  const { data: graphData } = useGetGraphDataQuery();
  const locations = graphData?.data.top_locations;

  const countryFlags = {
    Nigeria: {
      flag: <NG />,
      color: "#599eea",
    },
    Germany: {
      flag: <DE />,
      color: "#844ff6",
    },
    Finland: {
      flag: <FI />,
      color: "#0fb77a",
    },
    Ghana: {
      flag: <GH />,
      color: "#fab70a",
    },
    "United Kingdom": {
      flag: <GB />,
      color: "#f09468",
    },
  } as any;

  return (
    <div className="p-6 border-[#EFF1F6] border rounded-xl">
      <div className="flex justify-between pb-10">
        <span className="text-lg font-semibold text-mainstackDark">
          Top Locations
        </span>
        <span className="text-mainstackOrange-primary">View full reports</span>
      </div>

      <div className="grid grid-cols-2 gap-x-3 items-center">
        <div className="flex flex-col gap-y-[1.188rem]">
          {locations?.map((location) => (
            <div className="text-base flex items-center gap-x-2">
              <span className="h-5 w-5 mt-2">
                {countryFlags[location.country].flag}
              </span>
              <span>{location.country} </span>{" "}
              <span className="font-medium">{location.percent}%</span>
              <div
                style={{
                  backgroundColor: countryFlags[location.country].color,
                }}
                className="w-3 h-3 rounded-full"
              />
            </div>
          ))}
        </div>

        <div className="w-full">
          <TopLocationChart locations={locations} />
        </div>
      </div>
    </div>
  );
};

export default TopLocations;
