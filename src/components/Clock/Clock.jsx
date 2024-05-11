import { s } from "./Clock.style";
import Txt from "../Text/Txt";
import { TouchableOpacity, View } from "react-native";
import { nowToHHMM, nowToHHMMSS } from "../../utils/date-time";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(nowToHHMM());
  const [isHHMMFormat, setIsHHMMFormat] = useState(true);

  const toggleTimeFormat = () => {
    setIsHHMMFormat(!isHHMMFormat);
    setTime(isHHMMFormat ? nowToHHMMSS() : nowToHHMM());
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(isHHMMFormat ? nowToHHMM() : nowToHHMMSS());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isHHMMFormat]);

  return (
    <>
      <TouchableOpacity onPress={toggleTimeFormat}>
        <Txt style={s.time}>{time}</Txt>
      </TouchableOpacity>
    </>
  );
}
