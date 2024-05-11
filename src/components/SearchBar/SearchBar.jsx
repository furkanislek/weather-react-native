import { TextInput } from "react-native";
import { s } from "./SearchBar.style.js";

export function SearchBar({ onSearch }) {
  return (
    <TextInput
      onSubmitEditing={(e) => {
        onSearch(e.nativeEvent.text);
      }}
      style={s.input}
      placeholder="Type a city... Ex: Paris"
    />
  );
}
