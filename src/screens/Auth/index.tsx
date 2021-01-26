import React from 'react'
import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInput from 'uikit/TextInput'
import Button from 'uikit/Button'

export default function Auth() {
  return (
    <Wrapper>
      <KeyboardAwareScrollView>
        <Logo>ЛОГО</Logo>
        <InputsContainer>
          <TextInput
            width="full"
            placeholder="Ваш номер телефона"
            keyboardType="phone-pad"
            returnKeyType="done"
          />
          <InputWrapper>
            <TextInput
              width="half"
              placeholder="Введите код из смс"
              keyboardType="phone-pad"
              returnKeyType="done"
            />
          </InputWrapper>
        </InputsContainer>
        <ButtonContainer>
          <Button title={'Отправить'} onPress={() => console.log('Success!')} />
        </ButtonContainer>
      </KeyboardAwareScrollView>
    </Wrapper>
  )
}

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

const InputWrapper = styled.View`
  margin-top: 17px;
`

const ButtonContainer = styled.View`
  margin-top: 60%;
`