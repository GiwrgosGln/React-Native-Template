import { StatusBar } from "expo-status-bar";
import { useColorScheme, Text } from "react-native";
import { TamaguiProvider, Theme, YStack } from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";
import NativeWind from "./App/components/NativeWind";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <YStack f={1} backgroundColor={"$backgroundSoft"}>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
