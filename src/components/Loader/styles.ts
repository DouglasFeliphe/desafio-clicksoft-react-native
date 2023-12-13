import { palette } from 'src/shared/theme/themes';
import styled from 'styled-components/native';

export const LoadingOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Opaque white background */
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's above other content */
`;

export const LoaderComponent = styled.ActivityIndicator.attrs({
  size: 'large',
  color: palette.primary,
})``;
