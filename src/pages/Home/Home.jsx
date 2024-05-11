import { View } from "react-native";
import { s } from "./Home.style";
import Basic from "../../components/Basic/Basic";
import Advanced from "./../../components/Advanced/Advanced";
import { SearchBar } from "./../../components/SearchBar/SearchBar";

const Home = ({ weather, city, onSubmitSearch }) => {
  return (
    <>
      <View style={s.basic}>
        <Basic city={city} apiProps={weather} />
      </View>
      <View style={s.searchBar}>
        <SearchBar onSearch={onSubmitSearch} />
      </View>
      <View style={s.advandedWeather}>
        <Advanced advancedProps={weather} />
      </View>
    </>
  );
};

export default Home;
