import React from 'react'
import styled from 'styled-components/native'
import AddressInput from 'uikit/AddressInput'
import TextArea from 'uikit/TextArea'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from 'uikit/Button'
import Select from 'uikit/Select'

function AddAddress() {
  return (
    <Container>
      <KeyboardAwareScrollView>
        <AddressContainer>
          <DescriptionText>Адрес</DescriptionText>
          <AddressInput description="Город" />
          <AddressInput description="Улица" />
          <AddressInput description="Номер дома" />
          <AddressInput description="Номер квартиры/офис" />
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
          <TextArea multiline={true} numberOfLines={4} />
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

export default AddAddress

const Container = styled.SafeAreaView`
  height: 100%;
`

const AddressContainer = styled.View`
  width: 100%;
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
  width: 100%;
  margin-top: 15px;
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.ui.white};
`

const CommentContainer = styled.View`
  width: 100%;
  margin-top: 15px;
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.ui.white};
`

const ButtonWrapper = styled.View`
  margin-top: 15px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.ui.white};
`
