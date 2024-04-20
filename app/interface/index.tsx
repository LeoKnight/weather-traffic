export interface IWeather {
  date_time: string;
  date_time_with_timezone: string;
  forecast: string;
  name: string;
  point: Geometry;
  valid_period_end: string;
  valid_period_start: string;
}
export interface Geometry {
  type: "Point";
  coordinates: [number, number];
}

export interface ITrafficeCam {
  date_time: string;
  height: number;
  id: number;
  image_url: string;
  point: Geometry;
  width: number;
}

export interface ISearchRecord {
  location: string;
  search_date_time: string;
}
