import * as React from "react"
import { View, ViewStyle, TextStyle, ImageStyle, TouchableOpacity, Image } from "react-native"
import { Text } from "../.."
import { color, spacing } from "../../../theme"
import { FlexRow, FLEX, MT } from "../../../theme/style"
import { HorizontalLine } from "../../atoms/horizontal-line/horizontal-line"

export interface LoginRegisterProps {
  /**
   * Text which is looked up via i18n.
   */
  txSmall?: string

  txLarge?: string

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  txLargeStyle?: TextStyle
}

const socialIcons = [
  require('../../../assets/facebook.png'),
  require('../../../assets/twitter.png'),
  require('../../../assets/google.png'),
]

const CONTENT: TextStyle = {
  fontFamily: 'Ubuntu-Bold',
  color: color.default,
  fontSize: 22,
  textAlign: "center",
  marginTop: spacing[6]
}

const CONTENT_SM: TextStyle = {
  fontFamily: 'Ubuntu-Bold',
  color: color.default,
  fontSize: 17,
  textAlign: "center",
  marginTop: spacing[5]
}

const IMAGE: ImageStyle = {
  alignSelf: "center",
  width: 100,
  height: 100,
  resizeMode: 'contain',
  flex: 1,
}

const LIST: ViewStyle = {
  ...FlexRow,
  ...FLEX[1],
  alignSelf: 'center',
  marginTop: spacing[3],
}

const ITEMLIST: ViewStyle = {
  flex: 1 / 7,
  aspectRatio: 1
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function LoginRegister(props: LoginRegisterProps) {
  // grab the props
  const { txSmall, txLarge, text, style, txLargeStyle, ...rest } = props
  const textStyle = { }

  return (
    <View style={style} {...rest}>
      <Text style={[CONTENT, txLargeStyle]} tx={txLarge} />
      <Text style={CONTENT_SM} tx={txSmall} />

      <View style={[LIST]}>
        <TouchableOpacity
          style={[ITEMLIST]}>
          <Image style={IMAGE} source={socialIcons[0]} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[ITEMLIST]}>
          <Image style={IMAGE} source={socialIcons[1]} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[ITEMLIST]}>
          <Image style={IMAGE} source={socialIcons[2]} />
        </TouchableOpacity>
      </View>

      <View style={MT[3]}>
        <HorizontalLine style={{ backgroundColor: color.transparent }} tx="registerScreen.or" />
      </View>
    </View>
  )
}
