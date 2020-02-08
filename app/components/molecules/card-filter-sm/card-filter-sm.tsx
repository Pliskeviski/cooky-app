import * as React from "react"
import { View, ViewStyle, ImageStyle, TextStyle, TouchableOpacity, Image } from "react-native"
import { Text } from "../.."
import { palette } from "../../../theme/palette"
import { spacing, color } from "../../../theme"
import { FLEX } from "../../../theme/style"
import CardView from 'react-native-cardview'

export interface CardFilterSmProps {
  tx?: string

  text?: string

  imgUrl?: string

  title?: string

  style?: ViewStyle
}

const CARD: ViewStyle = {
  backgroundColor: palette.white,
  borderRadius: 10,
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
}

const ITEMCARD: ViewStyle = {
  flexDirection: "row",
  borderWidth: 0,
}

const MARGIN = {
  marginTop: spacing[1],
  marginBottom: spacing[1],
}

const IMAGE: ImageStyle = {
  ...MARGIN,
  width: 30,
  height: 30,
  resizeMode: 'contain',
  flex: 1,
  marginLeft: spacing[2],
  marginRight: spacing[2],
  marginTop: spacing[2]
}

const CARDTITLE: TextStyle = {
  flex: 1.5,
  color: color.defaultText,
  fontFamily: 'Poppins-Regular',
  fontSize: 17,
  marginTop: -2,
  height: 40
}


const CARDDESC: TextStyle = {
  ...CARDTITLE,
  flex: 1,
  fontSize: 11,
  paddingBottom: 0
}

const TEXTINFO: ViewStyle = {
  ...MARGIN,
  ...FLEX[1],
  flexDirection: "column",
  marginRight: spacing[2],
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function CardFilterSm(props: CardFilterSmProps) {
  // grab the props
  const { tx, text, style, title, imgUrl } = props

  return (
    <View style={[CARD, style]}>
      <CardView
        cardElevation={5}
        cardMaxElevation={2}
        cornerRadius={10}>
        <TouchableOpacity style={ITEMCARD}>
          <Image style={IMAGE} source={{uri: imgUrl}} />
          <View style={TEXTINFO}>
            <Text style={CARDTITLE}>{title}</Text>
            <Text style={CARDDESC}>{tx || text}</Text>
          </View>
        </TouchableOpacity>
      </CardView>
    </View>
  )
}
