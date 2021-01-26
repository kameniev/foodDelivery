import React from 'react'
import styled from 'styled-components/native'
import SettingTextInput from 'uikit/SettingTextInput'

const ProfileUserScreen = () => {
  return (
    <Container>
      <Avatar source={require('assets/images/profile_avatar.jpg')} />
      <TextInputContainer>
        <SettingTextInput
          value="Александр"
          description="Имя"
          security={false}
          onChange={() => {
            console.log('')
          }}
        />
        <SettingTextInput
          value="+7 958 581 54 20"
          description="Мобильный"
          keyboardType="phone-pad"
          security={false}
          onChange={() => {
            console.log('')
          }}
        />
        <SettingTextInput
          value="alex@mail.ru"
          description="E-mail"
          keyboardType="email-address"
          security={false}
          onChange={() => {
            console.log('')
          }}
        />
        <SettingTextInput
          value="qwerty12345"
          description="Пароль"
          security={true}
          onChange={() => {
            console.log('')
          }}
        />
      </TextInputContainer>
    </Container>
  )
}

export default ProfileUserScreen

const Container = styled.SafeAreaView``

const Avatar = styled.Image`
  margin: 20px auto 0;
  width: 104px;
  height: 104px;
  border-radius: 50px;
`

const TextInputContainer = styled.View`
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.ui.white};
`
