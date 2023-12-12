import { ActivityIndicator } from 'react-native';
import { LoaderWrapper } from './styles';
import { Color } from 'src/GlobalStyles';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ActivityIndicator size="large" color={Color.colorBlueviolet} />
    </LoaderWrapper>
  );
};
