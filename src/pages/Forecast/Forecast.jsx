import { View, Text } from "react-native";
import { s } from "./Forecast.style";
import { useRoute } from "@react-navigation/native";
import Header from "./../../components/Header/Header";
import { getWeatherChange, DAYS } from "@/src/utils/weather-utils";
import ForecastListItem from "../../components/ForecastListItem/ForecastListItem";

const Forecast = ({}) => {
  const { params } = useRoute();

  const foreCastList = (
    <View style={{ marginTop: 50 }}>
      {params.daily.time.map((time, index) => {
        const weatherCode = params.daily.weathercode[index];
        const image = getWeatherChange(weatherCode).image;
        const temperature = params.daily.temperature_2m_max[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formatedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formatedDate}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );

  return (
    <>
      <Header city={params.city} style={s.header} />
      {foreCastList}
    </>
  );
};

export default Forecast;
