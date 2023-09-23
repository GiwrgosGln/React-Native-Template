import { StatusBar } from "expo-status-bar";
import { useColorScheme, Text } from "react-native";
import { Paragraph, XStack, TamaguiProvider, Theme, YStack, Button } from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";

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
        <YStack
          f={1}
          jc='center'
          ai="center"
          backgroundColor={"$backgroundSoft"}>
          <StatusBar style="auto" />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}