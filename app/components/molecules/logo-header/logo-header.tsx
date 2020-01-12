import * as React from "react"
import { View, ViewStyle, Image, TextStyle, ImageStyle } from "react-native"
import { Text } from "../../atoms/text/text"
import { color } from "../../../theme"

const logoIcon = require("../../../assets/cotton_candy.png");

export interface LogoHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function LogoHeader(props: LogoHeaderProps) {
  // grab the props
  const { style, ...rest } = props

  const textStyle: TextStyle = {
    fontSize: 28,
    lineHeight: 39,
    textAlign: "center",
    color: color.default,
    fontFamily: "Asap-Bold",
  }

  const logoStyle: ImageStyle = {
    alignSelf: "center",
    maxWidth: "20%",
    resizeMode: 'contain'
  }

  return (
    <View style={style} {...rest}>
      <Image source={logoIcon} style={logoStyle} />
      <Text tx="app.name" style={textStyle} />
    </View>
  )
}
