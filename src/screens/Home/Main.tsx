import React from 'react'
import styled from 'styled-components/native'
import PlaceCard from 'components/Home/PlaceCard'
import CardImage1 from 'assets/images/card_image1.jpg'

const HomeMainScreen = () => {
  return (
    <Container>
      <CardsContainer>
        <PlaceCard
          name="мамалыга"
          image={CardImage1}
          isLiked={false}
          rating={4.1}
          numOfReviews={35}
          deliveryTime="45 мин - 1 час"
          cuisineCategories={['Европейская', 'Кофейня', 'Десерты']}
        />
        <PlaceCard
          name="мамалыга длиное название длинное название длинное название в одну строчку"
          image={CardImage1}
          isLiked={false}
          rating={2.0}
          numOfReviews={35}
          deliveryTime="45 мин - 1 час"
          cuisineCategories={[
            'Европейская',
            'Кофейня',
            'Десерты',
            'Европейская',
            'Кофейня',
            'Десерты',
            'Европейская',
            'Кофейня',
            'Десерты',
          ]}
        />
        <PlaceCard
          name="мамалыга"
          image={CardImage1}
          isLiked={true}
          rating={3.0}
          numOfReviews={35}
          deliveryTime="45 мин - 1 час"
          cuisineCategories={['Европейская', 'Кофейня', 'Десерты']}
        />
      </CardsContainer>
    </Container>
  )
}

export default HomeMainScreen

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`

const CardsContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: 30,
    marginHorizontal: 15,
  },
})``
