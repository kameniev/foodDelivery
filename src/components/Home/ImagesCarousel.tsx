import React from 'react'
import styled from 'styled-components/native'
import Carousel from 'react-native-snap-carousel'
import carouselData from 'data/carouselData'

const ImagesCarousel = () => {
  const renderItem = ({ item }) => (
    <Wrapper>
      <CarouselImage source={item.image} />
    </Wrapper>
  )

  return (
    <CarouselContainer>
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={345}
        itemWidth={345}
      />
    </CarouselContainer>
  )
}

export default ImagesCarousel

const CarouselContainer = styled.View``

const CarouselImage = styled.Image`
  width: 345px; // ?
  height: 260px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`

const Wrapper = styled.View`
  margin: 20px auto 0; // ? auto
  width: 345px; // ? без ширины
  height: 260px;
`
