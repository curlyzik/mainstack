import { useQuery } from "react-query";
import { fecthGraphData } from "./graphQuery";
import { IGraphData } from "@/typings/graphData";

export const useGetGraphDataQuery = () => {
  return useQuery<{ data: IGraphData }, Error>("graph_data", fecthGraphData, {
    refetchOnWindowFocus: false,
  });
};
