import { useGetGraphDataQuery } from "@/services/graphApi";
import React from "react";
import { GB, NG, DE, GH, FI } from "country-flag-icons/react/3x2";
import TopSourceChart from "./Charts/TopSourceChart";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import IconInstagram from "./IconInstagram";
import IconFacebook from "./IconFacebook";
import IconLinkedIn from "./IconLinkedIn";

const TopSource = () => {
  const { data: graphData } = useGetGraphDataQuery();
  const source = graphData?.data.top_sources;

  const sourceIcons = {
    google: {
      icon: <FcGoogle />,
      color: "#599eea",
    },
    instagram: {
      icon: <IconInstagram />,
      color: "#844ff6",
    },
    facebook: {
      icon: <IconFacebook />,
      color: "#0fb77a",
    },
    linkedin: {
      icon: <IconLinkedIn />,
      color: "#fab70a",
    },
  } as any;

  return (
    <div className="p-6 border-[#EFF1F6] border rounded-xl">
      <div className="flex justify-between pb-10">
        <span className="text-lg font-semibold text-mainstackDark">
          Top Referral source
        </span>
        <span className="text-mainstackOrange-primary">View full reports</span>
      </div>

      <div className="grid grid-cols-2 gap-x-3 items-center">
        <div className="flex flex-col gap-y-[1.188rem]">
          {source?.map((source) => (
            <div className="text-base flex items-center gap-x-2">
              <span className="h-5 w-5 mt-2">
                {sourceIcons[source.source].icon}
              </span>
              <span className="capitalize">{source.source} </span>{" "}
              <span className="font-medium">{source.percent}%</span>
              <div
                style={{
                  backgroundColor: sourceIcons[source.source].color,
                }}
                className="w-3 h-3 rounded-full"
              />
            </div>
          ))}
        </div>

        <div className="w-full">
          <TopSourceChart source={source} />
        </div>
      </div>
    </div>
  );
};

export default TopSource;
