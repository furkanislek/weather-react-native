import { StyleSheet, PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (boyut) => boyut / fontScale;

export const s = StyleSheet.create({
  time: {
    fontSize:getFontSize(22),
  },
});
