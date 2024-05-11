import { TouchableOpacity, View } from "react-native";
import { s } from "./Header.style.js";
import Txt from "../Text/Txt.jsx";
import { useNavigation } from "@react-navigation/native";

const Header = ({ city }) => {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.back_btn} onPress={nav.goBack}>
        <Txt style={s.icon}>{"<"}</Txt>
      </TouchableOpacity>
      <View style={s.header_txts}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={s.subtitle}>7 day forecasts</Txt>
      </View>
    </View>
  );
};

export default Header;
