import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Labrada_400Regular,
  Labrada_500Medium,
  Labrada_600SemiBold,
  Labrada_700Bold,
} from "@expo-google-fonts/labrada";

import { LoginScreen, SignupScreen, WelcomeSecreen } from "./screens";
import { COLORS, FONTSIZE } from "./constants/theme";

const Stack = createNativeStackNavigator();

const AuthStack = function () {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.primaryBlackHex },
        headerStyle: {
          backgroundColor: COLORS.primaryGreyHex,
        },
        headerTitleStyle: {
          fontFamily: "semiBold",
          fontSize: FONTSIZE.size_20,
        },
        headerTintColor: COLORS.primaryWhiteHex,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: "Login",
        }}
      />
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
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    regular: Labrada_400Regular,
    medium: Labrada_500Medium,
    semiBold: Labrada_600SemiBold,
    bold: Labrada_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ backgroundColor: COLORS.primaryGreyHex, flex: 1 }}></View>
    );
  }

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
