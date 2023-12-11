import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPostsScreen from '@screens/NewPost';
import PostsScreen from '@screens/Posts';
import { UserProfileScreen } from '@screens/UserProfile';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { SCREENS } from 'src/shared/constants';
import { palette } from 'src/shared/theme/themes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabIcon = (
  route: { name: string },
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName = 'add';
  switch (route.name) {
    case SCREENS.POSTS:
      iconName = focused ? 'home' : 'home-outline';
      break;
    case SCREENS.NEW_POST:
      iconName = focused ? 'add' : 'add-outline';
      break;
    case SCREENS.USER_PROFILE:
      iconName = focused ? 'person' : 'person-outline';
      break;
    default:
      iconName = focused ? 'home' : 'home-outline';
      break;
  }

  return (
    <Icon name={iconName} type={IconType.Ionicons} size={size} color={color} />
  );
};

const renderTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: palette.white,
        },
      })}
    >
      <Tab.Screen name={SCREENS.POSTS} component={PostsScreen} />
      <Tab.Screen name={SCREENS.NEW_POST} component={NewPostsScreen} />
      <Tab.Screen name={SCREENS.USER_PROFILE} component={UserProfileScreen} />
    </Tab.Navigator>
  );
};

export const Routes = () => {
  return (
    <NavigationContainer>
      {/* {hideSplashScreen ? ( */}
      <Stack.Navigator
        // initialRouteName="Posts"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Posts" component={renderTabNavigation} />
      </Stack.Navigator>
      {/* ) : null} */}
    </NavigationContainer>
  );
};
