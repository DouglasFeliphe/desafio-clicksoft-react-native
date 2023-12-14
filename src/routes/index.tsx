import { TabNavigator } from '@components/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditPostScreen from '@screens/EditPost';
import { SCREENS } from '@shared/constants';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      {/* {hideSplashScreen ? ( */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">{TabNavigator}</Stack.Screen>
        <Stack.Screen name={SCREENS.EDIT_POST} component={EditPostScreen} />
      </Stack.Navigator>
      {/* ) : null} */}
    </NavigationContainer>
  );
};
