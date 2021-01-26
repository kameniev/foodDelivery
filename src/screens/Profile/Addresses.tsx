import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import AddressCard from 'components/Profile/AddressCard'
import { ProfileScreenNavigationProp } from 'screens/types'
import Button from 'uikit/Button'

const ProfileAddressesScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  return (
    <Container>
      <AddressCardsContainer>
        <AddressCard
          title={'Москва, \n пер. Филипповский, 4с1, кв.24'}
          focused={true}
        />
        <AddressCard
          title={'Москва, \n ул. Большая Якимонка 6, офис 5'}
          focused={false}
        />
      </AddressCardsContainer>
      <AddAddressWrapper>
        <Button
          title={'Добавить адрес'}
          onPress={() => navigation.navigate('AddAddress')}
        />
      </AddAddressWrapper>
    </Container>
  )
}

export default ProfileAddressesScreen

const Container = styled.SafeAreaView``

const AddressCardsContainer = styled.ScrollView`
  height: 80%;
`

const AddAddressWrapper = styled.View`
  justify-content: center;
  width: 100%;
  height: 20%;
  background: ${({ theme }) => theme.colors.ui.white};
`
