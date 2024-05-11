import { Image, Text, TouchableOpacity, View, PixelRatio } from "react-native";
import { s } from "./Basic.style";
import Txt from "../Text/Txt";
import { getWeatherChange } from "../../utils/weather-utils";
import Clock from "./../Clock/Clock";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Basic = ({ apiProps, city }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (boyut) => boyut / fontScale;

  const currentInterpretation = getWeatherChange(
    apiProps.current_weather.weathercode
  );
  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const temperatureInCelsius = apiProps.current_weather.temperature;
  const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;

  const temperature = isCelsius
    ? `${Math.round(temperatureInCelsius)}°C`
    : `${temperatureInFahrenheit.toFixed(1)}°F`;

  const nav = useNavigation();

  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{currentInterpretation.label}</Txt>
      </View>
      <View style={s.temperatures}>
        <TouchableOpacity
          onPress={() => nav.navigate("Forecasts", { city, ...apiProps })}
          onLongPress={toggleTemperatureUnit}
        >
          <Txt style={s.temperatureText}>{temperature}</Txt>
        </TouchableOpacity>
        <Image
          style={[s.image, { marginTop: getFontSize(25) }]}
          source={currentInterpretation.image}
        ></Image>
      </View>
    </>
  );
};

export default Basic;
