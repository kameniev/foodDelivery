import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { SvgProps } from 'react-native-svg'

interface SettingCardProps {
  title: string
  Icon: React.FC<SvgProps>
  onPress(): void
}

const SettingCard = ({ title, Icon, onPress }: SettingCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CardContainer>
        <IconWrapper>
          <Icon width={25} height={25} />
        </IconWrapper>
        <CardText>{title}</CardText>
      </CardContainer>
    </TouchableOpacity>
  )
}

export default SettingCard

const CardContainer = styled.View`
  margin: 20px auto 0;
  width: 90%;
  height: 75px;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.little};
  box-shadow: ${({ theme }) => theme.shadow.basic};
  background: #ffffff;
`
const IconWrapper = styled.View`
  margin-left: 25px;
`

const CardText = styled.Text`
  margin-left: 22px;
  width: 75%;
  font-size: ${({ theme }) => theme.typeScale.header3};
  line-height: ${({ theme }) => theme.lineHeight.header5};
  font-weight: 600;
`
