import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'

import styled from 'styled-components/native'
import open from '../../../../assets/open'
import star from '../../../../assets/star'

const RestaurantCard = ({ restaurants = {} }) => {
  const RestaurantCard = styled(Card)`
    background-color: white;
    padding: ${(props) => props.theme.space[3]};
  `
  const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};
  `
  const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
  `

  const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body}
    color: ${({ theme }) => theme.colors.ui.primary};
  `
  const Info = styled.View`
    padding: ${(props) => props.theme.space[2]};
  `
  const Row = styled.View`
    padding: ${(props) => props.theme.space[2]};
    flex-direction: row;
    justify-content: space-between;
  `
  const Rating = styled.View`
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
    flex-direction: row;
  `
  const {
    name = 'Some Restaurant',
    icon,
    images = ['https://picsum.photos/700'],
    isOpen = false,
    rating = 4,
  } = restaurants
  return (
    <RestaurantCard elevation={5}>
      {/* <Card.Content></Card.Content> */}
      <RestaurantCardCover key={name} source={{ uri: images[0] }} />
      <Info>
        <Title>{name}</Title>
        <Row>
          <Rating>
            {[...Array(Math.floor(rating))].map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SvgXml xml={open} width={40} height={40} />
        </Row>

        <Address>100 Some street</Address>
      </Info>
    </RestaurantCard>
  )
}

export default RestaurantCard
