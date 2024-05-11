import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";
const RATIO = 0.0012008234217749313;
const Txt = ({ children, style, ...restProps }) => {
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions();

  return (
    <Text
      style={[
        s.txt,
        style,
        {
          fontSize: Math.round(fontSize * RATIO * height),
        },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default Txt;
