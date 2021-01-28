import React from 'react'
import { Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import ImagesCarousel from 'components/Home/ImagesCarousel'
import PlaceCard from 'components/Home/PlaceCard'
import categoryData from 'data/categoryData'
import CardImage1 from 'assets/images/card_image1.jpg'
import { Heading2, Paragraph } from 'uikit/Typography'

const HomeMainScreen = () => {
  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <ItemWrapper>
          <ImageWrapper>
            <ItemImage source={item.image} />
          </ImageWrapper>
          <ItemText
            color="black"
            weight="bold"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.title}
          </ItemText>
        </ItemWrapper>
      </TouchableOpacity>
    )
  }

  return (
    <Container>
      <BackgroundWrapper>
        <Image source={require('assets/images/indexbg.png')} />
      </BackgroundWrapper>
      <ScrollView>
        <ImagesCarouselWrapper>
          <ImagesCarousel />
        </ImagesCarouselWrapper>
        <Subtitle color="black" weight="bold">
          Категории ресторанов:
        </Subtitle>
        <FlatListWrapper>
          <FlatList
            data={categoryData}
            renderItem={renderCategoryItem}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </FlatListWrapper>
        <PopularSubtitle color="black" weight="bold">
          Популярные заведения города:
        </PopularSubtitle>
        <CardContainer>
          <SingleCardWrapper>
            <PlaceCard
              name="мамалыга"
              image={CardImage1}
              isLiked={false}
              rating={4.1}
              numOfReviews={35}
              deliveryTime="45 мин - 1 час"
              cuisineCategories={['Европейская', 'Кофейня', 'Десерты']}
            />
          </SingleCardWrapper>
        </CardContainer>
      </ScrollView>
    </Container>
  )
}

export default HomeMainScreen

const ImagesCarouselWrapper = styled.View`
  margin: 0 auto;
`

const Container = styled.SafeAreaView``

const BackgroundWrapper = styled.View`
  position: absolute;
`

const Subtitle = styled(Heading2)`
  margin: 40px 0 0 15px;
`

const ItemWrapper = styled.View`
  margin-right: 15px;
`

const FlatListWrapper = styled.View`
  margin: 15px 0 0 15px;
`

const ItemText = styled(Paragraph)`
  margin: 10px 0 0 5px;
`

const ImageWrapper = styled.View`
  width: 95px;
  height: 95px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
`

const ItemImage = styled.Image`
  width: 75px;
  height: 75px;
  margin-left: 30px;
`

const PopularSubtitle = styled(Heading2)`
  margin: 40px 0 0 15px;
`

const CardContainer = styled.View`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.typeScale.heading4};
  line-height: ${({ theme }) => theme.lineHeight.heading4};
  color: #555555;
`

const SingleCardWrapper = styled.View`
  margin-bottom: 25px;
  align-items: center;
`
