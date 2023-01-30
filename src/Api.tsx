import axios from 'axios';

const URL = "https://api.ecowitt.net/api/v3/device/real_time?application_key=4D9EABA31D2BD6FA29D70E3A70708E96&api_key=a67a1528-dcf3-49ef-b670-4d5a76478065&mac=30:83:98:A7:44:CC&call_back=all&temp_unitid=1&wind_speed_unitid=6&rainfall_unitid=12";

interface IReading {
  time: number;
  unit: string;
  value: string;
}

interface IWeather {
  code: number;
  msg: string;
  time: number;
  data: {
    outdoor: {
      temperature: IReading;
      feels_like: IReading;
      app_temp: IReading;
      dew_point: IReading;
      humidity: IReading;
    },
    indoor: {
      temperature: IReading;
      humidity: IReading;
    },
    solar_and_uvi: {
      solar: IReading;
      uvi: IReading;
    },
    rainfall: {
      rain_rate: IReading;
      daily: IReading;
      event: IReading;
      hourly: IReading;
      weekly: IReading;
      monthly: IReading;
      yearly: IReading;
    },
    wind: {
      wind_speed: IReading;
      wind_gust: IReading;
      wind_direction: IReading;
    },
    pressure: {
      relative: IReading;
      absolute: IReading;
    },
    battery: {
      sensor_array: IReading;
    }
  },
}

class Api {
  static async Get<T> (url: string, signal?: AbortSignal): Promise<T> {
    const response = await axios.get<T>(url, {
      signal: signal,
    });
    return response.data;
  }

  public static getWeather(signal?: AbortSignal): Promise<IWeather> {
    return Api.Get<IWeather>(URL, signal);
  }  
}

export { Api, IWeather }
