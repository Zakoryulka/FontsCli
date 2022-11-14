import { SafeAreaView, StatusBar } from "react-native";
import { useSelector } from "react-redux";

import MainScreen from './MainScreen';

import { appStyles } from "../styles/appStyles";

const MainView = () => {
  const theme = useSelector(state => state.colorTheme.theme);
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

   return (
      <SafeAreaView
        style={[
          appStyles.mainView,
          {
            backgroundColor: colorsStyle.primaryBg,
            paddingTop: StatusBar.currentHeight
          }
        ]}
        // onLayout={onLayoutRootView}
      >
        <StatusBar
          translucent
          backgroundColor={colorsStyle.primaryBg}
          barStyle={theme === "light" ? "dark-content" : "light-content"}
        />

        <MainScreen />

      </SafeAreaView>
   );
 }

export default MainView;
