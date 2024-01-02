import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZE } from "../constants/theme";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [message, setMessage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  async function getMessage() {
    const data = await axios.get(
      `https://expense-react-native-362f4-default-rtdb.firebaseio.com/message.json?auth=${token}`
    );
    setMessage(data.data);
  }

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>You authenticated successfully!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: FONTSIZE.size_20,
    fontFamily: "bold",
    marginBottom: 8,
    color: COLORS.primaryOrangeHex,
  },
  text: {
    fontSize: FONTSIZE.size_16,
    fontFamily: "medium",
    color: COLORS.primaryWhiteHex,
  },
});
