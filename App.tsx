import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";

import { Groups } from "@screens/groups";

import theme from "src/theme";
import { ActivityIndicator } from "react-native";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

   return (
     <ThemeProvider theme={theme}>
        { !fontsLoaded ? <Groups /> : <Loading /> }
     </ThemeProvider>
   );
}