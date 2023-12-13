import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SCREENS } from '@shared/constants';
import { Alert } from 'react-native';

type AlertTypes = 'Success';

export type ScreenType = keyof typeof SCREENS;

// Updated useAlert hook
export const useAlert = (
  alertType: AlertTypes,
  message: string,
  navigateTo?: ScreenType,
) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const showAlert = () => {
    Alert.alert(alertType, message, [
      {
        text: 'OK',
        onPress: () => {
          if (navigateTo) {
            const validScreen: ScreenType = SCREENS[navigateTo] as ScreenType;

            if (validScreen) {
              navigation.navigate(validScreen);
            }
          }
        },
      },
    ]);
  };

  return showAlert;
};
