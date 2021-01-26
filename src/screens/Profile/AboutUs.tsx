import React from 'react'
import styled from 'styled-components/native'
import Description from 'uikit/Description'

const ProfileAboutUsScreen = () => {
  return (
    <Container>
      <Description>
        Ежедневно мы обновляем меню для организации в компаниях Москвы и
        Подмосковья обедов в офисе. Каждый день мы предлагаем на выбор не менее
        50 блюд и 5 видов комплексных обедов, в том числе диетические,
        вегетарианские и постные блюда, а также блюда национальной кухни.
      </Description>
      <Description>
        В меню нашего выездного ресторана также представлены несколько VIP-блюд
        и большой выбор напитков, бутербродов, сэндвичей, десертов и выпечки
        собственного производства.
      </Description>
    </Container>
  )
}

export default ProfileAboutUsScreen

const Container = styled.SafeAreaView``
