import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { authenticate } from "../util/Auth";

export default function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const response = await authenticate(
        "signInWithPassword",
        email,
        password
      );
    } catch (error) {
      Alert.alert(
        "Invalid Credentials",
        "Please check your email or password !!"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Logging in ...."} />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}
