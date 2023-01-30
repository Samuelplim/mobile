import * as React from "react";
import { useEffect, useCallback } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { Routes } from "./src/routes";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayout}>
      <NavigationContainer>
        <StatusBar barStyle={"dark-content"} backgroundColor="#FFF" />
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
