import { useEffect, useState } from "react";
import { PixelRatio, Text, ImageBackground, StyleSheet } from "react-native";
import "react-native-reanimated";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../src/pages/Home/Home";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { WeatherAPI } from "./../src/api/weatherApi";
import { useFonts } from "expo-font";
import { getWeatherChange } from "@/src/utils/weather-utils";
import cn from "../src/assets/cn.png";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forecast from "../src/pages/Forecast/Forecast";
import { nowToHHMM } from "@/src/utils/date-time";

const navTheme = {
  colors: {
    background: "transparent",
  },
};

const Stack = createNativeStackNavigator();
const fontScale = PixelRatio.getFontScale();
const getFontSize = (boyut) => boyut / fontScale;

export default function RootLayout() {
  const time = nowToHHMM();
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const sunset = weather?.daily.sunset[0].split("T")[1];

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("../assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coords) {
    const weatherResponse = await WeatherAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords(coords) {
    const cityResponse = await WeatherAPI.fetchCityByCoords(coords);
    setCity(cityResponse);
  }

  async function fetchCoordsByCity(city) {
    try {
      const coordsResponse = await WeatherAPI.fetchCoordsByCity(city);
      setCoordinates(coordsResponse);
    } catch (err) {
      Alert.alert("Aouch !", err);
    }
  }

  const currentInterpretation = getWeatherChange(
    weather?.current_weather.weathercode
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchWeatherByCoords(coordinates);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status == "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "37.06", lng: "37.38" });
    }
  }

  return (
    <NavigationContainer independent={true} theme={navTheme}>
      {weather && isFontLoaded ? (
        <ImageBackground
          imageStyle={styles.img}
          style={styles.imgBackground}
          source={
            time > sunset
              ? currentInterpretation.backgroundNight
              : currentInterpretation.background
          }
        >
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              {isFontLoaded && weather && (
                <Stack.Navigator
                  screenOptions={{ headerShown: false, animation: "fade" }}
                  initialRouteName="Home"
                >
                  <Stack.Screen name="Home">
                    {() => (
                      <Home
                        city={city}
                        weather={weather}
                        onSubmitSearch={fetchCoordsByCity}
                      />
                    )}
                  </Stack.Screen>
                  <Stack.Screen name="Forecasts" component={Forecast} />
                </Stack.Navigator>
              )}
            </SafeAreaView>
          </SafeAreaProvider>
        </ImageBackground>
      ) : (
        <ImageBackground
          imageStyle={styles.img}
          style={styles.imgBackground}
          source={cn}
        >
          <SafeAreaProvider style={styles.loadingContainer}>
            <SafeAreaView style={styles.loadingView}>
              <Text style={styles.loadingText}>Loading</Text>
            </SafeAreaView>
          </SafeAreaProvider>
        </ImageBackground>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: getFontSize(15),
  },
  imgBackground: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    opacity: 0.8,
  },
  loadingContainer: {
    flex: 1, // Burada değişiklik yapıldı
    alignItems: "center",
    justifyContent: "center",
  },
  loadingView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "white",
    fontSize: getFontSize(50),
  },
});
