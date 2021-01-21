import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import styled from 'styled-components/native'
import ImagesCarousel from 'components/ImagesCarousel'
import categoryData from 'data/categoryData'
import PlaceCard from 'components/PlaceCard'
import Icon from 'uikit/Icon'

function Home() {
  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <ItemWrapper>
          <ImageWrapper>
            <ItemImage source={item.image} />
          </ImageWrapper>
          <ItemText numberOfLines={1} ellipsizeMode="tail">
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
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ImagesCarousel />
        <Subtitle>Категории ресторанов:</Subtitle>
        <FlatListWrapper>
          <FlatList
            data={categoryData}
            renderItem={renderCategoryItem}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </FlatListWrapper>
        <PopularSubtitle>Популярные заведения города:</PopularSubtitle>
        <CardContainer>
          <SingleCardWrapper>
            <PlaceCard
              name="мамалыга"
              image={require('assets/images/cardImage1.jpg')}
              isLiked={false}
              rating={4.1}
              numOfReviews={35}
              deliveryTime="45 мин - 1 час"
              cuisineCategories={['Европейская', 'Кофейня', 'Десерты']}
            />
            <SeparatorWrapper>
              <Icon name={'Separator'} />
            </SeparatorWrapper>
          </SingleCardWrapper>
          <SingleCardWrapper>
            <PlaceCard
              name="marco polo"
              image={require('assets/images/cardImage2.jpg')}
              isLiked={false}
              rating={2.6}
              numOfReviews={44}
              deliveryTime="20 мин - 1 час"
              cuisineCategories={['Европейская', 'Кофейня', 'Десерты']}
            />
            <SeparatorWrapper>
              <Icon name={'Separator'} />
            </SeparatorWrapper>
          </SingleCardWrapper>
          <SingleCardWrapper>
            <PlaceCard
              name="du nord 1834"
              image={require('assets/images/cardImage3.jpg')}
              isLiked={true}
              rating={5.0}
              numOfReviews={155}
              deliveryTime="30 мин - 1 час"
              cuisineCategories={['Европейская', 'Кофейня', 'Десерты']}
            />
          </SingleCardWrapper>
        </CardContainer>
      </ScrollView>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 15,
  },
})

const Container = styled.SafeAreaView``

const BackgroundWrapper = styled.View`
  position: absolute;
`

const Subtitle = styled.Text`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.typeScale.header3};
  line-height: ${({ theme }) => theme.lineHeight.header5};
  font-weight: 600;
`

const ItemWrapper = styled.View`
  margin-right: 15px;
`

const FlatListWrapper = styled.View`
  margin-top: 15px;
`

const ItemText = styled.Text`
  margin-left: 5px;
  margin-top: 10px;
  line-height: ${({ theme }) => theme.lineHeight.header6};
  font-size: ${({ theme }) => theme.typeScale.header4};
  font-weight: 600;
`

const ImageWrapper = styled.View`
  width: 95px;
  height: 95px;
  background-color: ${({ theme }) => theme.colors.ui.blue};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
`

const ItemImage = styled.Image`
  width: 75px;
  height: 75px;
  margin-left: 30px;
`

const PopularSubtitle = styled.Text`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.typeScale.header3};
  line-height: ${({ theme }) => theme.lineHeight.header5};
  font-weight: 600;
`

const CardContainer = styled.View`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.typeScale.header4};
  line-height: ${({ theme }) => theme.lineHeight.header8};
  color: #555555;
`

const SingleCardWrapper = styled.View`
  margin-bottom: 25px;
`

const SeparatorWrapper = styled.View`
  margin-top: 25px;
  width: 345px;
  height: 5px;
`
