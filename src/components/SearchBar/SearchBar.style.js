import { StyleSheet, PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (boyut) => boyut / fontScale;

const s = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: getFontSize(50),
    paddingLeft: getFontSize(20),
    borderRadius: 20,
    fontFamily: "Alata-Regular",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export { s };
