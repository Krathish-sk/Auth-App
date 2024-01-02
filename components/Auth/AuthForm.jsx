import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Input from "./Input";
import { COLORS, FONTSIZE } from "../../constants/theme";

export default function AuthForm({ isLogin, onSubmit, credentialInvalid }) {
  const [userEmail, setUserEmail] = useState("");
  const [confirmUserEmail, setConfirmUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmUserPassword, setConfirmUserPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordDontMatch,
  } = credentialInvalid;

  function updateUserInput(inputType, userValue) {
    switch (inputType) {
      case "email":
        setUserEmail(userValue);
        break;
      case "confirmEmail":
        setConfirmUserEmail(userValue);
        break;
      case "password":
        setUserPassword(userValue);
        break;
      case "confirmPassword":
        setConfirmUserPassword(userValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: userEmail,
      confirmEmail: confirmUserEmail,
      password: userPassword,
      confirmPassword: confirmUserPassword,
    });
  }

  function clearInput() {
    setUserEmail("");
    setUserPassword("");
    setConfirmUserEmail("");
    setConfirmUserPassword("");
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Input
            label="Email Address"
            onUpdateValue={updateUserInput.bind(this, "email")}
            value={userEmail}
            keyboardType="email-address"
            isInvalid={emailIsInvalid}
          />
          {!isLogin && (
            <Input
              label="Confirm Email Address"
              onUpdateValue={updateUserInput.bind(this, "confirmEmail")}
              value={confirmUserEmail}
              keyboardType="email-address"
              isInvalid={emailDontMatch}
            />
          )}
          <Input
            isInvalid={passwordIsInvalid}
            onUpdateValue={updateUserInput.bind(this, "password")}
            label="Password"
            secure
            value={userPassword}
          />
          {!isLogin && (
            <Input
              label={"Confirm Password"}
              value={confirmUserPassword}
              onUpdateValue={updateUserInput.bind(this, "confirmPassword")}
              secure
              isInvalid={passwordDontMatch}
            />
          )}
        </View>
        <TouchableOpacity
          onPress={submitHandler}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>
            {isLogin ? "Log In" : "Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={clearInput}>
        <Ionicons
          name="remove-circle-outline"
          size={24}
          color={COLORS.primaryOrangeHex}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
  },
  form: {
    width: "95%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
  },
  buttonContainer: {
    marginTop: 12,
    width: "50%",
    alignItems: "center",
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "medium",
    fontSize: FONTSIZE.size_16,
    padding: 4,
  },
});
