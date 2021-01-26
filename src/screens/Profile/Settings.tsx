import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import SettingCard from 'components/Profile/SettingCard'
import { Pointer } from 'uikit/Icons'
import { ProfileScreenNavigationProp } from 'screens/types'

const ProfileSettingsScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  return (
    <Container>
      <SettingCard
        title={'Адреса доставки'}
        Icon={Pointer}
        onPress={() => navigation.navigate('SettingAddresses')}
      />
    </Container>
  )
}

export default ProfileSettingsScreen

const Container = styled.SafeAreaView``
