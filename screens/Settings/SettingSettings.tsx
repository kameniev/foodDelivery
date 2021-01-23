import React from 'react'
import styled from 'styled-components/native'
import SettingCard from 'components/settings/SettingCard'
import { useNavigation } from '@react-navigation/native'

function SettingSettings() {
  const navigation = useNavigation()
  return (
    <Container>
      <SettingCard
        title={'Адреса доставки'}
        iconName={'Pointer'}
        onPress={() => navigation.navigate('SettingAddresses')}
      />
    </Container>
  )
}

export default SettingSettings

const Container = styled.SafeAreaView``
