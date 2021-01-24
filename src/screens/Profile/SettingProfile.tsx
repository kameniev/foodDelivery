import React from 'react'
import styled from 'styled-components/native'
import SettingTextInput from 'uikit/SettingTextInput'

function SettingProfile() {
  return (
    <Container>
      <Avatar source={require('assets/images/profileAvatar.jpg')} />
      <TextInputContainer>
        <SettingTextInput
          value="Александр"
          description="Имя"
          security={false}
        />
        <SettingTextInput
          value="+7 958 581 54 20"
          description="Мобильный"
          keyboardType="phone-pad"
          security={false}
        />
        <SettingTextInput
          value="alex@mail.ru"
          description="E-mail"
          keyboardType="email-address"
          security={false}
        />
        <SettingTextInput
          value="qwerty12345"
          description="Пароль"
          security={true}
        />
      </TextInputContainer>
    </Container>
  )
}

export default SettingProfile

const Container = styled.SafeAreaView``

const Avatar = styled.Image`
  margin: 0 auto;
  margin-top: 20px;
  width: 104px;
  height: 104px;
  border-radius: 50px;
`

const TextInputContainer = styled.View`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.ui.white};
  width: 100%;
  padding-top: 10px;
  padding-bottom: 40px;
`
