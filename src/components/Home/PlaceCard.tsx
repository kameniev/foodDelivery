import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import styled from 'styled-components/native'
import {
  Heart,
  Stars0,
  Stars1,
  Stars2,
  Stars3,
  Stars4,
  Stars5,
  Clock,
} from 'uikit/Icons'
import { Paragraph, Details, Heading1, BaseText } from 'uikit/Typography'

interface PlaceCardProps {
  isLiked: boolean
  image: ImageSourcePropType
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
          <HeartWrapper>
            <Heart />
          </HeartWrapper>
        </IsLiked>
        <RatingContainer>
          <RatingText color="white" weight="bold">
            {rating}
          </RatingText>

          <StarsWrapper>
            <>
              {rating < 1 ? (
                <Stars0 />
              ) : rating < 2 ? (
                <Stars1 />
              ) : rating < 3 ? (
                <Stars2 />
              ) : rating < 4 ? (
                <Stars3 />
              ) : rating < 5 ? (
                <Stars4 />
              ) : (
                <Stars5 />
              )}
            </>
          </StarsWrapper>
          <ReviewsNumber color="white">({numOfReviews})</ReviewsNumber>
        </RatingContainer>
        <DeliveryTime>
          <TimeIconWrapper>
            <Clock />
          </TimeIconWrapper>
          <TimeText color="white">{deliveryTime}</TimeText>
        </DeliveryTime>
      </CardImageWrapper>
      <CardTitle color="black" weight="bold">
        {name}
      </CardTitle>
      <CuisineCategories color="gray">{cuisine}</CuisineCategories>
    </CardWrapper>
  )
}

const CardWrapper = styled.TouchableOpacity``

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

const IsLiked = styled.TouchableOpacity<{ isLiked: boolean }>`
  position: absolute;
  right: 9px;
  top: 9px;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background: ${({ isLiked }) =>
    isLiked ? 'rgba(2, 124, 173, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  justify-content: center;
  align-items: center;
`

const HeartWrapper = styled.View``

const RatingContainer = styled.View`
  position: absolute;
  left: 16px;
  bottom: 12px;
  flex-direction: row;
`

const RatingText = styled(Paragraph)``

const ReviewsNumber = styled(Details)`
  margin-left: 5px;
`

const StarsWrapper = styled.View`
  width: 55px;
  margin: 2px 0 0 5px;
`

const DeliveryTime = styled.View`
  position: absolute;
  right: 16px;
  bottom: 13px;
  flex-direction: row;
`

const TimeText = styled(Details)``

const TimeIconWrapper = styled.View`
  width: 14px;
  margin-right: 5px;
`

const CardTitle = styled(Heading1)`
  margin: 20px 0 0 3px;
  text-transform: uppercase;
`

const CuisineCategories = styled(BaseText)`
  margin: 7px 0 0 3px;
`
