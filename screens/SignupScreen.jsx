import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { authenticate } from "../util/Auth";

export default function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const response = await authenticate("signUp", email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not register, please try again later"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating User..."} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}
