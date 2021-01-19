import React from 'react';
import styled from 'styled-components/native';

type TextInputProps = {
  width: any;
  placeholder: string;
  keyboardType: string;
};

export default function TextInputFD({
  width,
  placeholder,
  keyboardType,
}: TextInputProps) {
  return (
    <Input
      width={width}
      placeholder={placeholder}
      keyboardType={keyboardType}></Input>
  );
}

const Input = styled.TextInput`
  padding-top: 13px;
  padding-bottom: 13px;
  width: ${({width}) => (width == 'full' ? '95%' : '50%')};
  height: 48px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(100, 3, 23, 0.2);

  font-size: ${({theme}) => theme.typeScale.textInput};
  line-height: ${({theme}) => theme.lineHeight.textInput};
`;
