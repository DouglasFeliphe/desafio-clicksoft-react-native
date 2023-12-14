import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePostScreen from '@screens/CreatePost';
import PostsScreen from '@screens/Posts';
import { UserProfileScreen } from '@screens/UserProfile';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { SCREENS } from 'src/shared/constants';
import { palette } from 'src/shared/theme/themes';

const Tab = createBottomTabNavigator();

const renderTabIcon = (
  route: { name: string },
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName = '';
  switch (route.name) {
    case SCREENS.POSTS:
      iconName = focused ? 'home' : 'home-outline';
      break;
    case SCREENS.CREATE_POST:
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

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
        tabBarActiveTintColor: '#333',
        tabBarInactiveTintColor: palette.primary,
        tabBarStyle: {
          backgroundColor: palette.white,
          borderTopLeftRadius: 44,
          borderTopRightRadius: 44,
          height: 90,
          paddingTop: 22,
          paddingBottom: 22,
        },
      })}
    >
      <Tab.Screen name={SCREENS.POSTS} component={PostsScreen} />
      <Tab.Screen
        name={SCREENS.CREATE_POST}
        options={{
          tabBarLabel: 'New Post',
          tabBarShowLabel: true,
        }}
        component={CreatePostScreen}
      />

      <Tab.Screen
        name={SCREENS.USER_PROFILE}
        options={{
          tabBarLabel: 'My Profile',
          tabBarShowLabel: true,
        }}
        component={UserProfileScreen}
      />
    </Tab.Navigator>
  );
};
