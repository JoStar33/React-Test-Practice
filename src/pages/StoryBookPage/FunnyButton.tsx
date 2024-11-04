import React from 'react';
import { FunnyButtonContainer } from './FunnyButton.style';

export type propsType = {
  color: string;
  name: string;
  width: number;
  height: number;
};

const FunnyButton = ({ name, color, width, height }: propsType) => {
  return (
    <FunnyButtonContainer color={color} width={width} height={height}>
      {name}
    </FunnyButtonContainer>
  );
};

export default FunnyButton;
