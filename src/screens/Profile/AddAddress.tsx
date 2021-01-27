import React from 'react'
import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AddressInput from 'uikit/AddressInput'
import TextArea from 'uikit/TextArea'
import Button from 'uikit/Button'
import Select from 'uikit/Select'

const ProfileAddAddressScreen = () => {
  return (
    <Container>
      <KeyboardAwareScrollView>
        <AddressContainer>
          <DescriptionText>Адрес</DescriptionText>
          <AddressInputContainer>
            <AddressInput description="Город" />
          </AddressInputContainer>
          <AddressInputContainer>
            <AddressInput description="Улица" />
          </AddressInputContainer>
          <AddressInputContainer>
            <AddressInput description="Номер дома" />
          </AddressInputContainer>
          <AddressInputContainer>
            <AddressInput description="Номер квартиры/офис" />
          </AddressInputContainer>
        </AddressContainer>
        <DeliveryTypeContainer>
          <DescriptionText>Тип доставки</DescriptionText>
          <Select
            onChange={(newValue) => console.log(newValue)}
            options={[
              { label: 'К входу в здание', value: 'building' },
              { label: 'В квартиру', value: 'flat' },
              { label: 'Оставить на охране', value: 'leave' },
            ]}
          />
        </DeliveryTypeContainer>
        <CommentContainer>
          <DescriptionText>Комментарий к адресу доставки</DescriptionText>
          <TextAreaContainer>
            <TextArea multiline={true} numberOfLines={4} />
          </TextAreaContainer>
        </CommentContainer>
        <ButtonWrapper>
          <Button
            title="Добавить адрес"
            onPress={() => console.log('success!')}
          />
        </ButtonWrapper>
      </KeyboardAwareScrollView>
    </Container>
  )
}

export default ProfileAddAddressScreen

const Container = styled.SafeAreaView`
  flex: 1;
`

const AddressContainer = styled.View`
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.ui.white};
`

const DescriptionText = styled.Text`
  margin-top: 15px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.ui.blue};
  font-size: ${({ theme }) => theme.typeScale.header3};
  line-height: ${({ theme }) => theme.lineHeight.header4};
  font-weight: 600;
`

const DeliveryTypeContainer = styled.View`
  margin-top: 15px;
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.ui.white};
`

const CommentContainer = styled.View`
  margin-top: 15px;
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.ui.white};
`

const ButtonWrapper = styled.View`
  margin-top: 15px;
  padding: 10px 0 10px 0;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ui.white};
`

const AddressInputContainer = styled.View`
  margin-top: 10px;
  align-self: center;
  width: 90%;
`

const TextAreaContainer = styled.View`
  margin-top: 10px;
  align-self: center;
  width: 90%;
`
