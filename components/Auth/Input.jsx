import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../../constants/theme";

export default function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={"none"}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: COLORS.primaryWhiteHex,
    marginBottom: 4,
    fontFamily: "medium",
  },
  labelInvalid: {
    color: COLORS.primaryRedHex,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderWidth: 0.5,
    borderColor: COLORS.primaryLightGreyHex,
    borderRadius: 6,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    fontFamily: "regular",
  },
});
