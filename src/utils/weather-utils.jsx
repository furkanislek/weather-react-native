export const WEATHER_INTERPRATIONS = [
  {
    codes: [0],
    label: "Sunny",
    image: require("../../assets/images/sun.png"),
    background: require("../assets/sun-day.png"),
    backgroundNight: require("../assets/sunNight.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Cloudy",
    image: require("../../assets/images/clouds.png"),
    background: require("../assets/sun-day.png"),
    backgroundNight: require("../assets/cn.png"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Rainy",
    image: require("../../assets/images/rain.png"),
    background: require("../assets/rn.png"),
    backgroundNight: require("../assets/rn.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Snowy",
    image: require("../../assets/images/snow.png"),
    background: require("../assets/sw.png"),
    backgroundNight: require("../assets/cn.png"),
  },
  {
    codes: [95, 96, 99],
    label: "Thunderous",
    image: require("../../assets/images/thunder.png"),
    background: require("../assets/rn.png"),
    backgroundNight: require("../assets/rn.png"),
  },
];

export const getWeatherChange = (code) => {
  return WEATHER_INTERPRATIONS.find((item) => item.codes.includes(code));
};

export const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
