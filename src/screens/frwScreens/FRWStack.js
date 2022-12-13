import { createStackNavigator } from '@react-navigation/stack';

import { TransitionSpecs } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';

import FrwScreen from './FrwScreen';
import FrwBuyPremiumScreen from './FrwBuyPremiumScreen';

import { FRWText } from '../../constants/appConst';

const Stack = createStackNavigator();

const FirstScreen = ({navigation}) => {
  return (
    <FrwScreen
      text={FRWText.firstScreenLabel}
      btnLabel={FRWText.continueBtn}
      onPress={() => navigation.navigate('SecondScreen')}
      onPressClose={() => navigation.navigate("MainPage")}
      screen={'FirstScreen'}
    />
  )
};

const SecondScreen = ({navigation}) => {
  return (
    <FrwScreen
      text={FRWText.secondScreenLabel}
      btnLabel={FRWText.continueBtn}
      onPress={() => navigation.navigate('ThirdScreen')}
      onPressClose={() => navigation.navigate("MainPage")}
      screen={'SecondScreen'}
    />
  )
};

const ThirdScreen = ({navigation}) => {
  return (
    <FrwScreen
      text={FRWText.thirdScreenLabel}
      btnLabel={FRWText.startBtn}
      onPress={() => navigation.navigate('FrwPremium')}
      onPressClose={() => navigation.navigate("MainPage")}
      screen={'ThirdScreen'}
    />
  )
};

const FRWStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        presentation: 'modal',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyle: { flex: 1 }
      }}
    >
      <Stack.Screen name="FirstScreen" component={FirstScreen}
        // options={{
        //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // }}
      />
      <Stack.Screen name="SecondScreen" component={SecondScreen}
        // options={{
        //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // }}
      />
      <Stack.Screen name="ThirdScreen" component={ThirdScreen}
        // options={{
        //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // }}
      />
      <Stack.Screen name="FrwPremium" component={FrwBuyPremiumScreen}
        // options={{
        //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // }}
      />
    </Stack.Navigator>
  )
};
export default FRWStack;
