import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Posts from '../screens/Posts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPostsScreen from '../screens/NewPost';
import PostsScreen from '../screens/Posts';
import { Button } from '../components/Button';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <>
      <NavigationContainer>
        {/* {hideSplashScreen ? ( */}
        <Stack.Navigator
          initialRouteName='Posts'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Posts' component={PostsScreen} />
          <Stack.Screen name='NewPost' component={NewPostsScreen} />
        </Stack.Navigator>
        {/* ) : null} */}
      </NavigationContainer>
    </>
  );
};
