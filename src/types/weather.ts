// types/weather.ts
export interface WeatherFact {
  obs_time: string;
  cloudness: number;
  condition: string;
  feels_like: number;
  prec_prob: number;
  temp: number;
  wind_gust: number;
}

export interface WeatherInfo {
  tzinfo: { abbr: string };
}

export interface WeatherData {
  fact: WeatherFact;
  info: WeatherInfo;
}
