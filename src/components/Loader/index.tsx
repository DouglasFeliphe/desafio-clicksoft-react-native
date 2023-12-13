import React from 'react';

import * as S from './styles';

interface LoaderProps {
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <S.LoadingOverlay>
      <S.LoaderComponent />
      {text ?? text}
      {/* You can add a loading message or animation inside the loader */}
    </S.LoadingOverlay>
  );
};
