import { TabNavigator } from '@components/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      {/* {hideSplashScreen ? ( */}
      <Stack.Navigator
        // initialRouteName="Posts"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home">{TabNavigator}</Stack.Screen>
      </Stack.Navigator>
      {/* ) : null} */}
    </NavigationContainer>
  );
};
