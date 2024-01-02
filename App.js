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
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthContextProvider, { AuthContext } from "./store/auth-context";
import IconButton from "./components/UI/IconButton";
import { LoginScreen, SignupScreen, WelcomeSecreen } from "./screens";
import { COLORS, FONTSIZE } from "./constants/theme";
import { useContext, useEffect, useState } from "react";

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
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primaryGreyHex },
        headerTintColor: COLORS.primaryWhiteHex,
        contentStyle: { backgroundColor: COLORS.primaryBlackHex },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeSecreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authCtx.token ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isLoading, setIsLoading] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsLoading(false);
    }
    fetchToken();
  }, []);
  if (isLoading) {
    return (
      <View
        style={{ backgroundColor: COLORS.primaryDarkGreyHex, flex: 1 }}
      ></View>
    );
  }
  return <Navigation />;
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
    <AuthContextProvider>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={COLORS.primaryBlackHex}
      />
      <Root />
    </AuthContextProvider>
  );
}
