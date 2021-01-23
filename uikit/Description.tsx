import styled from 'styled-components/native'

const Description = styled.Text`
  width: 90%;
  margin: 20px auto 0px;
  font-size: ${({ theme }) => theme.typeScale.header3};
  line-height: ${({ theme }) => theme.lineHeight.header5};
  font-weight: 400;
`
export default Description
