import React from 'react'
import styled from 'styled-components/native'
import SettingCard from 'components/settings/SettingCard'
import { useNavigation } from '@react-navigation/native'

function SettingInfo() {
  const navigation = useNavigation()
  return (
    <Container>
      <SettingCard
        title={'Работа у нас'}
        iconName={'List'}
        onPress={() => console.log('Success!')}
      />
      <SettingCard
        title={'Новости'}
        iconName={'List'}
        onPress={() => console.log('Success!')}
      />
      <SettingCard
        title={'О приложении'}
        iconName={'List'}
        onPress={() => console.log('Success!')}
      />
      <SettingCard
        title={'О нас'}
        iconName={'List'}
        onPress={() => navigation.navigate('AboutUs')}
      />
    </Container>
  )
}

export default SettingInfo

const Container = styled.SafeAreaView``
