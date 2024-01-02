import { useState, useContext } from "react";
import { Alert } from "react-native";

import { AuthContext } from "../store/auth-context";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { authenticate } from "../util/Auth";

export default function SignupScreen() {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await authenticate("signUp", email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not register, please try again later"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating User..."} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}
