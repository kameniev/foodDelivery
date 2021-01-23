import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Icon from 'uikit/Icon'

interface SettingCardProps {
  title: string
  focused: boolean
}

const AddressCard = ({ title, focused }: SettingCardProps) => {
  let test = false
  return (
    <TouchableOpacity onPress={() => console.log('test')}>
      <CardContainer focused={focused}>
        <IconWrapper>
          <Icon name={'Pointer'} width={25} />
        </IconWrapper>
        <CardText>{title}</CardText>
      </CardContainer>
    </TouchableOpacity>
  )
}

export default AddressCard

const CardContainer = styled.View`
  margin: 0 auto;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.little};
  border-color: ${({ theme }) => theme.colors.ui.blue};
  border-width: ${({ focused }) => (focused ? '1px' : '0px')};
  box-shadow: ${({ theme }) => theme.shadow.basic};
  background: #ffffff;
  width: 90%;
  height: 75px;
`
const IconWrapper = styled.View`
  margin-left: 25px;
`

const CardText = styled.Text`
  margin-left: 22px;
  font-size: ${({ theme }) => theme.typeScale.header3};
  line-height: ${({ theme }) => theme.lineHeight.header5};
  font-weight: 600;
  width: 75%;
`
