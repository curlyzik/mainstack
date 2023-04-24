export interface IGraphData {
  graph_data: {
    views: {
      [key: string]: number;
    };
  };
  top_locations: {
    country: string;
    count: number;
    percent: number;
  }[];

  top_sources: {
    source: string;
    count: number;
    percent: number;
  }[];
}
