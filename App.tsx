import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppNavigation from './src/navigtions';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/custom_comp/CustomToast";


// SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Inter: require("./assets/fonts/Inter-Regular.ttf"),
   
  // });
  // useEffect(() => {
  //   const loadFonts = async () => {
  //     if (fontsLoaded) {
  //       await SplashScreen.hideAsync();
  //     }
  //   };

  //   loadFonts();
  // }, [fontsLoaded]);


  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView className=" flex-1">
          <AppNavigation />
          <Toast config={toastConfig} />
          <StatusBar style="auto" />
        </SafeAreaView>
      </QueryClientProvider>
    </>
  );
}

// import { View, Text } from 'react-native'
// import React from 'react'
// import { Screen } from './src/Screen'




// const App = () => {
//   return (
//     <Screen />
//   )
// }

// export default App
