import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import SettingCard from 'components/settings/SettingCard'

function Profile() {
  const navigation = useNavigation()

  return (
    <Container>
      <SettingCard
        iconName="SettingProfile"
        title="Личные данные"
        onPress={() => navigation.navigate('SettingProfile')}
      />
      <SettingCard
        iconName="SettingSettings"
        title="Настройки"
        onPress={() => navigation.navigate('SettingSettings')}
      />
      <SettingCard
        iconName="SettingList"
        title="Список заказов"
        onPress={() => console.log('Success')}
      />
      <SettingCard
        iconName="SettingFav"
        title="Избранное"
        onPress={() => console.log('Success')}
      />
      <SettingCard
        iconName="SettingInfo"
        title="Справка"
        onPress={() => navigation.navigate('SettingInfo')}
      />
    </Container>
  )
}

export default Profile

const Container = styled.SafeAreaView``
