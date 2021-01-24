import React from 'react'
import styled from 'styled-components/native'

const TextArea = styled.TextInput`
  margin: 10px auto 0px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 5px;
  padding-right: 5px;
  width: 90%;
  height: 90px;
  border: 1px solid rgba(85, 85, 85, 0.2);

  font-size: ${({ theme }) => theme.typeScale.header4};
  line-height: ${({ theme }) => theme.lineHeight.header4};
`
export default TextArea
