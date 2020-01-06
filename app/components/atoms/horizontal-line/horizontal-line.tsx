import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from "../text/text"
import { color } from "../../../theme"

export interface HorizontalLineProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

const HAIRLINE: ViewStyle = {
  backgroundColor: color.default,
  height: 1,
  flex: 1,
  marginTop: 10
}

const ORTEXT: TextStyle = {
  backgroundColor: color.transparent,
  fontFamily: 'Poppins-Bold',
  fontSize: 13,
  paddingHorizontal: 10,
  alignSelf: 'center',
  color: color.default,
}

const HRROW: ViewStyle = {
  flexDirection:"row"
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function HorizontalLine(props: HorizontalLineProps) {
  // grab the props
  const { tx, text, style, ...rest } = props
  const textStyle = {}

  return (
    <View style={[HRROW, style]} {...rest}>
      <View style={HAIRLINE} />
      <Text tx={tx} text={text} style={[ORTEXT, textStyle]} />
      <View style={HAIRLINE} />
    </View>
  )
}
