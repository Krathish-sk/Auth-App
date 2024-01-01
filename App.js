import { StatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS } from "./constants/theme";

const Stack = createNativeStackNavigator();

function Navigation() {
  return <NavigationContainer></NavigationContainer>;
}

export default function App() {
  return (
    <>
      <StatusBar style="Light" backgroundColor={COLORS.primaryBlackHex} />
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
