import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../../constants/theme";

export default function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size={"large"} color={COLORS.primaryWhiteHex} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  message: {
    fontFamily: "medium",
    fontSize: FONTSIZE.size_18,
    marginBottom: 12,
    color: COLORS.primaryOrangeHex,
  },
});
