import { View, Text, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, useDispatch } from "react-redux";
import { Sizes } from '../constants/stylesConst';

import FontsScreen from './FontsScreen';
import FavoritesFontsScreen from "./FavoritesFontsScreen";
import SketchesGroupList from "../components/sketchesElements/SketchesGroupList";
import { setCurrentContent } from "../store/content";

import { appStyles } from "../styles/appStyles";

const Tab = createMaterialTopTabNavigator();

const MyNavigationBar = ({ state, descriptors, navigation}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const appIsPremium = useSelector(state => state.content.appIsPremium);

  const dispatch = useDispatch();

  const renderMyNavigationBarTab = state.routes.map((route, index) => {
        if (appIsPremium || !appIsPremium && route.name !== "Favorites") {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            dispatch(setCurrentContent({currentContent: route.name === "Favorites" ? "Fonts" : route.name}));

            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <View
              key={route.key}
              style={[
                appStyles.contentSwitcherOuterBtn,
                {
                  borderTopLeftRadius: route.name === "All Fonts" && !appIsPremium
                    || route.name === "Favorites" && appIsPremium ? Sizes.mainBtnRadius : 0,
                  borderBottomLeftRadius: route.name === "All Fonts" && !appIsPremium
                    || route.name === "Favorites" && appIsPremium ? Sizes.mainBtnRadius : 0,
                  borderTopRightRadius: route.name === "Sketches" ? Sizes.mainBtnRadius : 0,
                  borderBottomRightRadius: route.name === "Sketches" ? Sizes.mainBtnRadius : 0,
                  overflow: 'hidden'
                }
              ]}
            >
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[appStyles.contentSwitcherInnerBtn, {backgroundColor: isFocused ? colorsStyle.btnActive : colorsStyle.btn1}]}
                android_ripple={{color: colorsStyle.btnActive}}
              >
                <Text style={[appStyles.contentSwitcherBtnLabel, {color: colorsStyle.text}]}>
                  {label}
                </Text>
              </Pressable>
            </View>
          );
        }
      });

  return (
    <View style={appStyles.contentSwitcherBtns}>
      {renderMyNavigationBarTab}
    </View>
  )
};


const ContentNavigator = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <MyNavigationBar {...props} />}
        initialRouteName="Fonts"
        screenOptions={{animationEnabled: true}}

      >
        <Tab.Screen
          name="Favorites"
          component={FavoritesFontsScreen}
          options={{ tabBarLabel: 'Favorites' }}
        />
        <Tab.Screen
          name="Fonts"
          component={FontsScreen}
          options={{ tabBarLabel: 'All Fonts' }}
        />
        <Tab.Screen
          name="Sketches"
          component={SketchesGroupList}
          options={{ tabBarLabel: 'Sketches' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default ContentNavigator;
