import styled from 'styled-components/native'
import { Card } from 'react-native-paper'

export const RestaurantCard = styled(Card)`
  background-color: white;
  padding: ${(props) => props.theme.space[3]};
`

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`

export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`

export const Row = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
  align-items: center;
`

export const MoveEnd = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

export const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
  align-items: flex-start;
`
