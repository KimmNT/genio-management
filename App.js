import React, { useEffect } from "react";
import SplashScreen from "./screens/SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/components/HomeScreen";

const App = () => {
  const [isSplashVisible, setSplashVisible] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000); // Set the time you want the splash screen to be visible
  }, []);

  return (
    <SafeAreaProvider>
      {isSplashVisible ? <SplashScreen /> : <HomeScreen />}
    </SafeAreaProvider>
  );
};

export default App;
