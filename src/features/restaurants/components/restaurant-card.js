import React from 'react'
import { Image } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Text } from '../../../components/typo/Text'
import open from '../../../../assets/open'
import star from '../../../../assets/star'
import { Spacer } from '../../../components/spacer/Spacer'
import {
  RestaurantCard as RCard,
  RestaurantCardCover,
  Address,
  Info,
  Row,
  MoveEnd,
  Rating,
} from './restaurant-card-styles'
const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = 'Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://picsum.photos/700'],
    isOpen = false,
    rating = 4,
    address = '100 some street',
  } = restaurant
  return (
    <RCard elevation={5}>
      {/* <Card.Content></Card.Content> */}
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] || 'https://picsum.photos/700' }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {[...Array(Math.floor(rating))].map((_, i) => (
              <SvgXml xml={star} width={18} height={18} key={i} />
            ))}
          </Rating>
          <MoveEnd>
            {!isOpen ? <Text variant="error">Closed Temporarily</Text> : null}
            <Spacer position="left" size="medium"></Spacer>
            <SvgXml xml={open} width={22} height={22} />
            <Spacer position="left" size="medium"></Spacer>
            <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
          </MoveEnd>
        </Row>

        <Address>{address}</Address>
      </Info>
    </RCard>
  )
}

export default RestaurantCard
