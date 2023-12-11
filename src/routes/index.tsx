import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPostsScreen from '@screens/NewPost';
import PostsScreen from '@screens/Posts';
import { UserProfileScreen } from '@screens/UserProfile';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      {/* {hideSplashScreen ? ( */}
      <Stack.Navigator
        initialRouteName="Posts"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="NewPost" component={NewPostsScreen} />
      </Stack.Navigator>
      {/* ) : null} */}
    </NavigationContainer>
  );
};
