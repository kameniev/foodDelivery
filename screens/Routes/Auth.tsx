import React from 'react'
import styled from 'styled-components/native'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import TextInput from 'uikit/TextInput'
import Button from 'uikit/Button'

export default function Auth() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper>
        <Logo>ЛОГО</Logo>
        <InputsContainer>
          <TextInput
            width={'full'}
            placeholder={'Ваш номер телефона'}
            keyboardType={'phone-pad'}
          />
          <InputWrapper>
            <TextInput
              width={'half'}
              placeholder={'Введите код из смс'}
              keyboardType={'phone-pad'}
            />
          </InputWrapper>
        </InputsContainer>
        <ButtonContainer>
          <Button title={'Отправить'} onPress={() => console.log('Success!')} />
        </ButtonContainer>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}

const Wrapper = styled.View``

const Logo = styled.Text`
  margin-top: 32%;
  text-align: center;
  color: ${({ theme }) => theme.colors.ui.blue};
  font-size: ${({ theme }) => theme.typeScale.header1};
  line-height: ${({ theme }) => theme.lineHeight.header1};
`

const InputsContainer = styled.View`
  margin-top: 91px;
  margin-left: 15px;
`

const InputWrapper = styled.View`
  margin-top: 17px;
`

const ButtonContainer = styled.View`
  margin-top: 60%;
`
