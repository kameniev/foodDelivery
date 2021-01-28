import React from 'react'
import styled from 'styled-components/native'
import { Heading4 } from 'uikit/Typography'

const ProfileAboutUsScreen = () => {
  return (
    <Container>
      <DescriptionContainer>
        <Heading4 color="black" weight="semibold">
          Ежедневно мы обновляем меню для организации в компаниях Москвы и
          Подмосковья обедов в офисе. Каждый день мы предлагаем на выбор не
          менее 50 блюд и 5 видов комплексных обедов, в том числе диетические,
          вегетарианские и постные блюда, а также блюда национальной кухни.
        </Heading4>
      </DescriptionContainer>
      <DescriptionContainer>
        <Heading4 color="black" weight="semibold">
          В меню нашего выездного ресторана также представлены несколько
          VIP-блюд и большой выбор напитков, бутербродов, сэндвичей, десертов и
          выпечки собственного производства.
        </Heading4>
      </DescriptionContainer>
    </Container>
  )
}

export default ProfileAboutUsScreen

const Container = styled.SafeAreaView``

const DescriptionContainer = styled.View`
  width: 90%;
  margin-top: 20px;
  align-self: center;
`
