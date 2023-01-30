import * as React from 'react';
import styled from '@independent-software/typeui/styles/Theme';

import { Api, IWeather } from './Api';
import { CartesianGrid, Legend, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { LineChart } from 'recharts';
import { format } from 'date-fns';

interface IProps {
  className?: string;
}

const ChartBase = (props: IProps) => {
  const timerID = React.useRef(null);
  const [weathers, setWeathers] = React.useState([] as IWeather[]);

  const loadData = () => {
    Api.getWeather()
    .then(weather => {
      setWeathers(weathers => [...weathers, weather]); 
    });
  }

  const onTime = () => {
    loadData();
  }

  React.useEffect(() => {
    timerID.current = window.setInterval(onTime, 3000);
    return () => window.clearInterval(timerID.current);
  }, []);

  const getData = () => {
    return weathers.map(weather => {
      return {
        time: weather.time,
        wind_gust: parseFloat(weather.data.wind.wind_speed.value),
        temp: parseFloat(weather.data.outdoor.temperature.value)
      }
    });
  }

  return (
    <div className={props.className}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={getData()}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis 
            dataKey="time" 
            domain={['auto', 'auto']}
            tickFormatter={value => {
              if(value === "auto") return value;
              const d = new Date(0);
              d.setUTCSeconds(value);
              return format(d, "dd MM HH:mm:ss");
            }}
          /> 
          <YAxis/>
          <Line name="Wind gust"  dataKey="wind_gust" stroke="#8884d8" isAnimationActive={false}/>
          <Line name="Temp"  dataKey="temp" stroke="#d48648" isAnimationActive={false}/>
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  );
}

const Chart = styled(ChartBase)`
  flex: 1;
  background: white;
  padding: 32px;
`

export { Chart } 