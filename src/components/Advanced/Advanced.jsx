import { View, PixelRatio } from "react-native";
import { s } from "./Advanced.style";
import Txt from "../Text/Txt";
import { getWeatherChange } from "../../utils/weather-utils";
import { useState } from "react";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (boyut) => boyut / fontScale;
const StyledContainer = ({ children }) => {
  return <View style={{ alignItems: "center" }}>{children}</View>;
};
const StyledLabel = ({ children }) => {
  return <Txt style={{ fontSize: getFontSize(20) }}>{children}</Txt>;
};
const StyledValue = ({ children }) => {
  return <Txt style={{ fontSize: getFontSize(25) }}>{children}</Txt>;
};
const Advanced = ({ advancedProps }) => {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledLabel >{advancedProps.daily.sunrise[0].split("T")[1]}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{advancedProps.daily.sunset[0].split("T")[1]}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{advancedProps.current_weather.windspeed}</StyledLabel>
        <StyledValue>Windspeed</StyledValue>
      </StyledContainer>
    </View>
  );
};

export default Advanced;
