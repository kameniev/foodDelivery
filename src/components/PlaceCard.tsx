import React from 'react'
import styled from 'styled-components/native'
import { Clock } from 'uikit/Icons'

interface PlaceCardProps {
  isLiked: boolean
  image: string
  rating: number
  numOfReviews: number
  deliveryTime: string
  name: string
  cuisineCategories: Array<string>
}

export default function PlaceCard({
  isLiked,
  image,
  rating,
  numOfReviews,
  deliveryTime,
  name,
  cuisineCategories,
}: PlaceCardProps) {
  const cuisine = cuisineCategories.join(' \u00B7 ')
  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage source={image} />
        <IsLiked isLiked={isLiked}>
          <LikedIcon name={'Heart'}></LikedIcon>
        </IsLiked>
        <RatingContainer>
          <RatingText>{rating}</RatingText>

          <StarsWrapper>
            <Icon
              name={
                rating >= 0 && rating < 1
                  ? 'Stars0'
                  : rating >= 1 && rating < 2
                  ? 'Stars1'
                  : rating >= 2 && rating < 3
                  ? 'Stars2'
                  : rating >= 3 && rating < 4
                  ? 'Stars3'
                  : rating >= 4 && rating < 5
                  ? 'Stars4'
                  : 'Stars5'
              }
            />
          </StarsWrapper>
          <ReviewsNumber>({numOfReviews})</ReviewsNumber>
        </RatingContainer>
        <DeliveryTime>
          <TimeIconWrapper>
            <Clock />
          </TimeIconWrapper>
          <TimeText>{deliveryTime}</TimeText>
        </DeliveryTime>
      </CardImageWrapper>
      <CardTitle>{name}</CardTitle>
      <CuisineCategories>{cuisine}</CuisineCategories>
    </CardWrapper>
  )
}

const CardWrapper = styled.TouchableOpacity`
  margin: 0 auto;
`

const CardImageWrapper = styled.View`
  width: 345px;
  height: 220px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
`

const CardImage = styled.Image`
  width: 345px;
  height: 220px;
  opacity: 0.75;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`

const IsLiked = styled.TouchableOpacity`
  position: absolute;
  right: 9px;
  top: 9px;
  border-radius: 50px;
  background: ${({ isLiked }) =>
    isLiked ? 'rgba(2, 124, 173, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  width: 35px;
  height: 35px;
  justify-content: center;
`

const LikedIcon = styled(Icon)`
  margin: 0 auto;
`

const RatingContainer = styled.View`
  position: absolute;
  left: 16px;
  bottom: 12px;
  flex-direction: row;
`

const RatingText = styled.Text`
  font-size: ${({ theme }) => theme.typeScale.header5};
  line-height: ${({ theme }) => theme.lineHeight.header7};
  color: ${({ theme }) => theme.colors.system.white};
  font-weight: bold;
`

const ReviewsNumber = styled.Text`
  margin-left: 5px;
  font-size: ${({ theme }) => theme.typeScale.header5};
  line-height: ${({ theme }) => theme.lineHeight.header7};
  color: ${({ theme }) => theme.colors.system.white};
`

const StarsWrapper = styled.View`
  width: 55px;
  margin-left: 5px;
  margin-top: 2px;
`

const DeliveryTime = styled.View`
  position: absolute;
  right: 16px;
  bottom: 13px;
  flex-direction: row;
`

const TimeText = styled.Text`
  font-size: ${({ theme }) => theme.typeScale.header5};
  line-height: ${({ theme }) => theme.lineHeight.header7};
  color: ${({ theme }) => theme.colors.system.white};
`

const TimeIconWrapper = styled.View`
  width: 14px;
  margin-right: 5px;
`

const CardTitle = styled.Text`
  margin-top: 20px;
  margin-left: 3px;
  font-size: ${({ theme }) => theme.typeScale.header3};
  line-height: ${({ theme }) => theme.lineHeight.header5};
  font-weight: bold;
  text-transform: uppercase;
`

const CuisineCategories = styled.Text`
  margin-top: 7px;
  margin-left: 3px;
  color: ${({ theme }) => theme.colors.ui.gray};
`
