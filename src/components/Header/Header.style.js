import { StyleSheet, PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale();
const getFontSize = (boyut) => boyut / fontScale;

const BACK_BTN_WIDTH = 30;
const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: getFontSize(15),
    marginBottom:getFontSize(20)
  },
  back_btn: {
    width: BACK_BTN_WIDTH,
  },
  header_txts: {
    flex: 1,
    marginRight: BACK_BTN_WIDTH,
    alignItems: "center",
  },
  subtitle: {
    fontSize: getFontSize(25),
  },
  icon: {
    fontSize: getFontSize(50),
  },
});

export { s };
