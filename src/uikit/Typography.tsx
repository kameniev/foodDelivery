import styled from 'styled-components/native'
import * as colors from 'utils/colors'
import { FontWeight, SecondaryFonts } from 'utils/typography'

interface BaseTextProps {
  color?: typeof colors
  weight?: FontWeight
  family?: SecondaryFonts
}

export const BaseText = styled.Text<BaseTextProps>`
  font-family: ${({ theme, weight, family }) =>
    family
      ? theme.secondaryFonts[family][weight || 'regular']
      : theme.primaryFont[weight || 'regular']};
  font-weight: ${({ weight }) => weight};
  color: ${({ theme, color }) => color || theme.colors.system.white};
`

export const Heading1 = styled(BaseText)`
  font-size: ${({ theme }) => theme.typeScale.heading1};
  line-height: ${({ theme }) => theme.lineHeight.heading1};
`
