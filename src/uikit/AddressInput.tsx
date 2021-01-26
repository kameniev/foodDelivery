import React from 'react'
import styled from 'styled-components/native'

interface SettingTextInputProps {
  description: string
  security?: boolean
  keyboardType?: undefined
}

const SettingTextInput = ({
  description,
  security,
  keyboardType,
}: SettingTextInputProps) => {
  return (
    <InputContainer>
      <InputText>{description}</InputText>
      <SettingInput
        returnKeyType="done"
        secureTextEntry={security}
        keyboardType={keyboardType}
      />
    </InputContainer>
  )
}

export default SettingTextInput

const InputContainer = styled.View`
  margin: 10px auto 0;
  width: 90%;
`

const InputText = styled.Text`
  font-size: ${({ theme }) => theme.typeScale.header5};
  line-height: ${({ theme }) => theme.lineHeight.header7};
  color: ${({ theme }) => theme.colors.ui.lightGray};
`

const SettingInput = styled.TextInput`
  height: 25px;
  font-size: ${({ theme }) => theme.typeScale.header3};
  line-height: ${({ theme }) => theme.lineHeight.header5};
  font-weight: 600;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.12);
`