import React from 'react';
import styled from 'styled-components/native';

type ButtonProps = {
  title: string;
  func: Function;
};

export default function ButtonFD({title, func}: ButtonProps) {
  return (
    <Button onPress={func}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
}

const Button = styled.TouchableOpacity`
  margin: 0 auto;
  width: 90%;
  height: 45px;
  border-radius: ${({theme}) => theme.borderRadius.button};
  background-color: ${({theme}) => theme.colors.ui.blue};
`;

const ButtonText = styled.Text`
  margin: 0 auto;
  text-align: center;
  line-height: ${({theme}) => theme.lineHeight.buttonText};
  font-size: ${({theme}) => theme.typeScale.buttonText};
  color: ${({theme}) => theme.colors.system.white};
`;
