import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SCREENS } from '@shared/constants';
import { Alert } from 'react-native';

type AlertTypes = 'Confirmation' | 'Success' | 'Error';

export type ScreenType = keyof typeof SCREENS | null;

// Updated useAlert hook
export const useAlert = (
  alertType: AlertTypes,
  message: string,
  navigateTo?: ScreenType,
) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const showAlert = (customMessage?: string) => {
    Alert.alert(
      alertType,
      message || customMessage,
      [
        alertType === 'Confirmation'
          ? {
              text: 'Cancel',
              style: 'cancel',
            }
          : {},
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
      ],
      { cancelable: false },
    );
  };

  return showAlert;
};
