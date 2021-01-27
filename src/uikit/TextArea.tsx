import React from 'react'
import styled from 'styled-components/native'

const TextArea = styled.TextInput`
  padding: 13px 5px 13px 5px;
  border: 1px solid rgba(85, 85, 85, 0.2);
  height: 90px;
  font-size: ${({ theme }) => theme.typeScale.header4};
  line-height: ${({ theme }) => theme.lineHeight.header4};
`
export default TextArea
