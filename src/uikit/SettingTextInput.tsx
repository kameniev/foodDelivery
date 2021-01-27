import React from 'react'
import { KeyboardType } from 'react-native'
import styled from 'styled-components/native'

interface SettingTextInputProps {
  description: string
  security?: boolean
  keyboardType?: KeyboardType
  value: string
  onChange: (newValue: string) => void
}

const SettingTextInput = ({
  description,
  security,
  keyboardType,
  value,
  onChange,
}: SettingTextInputProps) => {
  return (
    <InputContainer>
      <InputText>{description}</InputText>
      <SettingInput
        returnKeyType="done"
        defaultValue={value}
        secureTextEntry={security}
        keyboardType={keyboardType}
      />
    </InputContainer>
  )
}

export default SettingTextInput

const InputContainer = styled.View``

const InputText = styled.Text`
  font-size: ${({ theme }) => theme.typeScale.header5};
  line-height: ${({ theme }) => theme.lineHeight.header7};
  color: ${({ theme }) => theme.colors.ui.lightGray};
`

const SettingInput = styled.TextInput`
  height: 40px;
  font-size: ${({ theme }) => theme.typeScale.header3};
  line-height: ${({ theme }) => theme.lineHeight.header5};
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.12);
`
