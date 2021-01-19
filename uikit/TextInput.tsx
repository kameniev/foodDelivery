import React from 'react'
import styled from 'styled-components/native'

const TextInput = styled.TextInput`
  padding-top: 13px;
  padding-bottom: 13px;
  width: ${({ width }) => (width == 'full' ? '95%' : '50%')};
  height: 48px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(100, 3, 23, 0.2);

  font-size: ${({ theme }) => theme.typeScale.header4};
  line-height: ${({ theme }) => theme.lineHeight.header4};
`
export default TextInput
