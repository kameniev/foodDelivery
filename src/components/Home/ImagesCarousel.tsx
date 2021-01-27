import React from 'react'
import styled from 'styled-components/native'
import Carousel from 'react-native-snap-carousel'
import carouselData from 'data/carouselData'

export default class ImagesCarousel extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <Wrapper>
        <CarouselImage source={item.image} />
      </Wrapper>
    )
  }

  render() {
    return (
      <CarouselWrapper>
        <Carousel
          data={carouselData}
          renderItem={this._renderItem}
          sliderWidth={345}
          itemWidth={345}
        />
      </CarouselWrapper>
    )
  }
}

const CarouselWrapper = styled.View``

const CarouselImage = styled.Image`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 345px;
  height: 260px;
`

const Wrapper = styled.View`
  margin: 20px auto 0;
  width: 345px;
  height: 260px;
`
