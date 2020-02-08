import * as React from "react"
import { palette } from "../../../theme/palette"
import CardView from 'react-native-cardview'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, ViewStyle, TextStyle, ImageStyle, TouchableOpacity, Image } from "react-native"
import { Text, Button } from "../.."
import { FLEX, MB } from "../../../theme/style"
import { color, spacing } from "../../../theme";

export interface CardProductLgProps {

  product?
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

const ITEMTITLE: TextStyle = {
  fontFamily: 'Poppins-Regular',
  fontSize: 17,
  flex: 4,
  color: color.defaultText
}

const AMOUNTINFO: TextStyle = {
  color: color.default,
  fontFamily: 'Poppins-SemiBold',
  fontSize: 10,
  textAlignVertical: "center",
  textAlign: "right",
  flex: 1,
}

const ITEMDESCRIPTION: TextStyle = {
  color: color.textGrey,
  fontFamily: 'Poppins-SemiBold',
  fontSize: 10,
  textAlign: "justify",
  paddingRight: spacing[3]
}

const PRICE: TextStyle = {
  fontFamily: 'Poppins-Regular',
  fontSize: 17,
  color: palette.pink,
  flex: 2
}

const BUYBUTTON: ViewStyle = {
  flex: 1,
  backgroundColor: palette.pink,
  marginRight: spacing[5],
  borderRadius: 20,
  maxHeight: 21,
  marginTop: 2.5
}

const CARD: ViewStyle = {
  backgroundColor: palette.white,
  borderRadius: 10,
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[1],
  width: 320,
}

const ITEMCARD: ViewStyle = {
  flexDirection: "row",
  borderWidth: 0,
  width: '100%',
}

const MARGIN = {
  marginVertical: spacing[3],
}

const IMAGE: ImageStyle = {
  ...MARGIN,
  maxWidth: 90,
  height: 128,
  resizeMode: 'cover',
  flex: 1,
  borderRadius: 10,
  marginLeft: spacing[3],
  marginRight: spacing[2]
}

const TEXTCONTAINER: ViewStyle = {
  ...MARGIN,
  ...FLEX[1],
  flexDirection: "column",
}

const ITEMTAG: TextStyle = {
  color: color.defaultText,
  opacity: 0.5,
  fontSize: 10,
  flex: 4,
}

const STARRATING: TextStyle = {
  backgroundColor: color.default,
  minWidth: 10,
  height: 15,
  borderRadius: 20,
  fontSize: 10,
  flex: 0.7,
  left: -spacing[2],
  textAlign: "center"
}

const FLEXROW: ViewStyle = {
  display: "flex",
  flexDirection: "row"
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function CardProductLg(props: CardProductLgProps) {
  // grab the props
  const { style, product, ...rest } = props

  return (
    <View style={[CARD, style]} {...rest}>
      <CardView
        cardElevation={5}
        cardMaxElevation={2}
        cornerRadius={20}>
        <TouchableOpacity style={ITEMCARD}>
          <Image style={IMAGE} source={{ uri: product.image }} />

          <View style={TEXTCONTAINER}>
            <View style={FLEX[1]}>
              <View style={FLEXROW}>
                <Text style={ITEMTAG}>
                  {product.tag}
                </Text>
                <Text style={STARRATING}>
                  <Icon name="star" size={10} color={palette.white} />
                  {" "}{product.rating}
                </Text>
              </View>
            </View>

            <View style={FLEX[2]}>
              <View style={FLEXROW}>
                <Text style={ITEMTITLE} truncade={18}>
                  {product.title}
                </Text>
                <Text style={AMOUNTINFO}>
                  {product.packageQuantity} un.{"  "}
                </Text>
              </View>
            </View>

            <View style={FLEX[3]}>
              <Text style={ITEMDESCRIPTION}>
                {product.description}
              </Text>
            </View>

            <View style={[FLEX[1], MB[1]]}>
              <View style={FLEXROW}>
                <Text style={PRICE}>
                  R$ {product.price}
                </Text>
                <Button style={BUYBUTTON} tx="common.see" textStyle={{ fontFamily: 'Poppins-Bold', fontSize: 10, color: palette.white }} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </CardView>
    </View>
  )
}
