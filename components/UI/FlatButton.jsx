import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../../constants/theme";

export default function FlatButton({ onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "regular",
    fontSize: FONTSIZE.size_12,
    color: "white",
  },
});
