import React from 'react'
import styled from 'styled-components/native'
import SettingCard from 'components/Profile/SettingCard'
import { useNavigation } from '@react-navigation/native'
import { List } from 'uikit/Icons'
import { ProfileScreenNavigationProp } from 'screens/types'

const ProfileInfoScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  return (
    <Container>
      <SettingCard
        title={'Работа у нас'}
        Icon={List}
        onPress={() => console.log('Success!')}
      />
      <SettingCard
        title={'Новости'}
        Icon={List}
        onPress={() => console.log('Success!')}
      />
      <SettingCard
        title={'О приложении'}
        Icon={List}
        onPress={() => console.log('Success!')}
      />
      <SettingCard
        title={'О нас'}
        Icon={List}
        onPress={() => navigation.navigate('AboutUs')}
      />
    </Container>
  )
}

export default ProfileInfoScreen

const Container = styled.SafeAreaView``
