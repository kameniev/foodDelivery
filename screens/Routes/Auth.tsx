import React from 'react'
import styled from 'styled-components/native'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import TextInputFD from 'uikit/TextInputFD'
import ButtonFD from 'uikit/ButtonFD'

export default function Auth() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Logo>ЛОГО</Logo>
        <InputsContainer>
          <TextInputFD
            width={'full'}
            placeholder={'Ваш номер телефона'}
            keyboardType={'phone-pad'}
          ></TextInputFD>
          <InputWrapper>
            <TextInputFD
              width={'half'}
              placeholder={'Введите код из смс'}
              keyboardType={'phone-pad'}
            ></TextInputFD>
          </InputWrapper>
        </InputsContainer>
        <ButtonContainer>
          <ButtonFD title={'Отправить'} func={() => console.log('Success!')} />
        </ButtonContainer>
      </View>
    </TouchableWithoutFeedback>
  )
}

const Logo = styled.Text`
  margin-top: 32%;
  text-align: center;
  color: ${({ theme }) => theme.colors.ui.blue};
  font-size: ${({ theme }) => theme.typeScale.authLogo};
  line-height: ${({ theme }) => theme.lineHeight.authLogo};
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
