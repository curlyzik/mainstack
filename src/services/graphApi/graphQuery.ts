import { IGraphData } from "@/typings/graphData";
import axios from "axios";

export const fecthGraphData = (): Promise<{ data: IGraphData }> => {
  return axios.get("https://fe-task-api.mainstack.io/");
};
