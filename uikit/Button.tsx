import React from 'react'
import styled from 'styled-components/native'

interface ButtonProps {
  title: string
  onPress: Function
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.TouchableOpacity`
  margin: 0 auto;
  width: 90%;
  height: 45px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background-color: ${({ theme }) => theme.colors.ui.blue};
`

const ButtonText = styled.Text`
  margin: 0 auto;
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight.header1};
  font-size: ${({ theme }) => theme.typeScale.header3};
  color: ${({ theme }) => theme.colors.system.white};
`
