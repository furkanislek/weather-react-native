import { TextInput } from "react-native";
import { s } from "./SearchBar.style.js";
import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };
  return (
    <TextInput
      onSubmitEditing={(e) => {
        onSearch(e.nativeEvent.text);
      }}
      onChangeText={handleSearch}
      value={searchText}
      style={s.input}
      placeholder="Type a city... Ex: Paris"
    />
  );
}
