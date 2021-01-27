import React from 'react'
import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInput from 'uikit/TextInput'
import Button from 'uikit/Button'

const Auth = () => {
  return (
    <Wrapper>
      <KeyboardAwareScrollView>
        <Logo>ЛОГО</Logo>
        <InputsContainer>
          <FirstInputWrapper>
            <TextInput
              placeholder="Ваш номер телефона"
              keyboardType="phone-pad"
              returnKeyType="done"
            />
          </FirstInputWrapper>
          <SecondInputWrapper>
            <TextInput
              placeholder="Введите код из смс"
              keyboardType="phone-pad"
              returnKeyType="done"
            />
          </SecondInputWrapper>
        </InputsContainer>
        <ButtonContainer>
          <Button title={'Отправить'} onPress={() => console.log('Success!')} />
        </ButtonContainer>
      </KeyboardAwareScrollView>
    </Wrapper>
  )
}

export default Auth

const Wrapper = styled.View``

const Logo = styled.Text`
  margin-top: 32%;
  text-align: center;
  color: ${({ theme }) => theme.colors.ui.blue};
  font-size: ${({ theme }) => theme.typeScale.header2};
  line-height: ${({ theme }) => theme.lineHeight.header2};
`

const InputsContainer = styled.View`
  margin-top: 91px;
  margin-left: 15px;
`

const SecondInputWrapper = styled.View`
  margin-top: 17px;
  width: 50%;
`

const FirstInputWrapper = styled.View`
  width: 95%;
`

const ButtonContainer = styled.View`
  margin: 60% auto 0;
  width: 90%;
`
