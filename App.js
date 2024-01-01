import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, SignupScreen, WelcomeSecreen } from "./screens";
import { COLORS } from "./constants/theme";

const Stack = createNativeStackNavigator();

const AuthStack = function () {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.primaryBlackHex },
        headerStyle: { backgroundColor: COLORS.primaryGreyHex },
        headerTintColor: COLORS.primaryWhiteHex,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primaryGreyHex },
        headerTintColor: COLORS.primaryWhiteHex,
        contentStyle: { backgroundColor: COLORS.primaryBlackHex },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeSecreen} />
    </Stack.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={COLORS.primaryBlackHex}
      />
      <Navigation />
    </>
  );
}
