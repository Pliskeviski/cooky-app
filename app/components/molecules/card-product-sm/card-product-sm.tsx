import * as React from "react"
import { View, ViewStyle, TextStyle, ImageStyle, TouchableOpacity, Image } from "react-native"
import { Text } from "../.."
import { color, spacing } from "../../../theme"
import { palette } from "../../../theme/palette"
import CardView from 'react-native-cardview'

export interface CardProductSmProps {
  product?
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

const CARD: ViewStyle = {
  backgroundColor: palette.white,
  borderRadius: 10,
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[1],
  width: 125,
  height: '100%',
}

const ITEMCARD: ViewStyle = {
  flexDirection: "row",
  borderWidth: 0,
}

const IMAGE: ImageStyle = {
  width: 125,
  height: 125,
  resizeMode: 'cover',
  borderRadius: 10,
  flex: 1,
  marginHorizontal: spacing[2],
  marginTop: spacing[2],
  marginBottom: spacing[6]
}

const CIRCLE: ViewStyle = {
  width: 30,
  height: 30,
  borderRadius: 15,
  position: "absolute",
  backgroundColor: palette.strongPink,
  alignSelf: "flex-end",
  left: 85,
  bottom: 15,
  alignItems: "center"
}

const TITLE: TextStyle = {
  fontFamily: "Poppins-Regular",
  color: color.defaultText,
  fontSize: 8.5,
  position: "absolute",
  alignSelf: "flex-end",
  marginLeft: spacing[2],
  bottom: spacing[2]
}

const PRICE: TextStyle = {
  width: 50,
  height: 22,
  borderRadius: 15,
  position: "absolute",
  backgroundColor: palette.white,
  borderWidth: 1,
  borderColor: palette.lighPink,
  alignSelf: "flex-start",
}


/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function CardProductSm(props: CardProductSmProps) {
  // grab the props
  const { style, product, ...rest } = props

  return (
    <View style={[CARD]} {...rest}>
      <CardView
        cardElevation={5}
        cardMaxElevation={2}
        cornerRadius={10}>
        <TouchableOpacity style={ITEMCARD}>
          <Image style={IMAGE} source={{ uri: product.image }} />
          {/* <View style={CIRCLE}>
            <Text style={{ fontSize: 21, textAlign: "center", textAlignVertical: "center", fontFamily: "Poppins-Regular" }}>
              +
            </Text>
          </View> */}
          <Text style={TITLE} truncade={18}>
            {product.title}
          </Text>
          <View style={PRICE}>
            <Text style={{ fontSize: 10, textAlign: "center", fontFamily: "Poppins-Regular", color: palette.pink, paddingTop: 2 }}>
              R$ {product.price}
            </Text>
          </View>
        </TouchableOpacity>
      </CardView>
    </View>
  )
}
